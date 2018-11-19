import { ApolloProvider, renderToStringWithData } from "react-apollo";
import juice from 'juice';
import fs from 'fs';
import url from 'url';
import qp from 'query-parse';

import { Provider as ProviderRedux } from 'react-redux'
import { Store } from '../store'
import { initLocalize } from "../store/reducers/localization/actions";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider as StyleProvider } from 'react-fela'
import { ThemeProvider } from 'react-fela'
import { renderToMarkup } from "fela-dom";
import { StaticRouter } from 'react-router';
import { client } from '../apollo/index.server';

import { createTheme, palette } from '../style/theme';

import { createStyleRenderer } from "../style";
import Html from "./html";
import EmailTemplate from '../modules/static/view/mail/index'
import { getTranslate } from "react-localize-redux/lib/index";


export const createEmailTemplate = async (request, response) => {
	try {
		const {params} = request;
		const {search} = url.parse(request.originalUrl);
		const queryParams = search ? qp.toObject(search.substring(1)) : {};
		const language = queryParams.language || 'EN';
		console.log('createEmailTemplate: language', language);

		console.log('createEmailTemplate: queryParams', queryParams);

		const renderer = createStyleRenderer();
		await Store.dispatch(initLocalize(Store.getState(), language || 'EN'));

		// home_static_mail_subject
		const Component = (
			<ProviderRedux store={Store}>
				<StyleProvider renderer={renderer}>
					<ThemeProvider theme={createTheme(palette)}>
						<ApolloProvider client={client}>
							<EmailTemplate emerhash={params.hash}/>
						</ApolloProvider>
					</ThemeProvider>
				</StyleProvider>
			</ProviderRedux>
		);


		/**
		 * @param {Object} COMPONENT - React component
		 * @description https://www.apollographql.com/docs/react/features/server-side-rendering.html#renderToStringWithData
		 * */
		await renderToStringWithData(Component)
			.then(content => {
				const styleMarkup = renderToMarkup(renderer);

				const REACT_HTML = <Html subject language={language} getStatic={true} content={content}/>;

				const HTML = `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(REACT_HTML)}`.replace('<style></style>', styleMarkup).replace('<mailsubject></mailsubject>', `<mailsubject>${getTranslate(Store.getState().locale)('static_mail_subject')}}</mailsubject>`)

				fs.appendFile(`public/EmailTemplateInlineTEST.html`, juice(HTML, {
					insertPreservedExtraCss: true,
					preserveMediaQueries: true,
					removeStyleTags: false,
				}), function (err) {
					if (err) throw err;
					console.log('Saved!');
				});


				response.status(200);
				/** @description http://expressjs.com/en/4x/api.html#res.send */
				response.send(HTML);
				/** @description http://expressjs.com/en/4x/api.html#res.end */
				response.end();
			})
			.catch(error => {
				console.log('error: ', error);
				// response.status(502);
				response.send(JSON.stringify(error));
				response.end();
			});

	} catch (error) {
		console.log('error: ', error);
		// response.status(502);
		response.send(JSON.stringify(error));
		response.end();
	}
};

export default createEmailTemplate();
