import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';
import {Provider as StyleProvider} from 'react-fela'
import {ThemeProvider} from 'react-fela'
import {renderToMarkup} from "fela-dom";
import {createTheme, palette} from '../style/theme';
import {client} from '../apollo/index.server';

import Cert from '../modules/static/view/cert/index'
import {createStyleRenderer} from "../style";
import Html from "./html";
import {ApolloProvider, renderToStringWithData} from "react-apollo";

import {StaticRouter} from 'react-router';
import {ConfigRouter} from '../routes';


export const certificate_template = (hash) => {

    try {
        console.log('hash: ', hash);
        return new Promise((resolve, reject) => {

            const renderer = createStyleRenderer();


            const Component = (
                <StyleProvider renderer={renderer}>
                    <ThemeProvider theme={createTheme(palette)}>
                        <ApolloProvider client={client}>
                            <StaticRouter location={'/create_certificat'} >
                                <Cert emerhash={hash}/>
                            </StaticRouter>
                        </ApolloProvider>
                    </ThemeProvider>
                </StyleProvider>);


            /**
             * @param {Object} COMPONENT - React component
             * @description https://www.apollographql.com/docs/react/features/server-side-rendering.html#renderToStringWithData
             * */
            renderToStringWithData(Component)
                .then(content => {
                    const styleMarkup = renderToMarkup(renderer);

                    const REACT_HTML = <Html getStatic={true} content={content}/>;

                    const HTML = `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(REACT_HTML)}`.replace('<style></style>', styleMarkup)

                    resolve(HTML)
                })
                .catch(e => {
                    /** @description http://expressjs.com/en/4x/api.html#res.end */
                    reject(`An error occurred. Please submit an issue to with the following stack trace:\n\n${ e.stack}`
                    );
                });

        })


    } catch (error) {
        return error
    }

}


//
// export const certificate_template = (hash) => {
//
//
//     return `<body>
// <h1>HASH: ${hash}</h1>
// </body>`
// }