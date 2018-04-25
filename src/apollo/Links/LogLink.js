import {ApolloLink, Observable} from 'apollo-link';

export class LogLink extends ApolloLink {

    request (operation, forward) {

        return forward(operation).map((data) => {
            console.log(data);

            // if('error' in data) {
            //     data.data.error = data.error;
            // }
            //
            // if('loginUser' in data.data) {
            //     console.log('window.__APOLLO_CLIENT__: ',window.__APOLLO_CLIENT__);
            //     localStorage.setItem('loginUser', JSON.stringify(data.data.loginUser));
            //     localStorage.setItem('__APOLLO_CLIENT_CACHE__', JSON.stringify(window.__APOLLO_CLIENT__.cache.data.data));
            // }
            //
            // if('oauthLoginUser' in data.data) {
            //     console.log('window.__APOLLO_CLIENT__: ',window.__APOLLO_CLIENT__);
            //     localStorage.setItem('loginUser', JSON.stringify(data.data.oauthLoginUser));
            //     localStorage.setItem('__APOLLO_CLIENT_CACHE__', JSON.stringify(window.__APOLLO_CLIENT__.cache.data.data));
            // }

            return data;
        });
    }
}