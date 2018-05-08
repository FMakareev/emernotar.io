import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect as FelaConnect} from 'react-fela'

const removeClassActive = function (event) {
    if (!event.target.classList.contains('active')) {
        let navLinks = document.getElementsByClassName('NavigationLink');
        for (let prop in navLinks) {
            if (typeof  navLinks[prop] === 'object') {
                navLinks[prop].classList.remove('active');
                navLinks[prop].removeAttribute('style');
            }
        }
        event.target.classList.add('active');
        event.target.setAttribute('style', 'text-decoration: underline')
    }
};

const NavigationLink = ({children, to, styles}) => {

    return (<NavLink onClick={removeClassActive} exact to={to} activeStyle={{
        textDecoration: 'underline'
    }} className={styles.link + ' NavigationLink'}>
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
            '.active': {
                textDecoration: 'underline'
            }
        },
        active: {
            textDecoration: 'underline'
        }
    }
}

export default FelaConnect(NavigationLinkStyle)(NavigationLink);