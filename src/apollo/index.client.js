import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from "apollo-cache-inmemory";
import { from } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import apolloLogger from 'apollo-link-logger';

import fetch from 'unfetch';

const httpLink = new HttpLink({uri: __ENDPOINT_CLIENT__+ '/graphql',fetch:fetch});

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
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    // link,
    link:  from([ErrorLogger, ...(__DEV__ ? [apolloLogger] : []), httpLink]),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
            errorPolicy: 'ignore',
        },
        query: {
            fetchPolicy: 'cache-and-network',
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