import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy} from 'react-fela'

const InputStyle = ({state, ...props}) => {
    return ({
        position: 'relative',
        display: 'block',
        width: '100%',
        // minHeight: '2.25rem',
        marginBottom: '1.5rem',
        padding: '1rem',
        fontSize: '1.2rem',
        borderRadius: '0',
        border: 'none',
        background: '#FDF396',
        boxShadow: '0px 0 4px rgba(0, 0, 0, 0.25)',
        color: '#333333',
        cursor: 'auto',
        overflow: 'hidden',
        fontFamily: 'inherit',

        '::placeholder': {
            color: '#AEAEAE',
            fontFamily: 'inherit',
            textOverflow: 'ellipsis',
        },

        ...(state ? {
            ...(state.valid && state.touched ? {
                borderColor: '#00bfa5',
                outlineColor: '#00bfa5',
            } : null),
            ...(state.warning ? {
                borderColor: '#FFA500',
                outlineColor: '#FFA500',
            } : null),
            ...(state.invalid && state.touched ? {
                borderColor: '#ff1744',
                outlineColor: '#ff1744',
            } : null),
            ...(state.active ? {
                borderColor: '#2979ff',
                outlineColor: '#2979ff',
                background: '#fff',
            } : null)
        } : null),
    })
}

class Input extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        const {input, type, required, placeholder, className} = this.props;

        if (type === 'textarea') {
            return (<textarea
                placeholder={placeholder}
                className={className}
                aria-required={required ? required : false}
                aria-labelledby={`${input.name}`}
                maxLength={'15000'}
                {...input}
            >

                </textarea>)
        } else {
            return (
                <input
                    placeholder={placeholder}
                    id={`id-${input.name}`}
                    className={className}
                    type={type}
                    maxLength={'1000'}
                    {...input}
                    aria-required={required ? required : false}
                    aria-labelledby={`${input.name}`}
                />
            )
        }


    }
}

export default createComponentWithProxy(InputStyle, Input)