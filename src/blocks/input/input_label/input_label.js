import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy} from 'react-fela';

const rule = ({state}) => {

    return ({
        position: 'relative',
        display: 'block',
        marginTop: '1rem',
        marginBottom: '0.5rem',
        textAlign: 'left',
        ...(state? {
            ...(state.valid && state.touched ? {
                color: '#00bfa5',
            } : null),
            ...(state.warning ? {
                color: '#FFA500',
            } : null),
            ...(state.invalid && state.touched ? {
                color: '#ff1744',
            } : null),
            ...(state.active ? {
                color: '#2979ff',
            } : null)
        }: null),
    })
}

class InputLabel extends Component {

    static propTypes = {
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        const {For, className, onClick, children} = this.props;
        if(!children) {
            return null
        }

        return (
            <label
                htmlFor={For}
                onClick={onClick}
                className={className}
            >
                {children}
            </label>
        )
    }
}

export default createComponentWithProxy(rule, InputLabel);