import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy} from 'react-fela'


const defaultTheme = (state) => {
    return {
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
                backgroundColor: '#2979ff'
            } : null)
        } : null),
    }
};
const customTheme = (state, theme) => {
    return {
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
                backgroundColor: '#2979ff'
            } : null)
        } : null),
    }
};

export const InputStyle = ({...props, theme, state}) => {

    return ({
        position: 'relative',
        display: 'block',
        width: '100%',
        minHeight: '2.25rem',
        marginBottom: '1rem',
        padding: '1rem',
        backgroundColor: theme.palette.default.light,
        borderRadius: '0',
        border: 'none',
        color: theme.palette.default.contrastText,
        cursor: 'auto',
        overflow: 'hidden',


        '::-webkit-input-placeholder': {
            /* Chrome/Opera/Safari */
            color: 'pink',
            fontSize: '1.375rem'
        },
        '::-moz-placeholder': {
            /* Firefox 19+ */
            color: 'pink',
            fontSize: '1.375rem'
        },
        // ':-ms-input-placeholder': {
        //     /* IE 10+ */
        //     color: 'pink',
        //     fontSize: '1.375rem'
        // },
        ':-moz-placeholder': {
            /* Firefox 18- */
            color: 'pink',
            fontSize: '1.375rem'
        },

        '::placeholder': {
            color: theme.palette.default.contrastText,
            fontSize: '1.375rem',
            fontFamily: 'PTSansPro',
            textOverflow: 'ellipsis',
        },
        ...defaultTheme(state),


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
        const {input, type, required,placeholder, className} = this.props;
        console.log(this.props);
        return (
            <input
                id={`id-${input.name}`}
                className={className}
                type={type}
                {...input}
                placeholder={placeholder}
                aria-required={required ? required : false}
                aria-labelledby={`${input.name}`}
            />
        )
    }
}

export default createComponentWithProxy(InputStyle, Input)