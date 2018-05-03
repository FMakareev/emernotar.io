import React from 'react';
import {createComponentWithProxy} from "react-fela";

const UlStyle = ({list = false}) => ({
    // fontSize: '0',
    // marginRight: '-8px',
    // marginLeft: '-8px',
    ...(list ? {
        marginLeft: '-0.9375rem',
        marginRight: '-0.9375rem',
    }: null)
})

const Ul = ({className, children}) => {
    return (<div className={className}>
        {children}
    </div>);
}

export default createComponentWithProxy(UlStyle, Ul);