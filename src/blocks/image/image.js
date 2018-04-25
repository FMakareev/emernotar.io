import React from 'react';
import {createComponentWithProxy} from "react-fela";

const ImageStyle = ({styles}) => {

    return ({
        position: 'relative',
        display: 'block',
        margin: 'auto',
        ...styles,
    });
}


const Image  = ({src, alt, className}) => {
    return (<img
        className={className}
        src={src }
        alt={alt ? alt : ''}
    />);
};

export default createComponentWithProxy(ImageStyle, Image)