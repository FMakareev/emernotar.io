import React from 'react';
import {createComponentWithProxy} from "react-fela";

const RowStyle = ({
                      nowrap = 'normal',
                      alignItems = 'self-end',
                      justifyContent = null,
                      styles,
                      theme
                  }) => ({
    minWidth: '100%',
    marginRight: theme && `-${theme.gutter}` || '-0.9375rem',
    marginLeft: theme && `-${theme.gutter}` || '-0.9375rem',
    fontSize: 0,
    whiteSpace: nowrap,
    ...(justifyContent === 'center' ? {
        display: 'flex',
        justifyContent: 'center',
        // '-ms-flex-pack': 'center',
    } : null),
    ...(justifyContent === 'left' ? {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: alignItems,
        // '-ms-flex-pack': 'start',
        // '-ms-flex-align': alignItems,
    } : null),
    ...(justifyContent === 'right' ? {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: alignItems,
        // '-ms-flex-pack': 'end',
        // '-ms-flex-align': alignItems,
    } : null),
    ...(justifyContent === 'spaceBetween' ? {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: alignItems,
        // '-ms-flex-pack': 'justify',
        // '-ms-flex-align': alignItems,
    } : null),
    ...styles
});

const Row = ({className, children}) => {
    return (<div className={className}>
        {children}
    </div>);
}
export default createComponentWithProxy(RowStyle, Row);