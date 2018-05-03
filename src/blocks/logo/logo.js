import React from 'react';
// import {Link} from "../link/Link";
import { Link } from 'react-router-dom';
import logo from './icon_logo.svg';
import {createComponentWithProxy} from "react-fela";
import Image from '../image/image';

const LogoStyle = () => ({
    position: 'relative',
    display: 'block',
    width: 'auto',
    height: '2rem',
    overflow: 'hidden',
});

const Logo = ({href, image, alt, className}) => {
    return (<Link to={href ? href : '/'} className={className}>
        <Image src={logo} alt=""/>
    </Link>);
};

export default createComponentWithProxy(LogoStyle, Logo)
