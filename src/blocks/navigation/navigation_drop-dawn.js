import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy} from 'react-fela';

const NavigationDropDawnStyle = ({
                                     position = 'center',
                                     active,
                                 }) => ({
    position: 'absolute',
    top: '100%',

    ...(position === 'center' && {
        transform: 'translateX(-50%)',
        left: '50%',
    }),

    ...(position === 'left' && {
        left: 0,
    }),

    ...(position === 'right' && {
        right: 0,
    }),

    zIndex: '1',
    minWidth: '200%',
    width: 'auto',
    height: '0',
    opacity: '0',
    overflow: 'hidden',
    color: '#272727',
    boxShadow: '0 0.0625rem 0.125rem rgba(0,0,0,.25), 0 0 0.0625rem rgba(0,0,0,.35)',
    backgroundColor: '#fff',
    borderRadius: '0.1875rem',


    ...(active && {
        height: 'auto',
        opacity: 1,
    })
})

class NavigationDropDawn extends Component {

    static propTypes = {
        mods: PropTypes.array,
    };

    static defaultProps = {};

    render() {
        const {children, className} = this.props;

        return (<ul ref="NavigationDropDawn" className={className}>
            {children}
        </ul>);
    }
}

export default createComponentWithProxy(NavigationDropDawnStyle, NavigationDropDawn);