import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect as FelaConnect} from 'react-fela'



const NavigationLink = ({children, to, styles}) => {

    return (<NavLink exact to={to} activeStyle={{
        textDecoration: 'underline'
    }} className={styles.link}>
        {children}
    </NavLink>);
}

const NavigationLinkStyle = ({state}) => {

    return {
        link: {
            display: 'block',
            padding: '0.625rem 0.9375rem',
            textTransform: 'uppercase',
            fontSize: '1rem',
            fontWeight: '400',
            color: 'inherit',
            maxWidth: '10rem',
            textDecoration: 'none',
            ':active': {
                textDecoration: 'none',
            },
            ':visited': {
                textDecoration: 'none',
            },
        },
        active: {
            textDecoration: 'underline'
        }
    }
}

export default FelaConnect(NavigationLinkStyle)(NavigationLink);