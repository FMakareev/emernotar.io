// import config from '../../config.js';
// import fetch from 'isomorphic-fetch';

export const jestFetch = (body, cookie = '') => {
    return new Promise((resolve, reject) => {
        // fetch(config.api.graphql, {
        //     method: 'POST',
        //     credentials: 'include',
        //     cache: 'no-cache',
        //     Connection:'keep-alive',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         cookie: cookie,
        //     },
        //     body: JSON.stringify(body),
        // }).then(response => {
        //     if (response.status >= 200 && response.status < 300) {
        //         return Promise.resolve(response);
        //     }
        //     return Promise.reject(response.status);
        // }).then((response) => {
        //     return response.json()
        // }).then((response) => {
        //     resolve(response)
        // })
    })
};