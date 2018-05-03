import {ApolloLink, Observable} from 'apollo-link';

export class CatchLink extends ApolloLink {

    request(operation, forward) {
        //will pass the operation to the next observable
        const observable = forward(operation);

        return new Observable(observer => {
            const subscription = observable.subscribe({
                next: observer.next.bind(observer),
                error: error => {
                    console.log(error);
                    //reroute errors as proper data
                    // observer.error(error);
                },
                complete: observer.complete.bind(observer),
            });

            //cleanup funciton, which is accessed through the unsubscribe
            return () => {
                //cleanup the inner observables subscripton
                subscription.unsubscribe();
            }
        });
    }
}