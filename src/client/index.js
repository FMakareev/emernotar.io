import 'promise-polyfill/src/polyfill';

import React from 'react'
import {hydrate, render} from 'react-dom'
import {ApolloProvider} from "react-apollo";
import {Provider as ProviderRedux} from 'react-redux';
import { renderRoutes } from 'react-router-config';

import {BrowserRouter} from 'react-router-dom';
import {Provider as StyleProvider, ThemeProvider} from 'react-fela'
import {AsyncComponentProvider} from 'react-async-component' // 👈
import asyncBootstrapper from 'react-async-bootstrapper' // 👈
import {client} from '../apollo/index.client';
import {createStyleRenderer} from '../style';
import {createTheme, palette} from '../style/theme';
import {ConfigRouter} from '../routes';
import {Store} from '../store'



/**
 * @description function render styles
 * @link http://fela.js.org/
 * */
const renderer = createStyleRenderer();

/**
 * @description https://github.com/ctrlplusb/react-async-component#server-side-rendering
 * */
const rehydrateState = window.__ASYNC_COMPONENTS_STATE__;


/**
 * @description root component with StyleProvider, ThemeProvider, ApolloProvider, ProviderRedux, BrowserRouter
 * {@linkcode https://github.com/ctrlplusb/react-universally/blob/master/client/index.js#L34}
 * {@linkcode https://github.com/ctrlplusb/react-async-component#server-side-rendering}
 * */
const ROOT = (<AsyncComponentProvider rehydrateState={rehydrateState}>
    <StyleProvider renderer={renderer}>
        <ThemeProvider theme={createTheme(palette)}>
            <ApolloProvider client={client}>
                <ProviderRedux store={Store}>
                    <BrowserRouter>
                        {renderRoutes(ConfigRouter)}
                    </BrowserRouter>
                </ProviderRedux>
            </ApolloProvider>
        </ThemeProvider>
    </StyleProvider>
</AsyncComponentProvider>);


/** {@linkcode https://github.com/ctrlplusb/react-async-component#server-side-rendering} */
asyncBootstrapper(ROOT).then(() => {

    /** {@linkcode https://reactjs.org/docs/react-dom.html#hydrate }*/
    hydrate(ROOT, document.getElementById('app'))
});