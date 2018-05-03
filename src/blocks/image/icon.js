import React from 'react';
import {createComponentWithProxy} from "react-fela";

const IconStyle = ({styles}) => {

    return ({
        position: 'relative',
        display: 'block',
        margin: 'auto',
        fontFamily: 'Icons',
        ...styles,
    });
}


const Icon  = ({src, alt, className}) => {
    return (<img
        className={className}
        src={src }
        alt={alt ? alt : ''}
    />);
};

export default createComponentWithProxy(IconStyle, Icon)