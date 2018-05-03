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

const httpLink = new FileUploadLink({uri: __ENDPOINT__+'/graphql'});

// const link = from([
//     new CatchLink,
//     onError(({ graphQLErrors, networkError }) => {
//         if (graphQLErrors)
//             graphQLErrors.map(({ message, locations, path }) =>
//                 console.warn(
//                     `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//                 ),
//             );
//         if (networkError) console.warn(`[Network error]: ${networkError}`);
//     }),
//     ...(__DEV__ ? [apolloLogger] : []),
//     httpLink,
//
//
//     // new HttpLink({
//     //     uri: 'http://192.168.1.188:5001/graphql',
//     //     credentials: 'same-origin',
//     //     fetch: fetch
//     // }),
// ]);
const logoutLink = onError(({ networkError }) => {
    console.log(networkError);
    console.log(networkError.statusCode);
    // if (networkError.statusCode === 401) {
    //
    // };
})

export const client = new ApolloClient({
    ssrMode: true,
    // link,
    link: logoutLink.concat(httpLink),
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
