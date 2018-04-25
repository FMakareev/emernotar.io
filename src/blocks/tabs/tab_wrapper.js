import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy} from 'react-fela'

const TabWrapperStyle = () => ({
    position: 'relative',
    zIndex: 2,
    paddingTop: '0.0625rem',
    backgroundColor: '#fff',
});

const TabWrapper = ({children, className}) => {
    return (<div className={className}>
        {children}
    </div>);
};

export default createComponentWithProxy(TabWrapperStyle, TabWrapper);