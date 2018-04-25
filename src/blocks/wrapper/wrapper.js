import React from 'react';
import {createComponentWithProxy} from "react-fela";

//margin wrapper for any element, for avoid redundance styles

const WrapperStyle = ({
                        marginTop = 'auto',
                        marginRight = 'auto',
                        marginBottom = 'auto',
                        marginLeft = 'auto',
                        minHeight = '0',
                        textAlign = 'right',
    styles
                        }) => ({
    position: 'relative',
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    minHeight,
    textAlign,
    ...styles
})

const Wrapper = ({className, children}) => {
    return (<div className={className}>
        {children}
    </div>);
};
export default createComponentWithProxy(WrapperStyle, Wrapper);