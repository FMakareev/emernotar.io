import React from 'react';
import {createComponentWithProxy} from "react-fela";

const NavigationSidebarBottomStyle = ({...props, theme}) =>{

    return {
        position: 'relative',
        zIndex: 11,
    }
};
const NavigationSidebarBottom = ({className, children}) => {
    return (<div className={className}>
        {children}
    </div>);
}

export default createComponentWithProxy(NavigationSidebarBottomStyle,NavigationSidebarBottom)
