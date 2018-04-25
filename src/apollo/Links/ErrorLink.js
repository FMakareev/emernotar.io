import {onError} from 'apollo-link-error';

export const ErrorLink = onError(({networkError, graphQLErrors, response, operation}) => {
    console.log('networkError: ', networkError);
    console.log('graphQLErrors: ', graphQLErrors);
    console.log('response: ', response);
    console.log('operation: ', operation);
    if (networkError) {
        console.error('networkError: ', networkError);

        return {
            data:{
                error: networkError
            }
        };
    }
    if (graphQLErrors) {
        let errorList = [];
        graphQLErrors.map(({message, locations, path}) => {
            console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);

            errorList.push(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
        console.log(response);
        let res = response;

        return res.data.error = errorList;

    }
    return null
});