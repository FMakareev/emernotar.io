import React from 'react';
import {createComponentWithProxy} from 'react-fela'

const NavigationItemStyle = ({state, styles}) => {

    return ({
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'middle',

        ...(state ? {
            display: 'block',
        } : null),

        ':hover > ul': {
            height: 'auto',
            opacity: '1',
        },
        ...styles,
    })
}

const NavigationItem = ({children,className}) => {
    return (<li className={className}>
        {children}
    </li>);
};

export default createComponentWithProxy(NavigationItemStyle, NavigationItem);