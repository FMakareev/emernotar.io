import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from "apollo-cache-inmemory";
import { from } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import apolloLogger from 'apollo-link-logger';
import fetch from 'isomorphic-fetch'
import {
    FileUploadLink,
    LogLink,
    CatchLink,
    // ErrorLink
} from './Links';

const pyEndpoint = new FileUploadLink({uri: __ENDPOINT__+'/graphql'});

const link = from([
    new CatchLink,
    onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.map(({ message, locations, path }) =>
                console.warn(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                ),
            );
        if (networkError) console.warn(`[Network error]: ${networkError}`);
    }),
    ...(__DEV__ ? [apolloLogger] : []),
    pyEndpoint,


    // new HttpLink({
    //     uri: 'http://192.168.1.188:5001/graphql',
    //     credentials: 'same-origin',
    //     fetch: fetch
    // }),
]);
export const client = new ApolloClient({
    ssrMode: true,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    link,
    cache: new InMemoryCache(),
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
            errorPolicy: 'ignore'
        }
    },
    queryDeduplication: true,
    connectToDevTools: true,
});
