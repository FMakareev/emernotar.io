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
import { client } from '../apollo/index.server';

import { createTheme, palette } from '../style/theme';

import { createStyleRenderer } from "../style";
import Html from "./html";
import EmailTemplateWeb from '../modules/static/view/mail/index'
import EmailTemplateIOS from '../modules/static/view/mailIOS/index'
import { getTranslate } from "react-localize-redux/lib/index";

const getTemplatePath = (queryParams) => {
	console.log('getTemplatePath: queryParams.template', queryParams.template === '0');
	console.log('getTemplatePath: queryParams.emerhash', queryParams.emerhash);
	console.log('getTemplatePath: queryParams.language', queryParams.language);
	if(queryParams.template === '0'){

		return <EmailTemplateWeb emerhash={queryParams.emerhash}/>
	} else if (queryParams.template === '1'){
		return <EmailTemplateIOS url={queryParams.url}/>
	} else {
		return null
	}
};

export const createEmailTemplate = async (request, response) => {
	try {
		const {params} = request;
		const {search} = url.parse(request.originalUrl);
		const queryParams = search ? qp.toObject(search.substring(1)) : {};
		const language = queryParams.language || 'EN';
		console.log('createEmailTemplate: template', queryParams);

		console.log('createEmailTemplate: search', search);

		const renderer = createStyleRenderer();
		await Store.dispatch(initLocalize(Store.getState(), language || 'EN'));

		// home_static_mail_subject
		const Component = (
			<ProviderRedux store={Store}>
				<StyleProvider renderer={renderer}>
					<ThemeProvider theme={createTheme(palette)}>
						<ApolloProvider client={client}>
							{
								params && params.emerhash ?
									<EmailTemplateWeb emerhash={params.emerhash}/>: getTemplatePath(queryParams)
							}
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

				const HTML = `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(REACT_HTML)}`.replace('<style></style>', styleMarkup);

				// fs.appendFile(`public/EmailTemplateInlineTEST.html`, juice(HTML, {
				// 	insertPreservedExtraCss: true,
				// 	preserveMediaQueries: true,
				// 	removeStyleTags: false,
				// }), function (err) {
				// 	if (err) throw err;
				// 	console.log('Saved!');
				// });


				response.status(200);
				/** @description http://expressjs.com/en/4x/api.html#res.send */
				response.send(juice(HTML, {
					insertPreservedExtraCss: true,
					preserveMediaQueries: true,
					removeStyleTags: false,
				}).replace('<mailsubject style="box-sizing: border-box;">', `<mailsubject>`));
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
