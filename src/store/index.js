import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'

import { initialize } from 'react-localize-redux';
// import languages from './reducers/localization/localization.json';

import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from "./reducers/index";
import {initLocalize} from "./reducers/localization/actions";

const createStoreMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const initialState = process.env.__isBrowser__? window.__PRELOADED_REDUX_STATE__ : {};

const Store = createStoreMiddleware(
    rootReducer,
    initialState,
    composeWithDevTools(),
);




export {Store};