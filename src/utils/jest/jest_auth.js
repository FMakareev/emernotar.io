// import config from '../../config.js';
// import fetch from 'isomorphic-fetch';

export const jestAuth = (variables = null) => {
    return new Promise((resolve, reject) => {
        // fetch(config.api.graphql, {
        //     method: 'POST',
        //     credentials: 'include',
        //     cache: 'no-cache',
        //     Connection:'keep-alive',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         query: `
        //             mutation($username: String,$password: String){
        //                 loginUser(username: $username, password: $password) {
        //                     id
        //                 }
        //             }
        //         `,
        //         variables: variables ? variables : {
        //             username: "log",
        //             password: "qwerty"
        //         }
        //
        //     }),
        // }).then(response => {
        //     if (response.status >= 200 && response.status < 300) {
        //         resolve(response.headers.get('set-cookie'))
        //     }
        //     return reject(response.status);
        // })
    })
};