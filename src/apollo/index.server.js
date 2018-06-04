import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from "apollo-cache-inmemory";
import {from} from 'apollo-link';
import {onError} from 'apollo-link-error';
import apolloLogger from 'apollo-link-logger';
import fetch from 'isomorphic-fetch'
// import fetch from 'unfetch';

import {createHttpLink} from 'apollo-link-http';


const httpLink = new createHttpLink({uri: ENDPOINT_SERVER + '/graphql', fetch: fetch});

const ErrorLogger = onError(({networkError}) => {
    console.log(JSON.stringify(networkError));
    console.info('networkError: ', networkError);
});

export const client = new ApolloClient({
    ssrMode: true,
    // link,
    link: from([ErrorLogger, ...(DEV ? [apolloLogger] : []), httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy:  'network-only',
            errorPolicy: 'ignore',
        },
        query: {
            fetchPolicy:  'network-only',
            errorPolicy: 'ignore',
        },
        mutate: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore'
        }
    },
    queryDeduplication: true,
    connectToDevTools: true,
});
