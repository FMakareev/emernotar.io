import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { localeReducer as locale } from 'react-localize-redux';
import {preLoader} from "./preloader/reducers";

export const rootReducer = combineReducers({
    form: formReducer,
    locale,
    preLoader
});