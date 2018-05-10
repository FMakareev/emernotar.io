import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from "apollo-cache-inmemory";
import { from } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import apolloLogger from 'apollo-link-logger';

// import {
//     FileUploadLink,
//     LogLink,
//     CatchLink,
//     // ErrorLink
// } from './Links';

const httpLink = new HttpLink({uri: __ENDPOINT_CLIENT__+ '/graphql'});

const ErrorLogger = onError(({ networkError }) => {
    console.log(JSON.stringify(networkError));
    console.info('networkError: ',networkError);
    console.info('statusCode: ',networkError.statusCode);
});

// TODO: разобратся почему FileUploadLink не возвращает статус код
// const link = from([
//     // new CatchLink,
//     onError(({ graphQLErrors, networkError }) => {
//         console.log(graphQLErrors, networkError);
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
//     // new HttpLink({
//     //     uri: 'http://192.168.1.188:5001/graphql',
//     //     credentials: 'include',
//     // }),
// ]);



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
            errorPolicy: 'ignore'
        }
    },
    queryDeduplication: true,
    connectToDevTools: true,
});