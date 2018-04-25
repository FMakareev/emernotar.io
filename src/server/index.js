import register from 'ignore-styles'


import React from 'react'
import ReactDOMServer from 'react-dom/server';
import {renderToString} from "react-dom/server";
import {AsyncComponentProvider, createAsyncContext} from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import {ApolloProvider, renderToStringWithData} from 'react-apollo';
import path from 'path';
import {Provider as StyleProvider, ThemeProvider} from 'react-fela'
import {Provider as ProviderRedux} from 'react-redux'
import {matchRoutes, renderRoutes} from 'react-router-config';

import {StaticRouter} from 'react-router';
import {Store} from '../store'
import {createTheme, palette} from '../style/theme';


import express from "express"
import requestLanguage from 'express-request-language';
import cookieParser from 'cookie-parser';
import favicon from 'serve-favicon';
import cors from "cors"
import {renderToMarkup} from "fela-dom";

import {createStyleRenderer} from '../style';
import {client} from '../apollo/index.server';
import Html from "./html";
import {ConfigRouter} from '../routes';
import languages from '../store/reducers/localization/localization.json';
import {initLocalize} from "../store/reducers/localization/actions";
import {createEmailTemplate} from "./createEmailTemplate";
import {createCertificat} from "./createCertificatPDF";


const url = require('url');
const querystring = require('querystring');

const app = express();


const langArray = [];
languages.map((item) => {
    langArray.push(item.code)
});

app.use(cors());
app.use(favicon(path.resolve(__dirname, '../assets/favicon.ico')));

app.use(express.static("public"));
app.use(cookieParser());
app.use(requestLanguage({
    languages: langArray,
    queryName: 'lang',
    cookie: {
        name: 'lang',
        options: {
            path: '/',
            maxAge: 3650 * 24 * 3600 * 1000, // 10 years in miliseconds
        },
        url: '/lang/{language}',
    },
}));

if (__DEV__) {
    app.get("/create_email_template", (request, response) => {
        createEmailTemplate();

        response.status(200);
        /** @description http://expressjs.com/en/4x/api.html#res.send */
        response.send('create_email_template');
        /** @description http://expressjs.com/en/4x/api.html#res.end */
        response.end();

    })
}


app.get('/create_certificat/:hash', createCertificat);


/**
 * @description http://expressjs.com/en/4x/api.html#app.get.method
 * */
app.get("*", async (request, response) => {

    await Store.dispatch(initLocalize(Store.getState(), request.language || 'EN'));

    /**
     * @description Create the async context for our provider, this grants us the ability to tap into the state to send back to the client.
     * */
    const asyncContext = createAsyncContext();

    /**
     * @description http://fela.js.org/
     * */
    const renderer = createStyleRenderer();

    /**
     * @description parse request url
     * */
    let parsedUrl = url.parse(request.url);
    let parsedQs = querystring.parse(parsedUrl.query);


    // TODO: Сделать маршрутов
    let pageTitle = ConfigRouter.map((parent) => {

        if(parent.hasOwnProperty('routes')){
            return parent.routes.map((route) => {
                if(parsedUrl.pathname === route.path && route.path.indexOf(parsedUrl.pathname) === 0){
                    console.log('result:',route);
                    return Store.getState().locale.translations[route.name];
                }
            })
        }

    });

    /**
     * @description root react component
     * */
    const COMPONENT = (
        <AsyncComponentProvider asyncContext={asyncContext}>

            <ProviderRedux store={Store}>
                <StyleProvider renderer={renderer}>
                    <ThemeProvider theme={createTheme(palette)}>
                        <ApolloProvider client={client}>
                            <StaticRouter
                                location={{
                                    pathname: parsedUrl.pathname,
                                    search: parsedQs,
                                }} context={{}}
                            >
                                {renderRoutes(ConfigRouter)}
                            </StaticRouter>
                        </ApolloProvider>
                    </ThemeProvider>
                </StyleProvider>
            </ProviderRedux>
        </AsyncComponentProvider>
    );


    asyncBootstrapper(COMPONENT).then(() => {

        /**
         * @param {Object} COMPONENT - React component
         * @description https://www.apollographql.com/docs/react/features/server-side-rendering.html#renderToStringWithData
         * */
        renderToStringWithData(COMPONENT)
            .then(content => {

                /**
                 * @param {Object} renderer
                 * @description http://fela.js.org/docs/api/fela-dom/renderToMarkup.html
                 * */
                const styleMarkup = renderToMarkup(renderer);


                /**
                 * @description Get the async component state. 👇
                 * */
                const asyncState = asyncContext.getState();


                /**
                 * @description https://redux.js.org/recipes/server-rendering#handling-the-request
                 * */
                const reduxState = Store.getState();


                /**
                 * @param {string} content - markup of the requested page converted into a string
                 * @param {Object} client - Apollo client
                 * @description Marking of html markup
                 * */
                const REACT_HTML = <Html title={pageTitle} request={request} content={content} reduxState={reduxState}
                                         asyncState={asyncState}
                                         {...client}/>;

                /**
                 * @description https://reactjs.org/docs/react-dom-server.html
                 * */
                const HTML = `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(REACT_HTML)}`
                /** @description inject style */
                    .replace('<style></style>', styleMarkup);

                /** @description http://expressjs.com/en/4x/api.html#res.status */
                response.status(200);
                response.cookie('name', 'tobi', {domain: '.example.com', path: '/admin', secure: false});
                /** @description http://expressjs.com/en/4x/api.html#res.send */
                response.send(HTML);
                /** @description http://expressjs.com/en/4x/api.html#res.end */
                response.end();
            })
            .catch(e => {
                console.error('RENDERING ERROR:', e); // eslint-disable-line no-console
                /** @description http://expressjs.com/en/4x/api.html#res.status */
                response.status(500);
                /** @description http://expressjs.com/en/4x/api.html#res.end */
                response.end(`An error occurred. Please submit an issue to with the following stack trace:\n\n${ e.stack}`
                );
            });

    })


});

app.listen(__PORT__, () => {
    console.log(`Server is listening on port: ${__PORT__}. !!!!!!!!`)
});


export default app;