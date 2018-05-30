import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from "./reducers/index";

const createStoreMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const initialState = isBrowser ? window.__PRELOADED_REDUX_STATE__ : {};

const Store = createStoreMiddleware(
    rootReducer,
    initialState,
    composeWithDevTools(),
);




export {Store};