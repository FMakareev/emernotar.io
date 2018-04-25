import {createElement} from 'react';
import {graphql} from "react-apollo";

/*
query - схема graphql
component - компонент
props - props компонента
queryProps - параметры apollo
 */

export const GraphqlQueryInjection = (query, component, props, queryProps) => {
    return createElement(graphql(query, queryProps)(component), props);
}