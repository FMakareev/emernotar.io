import {initialize, addTranslationForLanguage, setActiveLanguage} from 'react-localize-redux';
import findIndex from 'lodash/findIndex';

import Cookies from 'js-cookie';
import queryString from 'query-string';
import languages from './localization.json';
import history from '../../../routes/history';



export const initLocalize = (store, currentLocale = getCurrentLocalize()) => {
    return (dispatch) => {

        dispatch(initialize(languages, {
            defaultLanguage: currentLocale,
            missingTranslationCallback: onMissingTranslation,
        }));
        dispatch(changeTranslate(store, currentLocale))
    }
};

const onMissingTranslation = (key, languageCode) => {};

export const getCurrentLocalize = () => {
    const queryLocale = isBrowser && queryString.parse(window.location.search).lang;
    if (queryLocale) {
        if (findIndex(languages, (item) => item.code === queryLocale.toUpperCase()) !== -1) {

            return queryLocale.toUpperCase();
        } else {


            return isBrowser ? window.navigator.language.match(/([A-z]{2})/i)[1].toUpperCase() : '';
        }
    } else if (Cookies.get('lang')) {

        return Cookies.get('lang');
    } else {
        return isBrowser ? window.navigator.language.match(/([A-z]{2})/i)[1].toUpperCase() : ''
    }

};

export const changeTranslate = (store, language) => {
    return (dispatch) => {
        try {
            const jsonTranslate = require(`../../../../public/messages/${language}.json`);

            dispatch(addTranslationForLanguage(jsonTranslate, language));
            dispatch(setActiveLanguage(language));

            if (isBrowser) {
                Cookies.set('lang', language, {expires: 700});
                const queryLocale = isBrowser ? queryString.parse(window.location.search).lang : null;

                if (queryLocale) {
                    history.push(`?lang=${language.toUpperCase()}`);
                }

            }


        } catch (error) {
            console.error('error: ',error);
        }
    }
};


