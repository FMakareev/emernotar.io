import {ApolloLink, Observable} from 'apollo-link';
import {createApolloFetch} from "apollo-fetch";
import {print as printGraphQL} from "graphql/language/printer";
import constructUploadOptionsFile from './constructUploadOptionsFile';


export class FileUploadLink extends ApolloLink {
    constructor({uri}) {
        super();
        this.apolloFetch = createApolloFetch({
            uri: uri,
            constructOptions: constructUploadOptionsFile
        })
    }

    request(operation, forward) {
        console.log('operation:', operation);
        return new Observable(observer => {
            const request = {
                ...operation,
                query: printGraphQL(operation.query)
            };
            console.log('request:', request);
            this.apolloFetch(request)
                .then(data => {
                    //calls the next callback for the subscription
                    console.log(data);
                    observer.next(data);
                    observer.complete();
                })
                .catch((error) => {
                    console.log(error);
                    // console.log(JSON.parse(error));
                    // observer.error(error)
                    observer.next(error)
                    observer.complete();
                    // return error
                });

        });
    }

}