import fs from 'fs';

import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';
import {Provider as StyleProvider} from 'react-fela'
import {ThemeProvider} from 'react-fela'
import {renderToMarkup} from "fela-dom";
import {createTheme, palette} from '../style/theme';

import Mail from '../modules/static/view/mail/index'
import {createStyleRenderer} from "../style";
import Html from "./html";


export const createEmailTemplate = (hash) => {
    const renderer = createStyleRenderer();
    console.log('createEmailTemplate');

    const Component = (
        <StyleProvider renderer={renderer}>
            <ThemeProvider theme={createTheme(palette)}>
                <Mail/>
            </ThemeProvider>
        </StyleProvider>
    );


    const styleMarkup = renderToMarkup(renderer);

    const html = <Html content={Component}/>

    const inputBody = `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`.replace('<style></style>', styleMarkup)

    fs.appendFile(`public/EmailTemplate.html`, inputBody, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

};

export default createEmailTemplate();