import fs from 'fs';
import del from 'del';
import inlineCss from 'inline-css';
import juice from 'juice';

import {Provider as ProviderRedux} from 'react-redux'
import {Store} from '../store'
import {initLocalize} from "../store/reducers/localization/actions";
import React,{Component} from 'react';
import ReactDOMServer from 'react-dom/server';
import {Provider as StyleProvider} from 'react-fela'
import {ThemeProvider} from 'react-fela'
import {renderToMarkup} from "fela-dom";
import {createTheme,palette} from '../style/theme';

import Mail from '../modules/static/view/mail/index'
import {createStyleRenderer} from "../style";
import Html from "./html";


export const createEmailTemplate = async (language = 'EN') => {
    const renderer = createStyleRenderer();
    await Store.dispatch(initLocalize(Store.getState(), language ));

    const Component = (
        <ProviderRedux store={Store}>
            <StyleProvider renderer={renderer}>
                <ThemeProvider theme={createTheme(palette)}>
                    <Mail language={language}/>
                </ThemeProvider>
            </StyleProvider>
        </ProviderRedux>
    );


    const staticMarkupComponent = ReactDOMServer.renderToStaticMarkup(Component);

    const html = <Html content={staticMarkupComponent}/>;

    const styleMarkup = renderToMarkup(renderer);

    const inputBody = `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`.replace('<style></style>',styleMarkup);

    await del([
        `public/EmailTemplateInline${language}.html`
    ])
        .then(paths => {
            console.info('Deleted files and folders:\n',paths.join('\n'));
            return paths
        }).catch((error) => {
            console.error(error);
            return error;
        });

    fs.appendFile(`public/EmailTemplateInline${language}.html`,juice(inputBody,{
        insertPreservedExtraCss: true,
        preserveMediaQueries: true,
        removeStyleTags: false,
    }),function (err) {
        if (err) throw err;
        console.log('Saved!');
    });


};

export default createEmailTemplate();