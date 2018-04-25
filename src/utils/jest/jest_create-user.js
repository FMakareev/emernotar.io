// import config from '../../config.js';
// import fetch from 'isomorphic-fetch';
import {randomWords} from "../random/random_words";
import {randomEmail} from "../random/random_email";


export const jestCreateUser = (variables = null) => {
    return new Promise((resolve, reject) => {
        // fetch(config.api.graphql, {
        //     method: 'POST',
        //     credentials: 'include',
        //     cache: 'no-cache',
        //     Connection: 'keep-alive',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         query: `
        //             mutation(
        //                 $role: Int,
        //                 $password: String,
        //                 $username: String,
        //                 $email: String,
        //                 $name: String
        //             ){
        //                 createUser(
        //                     role: $role,
        //                     password:$password,
        //                     username:$username,
        //                     email:$email,
        //                     name:$name
        //                     ){
        //                         id
        //                         name
        //                         username
        //                         password
        //                         email
        //                         role
        //                 }
        //             }
        //         `,
        //         variables: variables ? variables : {
        //             role: 1,
        //             password: randomWords(),
        //             username: randomWords(),
        //             name: randomWords(),
        //             email: randomEmail(),
        //         }
        //     }),
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
