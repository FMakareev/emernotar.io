import React from 'react';
import {createComponentWithProxy} from 'react-fela'

const NavigationItemStyle = ({state}) => {

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
        }
    })
}

const NavigationItem = ({children,className}) => {
    return (<li className={className}>
        {children}
    </li>);
};

export default createComponentWithProxy(NavigationItemStyle, NavigationItem);