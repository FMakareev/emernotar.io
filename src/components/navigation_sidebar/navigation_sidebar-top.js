import React from 'react';
import {createComponentWithProxy} from "react-fela";

const NavigationSidebarTopStyle = ({...props, theme}) =>{

    return {
        position: 'relative',
        zIndex: 11,
    }
};
const NavigationSidebarTop = ({className, children}) => {
    return (<div className={className}>
        {children}
    </div>);
}

export default createComponentWithProxy(NavigationSidebarTopStyle,NavigationSidebarTop)
