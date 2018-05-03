import React from 'react';
import { Link } from 'react-router-dom'
import {createComponentWithProxy} from 'react-fela'

const NavigationLinkStyle = ({state}) => {

    return ({
        display: 'block',
        padding: '0.625rem 0.9375rem',
        textTransform: 'uppercase',
        fontSize: '1rem',
        fontWeight: '400',
        color: 'inherit',
        maxWidht: '10rem',
    })
}

const NavigationLink = ({children, to, className}) => {
    return (<Link to={to} className={className}>
        {children}
    </Link>);
}

export default createComponentWithProxy(NavigationLinkStyle, NavigationLink);