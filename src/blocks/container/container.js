import React from 'react';
import {createComponentWithProxy} from "react-fela";

const ContainerStyle = ({
                            maxWidth = '970px',
                            styles,
                            theme
                        }) => ({
    position: 'relative',
    maxWidth: theme && theme.container || maxWidth,
    paddingLeft: theme.gutter,
    paddingRight: theme.gutter,
    marginRight: 'auto',
    marginLeft: 'auto',
    ...styles,
});

const Container = ({className, children}) => {
    return (<div className={className}>
        {children}
    </div>);
};
export default createComponentWithProxy(ContainerStyle, Container);