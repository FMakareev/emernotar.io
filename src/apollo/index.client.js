import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from "apollo-cache-inmemory";
import { from } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import apolloLogger from 'apollo-link-logger';

import fetch from 'unfetch';

console.log('ENDPOINT_CLIENT: ', ENDPOINT_CLIENT);
const httpLink = new HttpLink({uri: ENDPOINT_CLIENT+ '/graphql',fetch:fetch});

const ErrorLogger = onError(({graphQLErrors, operation, response, networkError}) => {
    console.log('graphQLErrors : ', graphQLErrors   );
    console.log('operation     : ', operation       );
    console.log('response      : ', response        );
    console.log('networkError  : ', networkError    );
    if(graphQLErrors) {
        return graphQLErrors
    }
    if(networkError) {
        return networkError
    }
    // console.log(JSON.stringify(networkError));
    // console.info('networkError: ',networkError);
    // console.info('statusCode: ',networkError.statusCode);
});



export const client = new ApolloClient({
    // cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    cache: new InMemoryCache(),
    // link,
    link:  from([ErrorLogger, ...(DEV ? [apolloLogger] : []), httpLink]),
    defaultOptions: {
        watchQuery: {
            fetchPolicy:  'network-only',
            errorPolicy: 'ignore',
        },
        query: {
            fetchPolicy: 'network-only',
            errorPolicy: 'ignore',
        },
        mutate: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    },
    queryDeduplication: true,
    connectToDevTools: true,
});