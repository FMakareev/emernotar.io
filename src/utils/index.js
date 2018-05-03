// component
import {getElementType} from './component/get_element_type';

// cookie
import {cookieToString} from './cookie/cookie_to_string';
import {cookieToObject} from './cookie/cookie_to_object';
import {setCookie} from './cookie/set_cookie';

// dom
import {updateCustomMeta} from './dom/update_custom-meta';
import {updateLink} from './dom/update_link';
import {updateMeta} from './dom/update_meta';
import {updateTag} from './dom/update_tag';

// jest
import {jestAuth} from './jest/jest_auth';
import {jestCreateUser} from './jest/jest_create-user';
import {jestFetch} from './jest/jest_fetch';

// Magic
import ClientSideOnly from './magic/client_side_only';

// modules
import { getModuleNameFromUrl} from './modules/get_module_name_from_url'

// fetch
import {createFetch} from './fetch/create_fetch';


// graphql
import {GraphqlQueryInjection} from './graphql/graphql_query-injection';

// random
import {randomEmail} from './random/random_email';
import {randomNumber} from './random/random_number';
import {randomTimestamp} from './random/random_timestamp';
import {randomWords} from './random/random_words';

// sqlite
import {sqlite_update_regexp_replace} from './sqlite/sqlite_update_regexp_replace';
import {sqlite_substring_search} from './sqlite/sqlite_substring_search';

// typography
import {ucFirst} from './typography/uc_first';

// validation
import {webSite} from './validation/web_site';
import {isEmail} from './validation/is_email';
import {isNumber} from './validation/is_number';

import {maxLength} from './validation/max_length';
import {minLength} from './validation/min_length';

import {minValue} from './validation/min_value';
import {maxValue} from './validation/max_value';

import {required} from './validation/required';

export {
    // component
    getElementType,

    // cookie
    cookieToString,
    cookieToObject,
    setCookie,

    // dom
    updateCustomMeta,
    updateLink,
    updateMeta,
    updateTag,

    // magic
    ClientSideOnly,

    // modules
    getModuleNameFromUrl,

    // fetch
    createFetch,

    // graphql
    GraphqlQueryInjection,

    // jest
    jestAuth,
    jestCreateUser,
    jestFetch,

    // random
    randomEmail,
    randomNumber,
    randomTimestamp,
    randomWords,

    // sqlite
    sqlite_update_regexp_replace,
    sqlite_substring_search,

    // typography
    ucFirst,

    // validation
    required,
    webSite,
    isEmail,
    isNumber,
    maxLength,
    minLength,
    minValue,
    maxValue,

};
