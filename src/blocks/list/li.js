import React from 'react';
import {createComponentWithProxy} from "react-fela";

const LiStyle = ({
                horisontal = false,
                item = false
                }) => ({
    position: 'relative',
    display: 'block',
    padding: '1rem',
    // marginBottom: '16px',
    // fontSize: '0',
    boxShadow: '0 0 0.3125rem rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    transition: 'all .225s',
    ':hover': {
      boxShadow: '0 0 1.875rem rgba(0, 0, 0, 0.5)',
    },
    ...(horisontal ? {
        display: 'inline-block',
        // margin: '8px',
    } : null),
    ...(item ? {
        position: 'relative',
        display: 'inline-block',
        width: '33.3333333%',
        paddingLeft: '0.9375rem',
        paddingRight: '0.9375rem',
        marginBottom: '0.9375rem',
        verticalAlign: 'middle',
        overflow: 'hidden',
    } : null)
})

const Li = ({className, children}) => {
    return (<div className={className}>
        {children}
    </div>);
}

export default createComponentWithProxy(LiStyle, Li);