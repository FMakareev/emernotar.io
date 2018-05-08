import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {createComponentWithProxy} from "react-fela";
import {getElementType} from "../../utils/component/get_element_type";


const Size = {
    'small': {
        padding: '0.4375rem 2rem',
        fontSize: '0.875rem',
        lineHeight: '1.125rem',
    },
    'medium': {
        padding: '0.5rem 2.5rem',
        fontSize: '1rem',
        lineHeight: '1.5rem',
        minHeight: '2.5rem',
        minWidth: '2.5rem',
    },
    'large': {
        padding: '0.5rem 3rem',
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
    },
};

const CreateElementState = (style) => ({
    ':hover': {
        ...style,
    },
    ':focus': {
        ...style,
    },
    ':active': {
        ...style,
    },
    'active': {
        ...style,
    },
});

const Style = {
    flat: {
        'default': {
            color: '#3F4657',
            backgroundColor: 'transparent',
            ...CreateElementState({
                textDecoration: 'none',
                backgroundColor: 'rgba(0, 0, 0, 0.12)',
            }),
        },
        'primary': {
            color: '#2196f3',
            backgroundColor: 'transparent',

            ...CreateElementState({
                textDecoration: 'none',
                backgroundColor: 'rgba(33, 150, 243, 0.12)',
            }),
        },
        'secondary': {
            color: '#e10050',
            backgroundColor: 'transparent',

            ...CreateElementState({
                textDecoration: 'none',
                backgroundColor: 'rgba(225, 0, 80, 0.12)',
            }),
        },
        'disable': {
            color: 'rgba(0, 0, 0, 0.26)',
            backgroundColor: 'transparent',
            cursor: 'default',
            ':disabled': {
                color: 'rgba(34,34,34, .5)',
                cursor: 'default'
            },
        },
    },
    raised: {
        'default': {
            color: '#000',
            backgroundColor: '#e0e0e0',

            ...CreateElementState({
                textDecoration: 'none',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }),
        },
        'primary': {
            color: '#000',
            backgroundColor: '#E5D537',
            borderRadius: '20%',
            ...CreateElementState({
                textDecoration: 'none',
                backgroundColor: '#E5D537',
            }),
        },
        'secondary': {
            color: '#000',
            backgroundColor: '#E5D537',
            ...CreateElementState({
                textDecoration: 'none',
                backgroundColor: 'rgba(225, 0, 80, 0.7)',
            }),
        },
        'disable': {
            color: 'rgba(0, 0, 0, 0.26)',
            backgroundColor: 'rgba(0, 0, 0, 0.12)',
            cursor: 'default',
            ':disabled': {
                color: 'rgba(34,34,34, .5)',
                cursor: 'default'
            },
        },
    },
};

const createStyle = (theme,bright) => {
    return {
        flat: {
            'default': {
                color: theme.palette['default']['main'],
                backgroundColor: 'transparent',
                ...CreateElementState({
                    textDecoration: 'none',
                    backgroundColor: 'rgba(0, 0, 0, 0.12)',
                }),
            },
            'primary': {
                color: theme.palette['primary']['contrastText'],
                backgroundColor: theme.palette['primary']['main'],

                ...CreateElementState({
                    textDecoration: 'none',
                    color: theme.palette['primary']['main'],
                    fill: theme.palette['primary']['main'],
                    '> svg': {
                        fill: theme.palette['primary']['main'],
                        opacity: 1,
                    }
                }),
            },
            'secondary': {
                color: theme.palette['secondary']['main'],
                backgroundColor: 'transparent',

                ...CreateElementState({
                    textDecoration: 'none',
                    backgroundColor: 'rgba(225, 0, 80, 0.12)',
                }),
            },
            'error': {
                color: theme.palette['error']['main'],
                backgroundColor: 'transparent',
                ...CreateElementState({
                    textDecoration: 'none',
                    backgroundColor: 'rgba(225, 0, 80, 0.12)',
                }),
            },
            'disable': {
                color: theme.palette['disable']['main'],
                backgroundColor: 'transparent',
                cursor: 'default',
                ':disabled': {
                    color: 'rgba(34,34,34, .5)',
                    cursor: 'default'
                },
            },
        },
        raised: {
            'default': {
                color: theme.palette['default']['contrastText'],
                backgroundColor: theme.palette['default']['main'],

                ...CreateElementState({
                    textDecoration: 'none',
                    opacity: 0.5
                }),
            },
            'primary': {
                color: theme.palette['primary']['contrastText'],
                backgroundColor: theme.palette['primary']['main'],

                ...CreateElementState({
                    textDecoration: 'none',
                    opacity: 0.5
                }),
            },
            'secondary': {
                color: theme.palette['secondary']['contrastText'],
                backgroundColor: theme.palette['secondary']['main'],

                ...CreateElementState({
                    textDecoration: 'none',
                    opacity: 0.5
                }),
            },
            'error': {
                color: theme.palette['error']['contrastText'],
                backgroundColor: theme.palette['error']['main'],

                ...CreateElementState({
                    textDecoration: 'none',
                    opacity: 0.5
                }),
            },
            'disable': {
                color: theme.palette['disable']['contrastText'],
                backgroundColor: theme.palette['disable']['main'],
                cursor: 'default',
                ':disabled': {
                    color: 'rgba(34,34,34, .5)',
                    cursor: 'default'
                },
            },
            'invert': {
                color: theme.palette['error']['contrastText'],
                backgroundColor: theme.palette['error']['main'],

                ...CreateElementState({
                    textDecoration: 'none',
                    opacity: 0.5
                }),
            },
        },
    };
};

const ButtonStyle = ({
                         size = 'medium',
                         variant = 'flat',
                         color = 'default',
                         circle = false,
                         maxWidth = 'inherit',
                         fullWidth = false,
                         active,
                         theme,
                         styles,
                     }) => ({


    position: 'relative',
    display: 'inline-flex',

    ...(fullWidth && {
        width: '100%',
    }),
    maxWidth: maxWidth,

    boxSizing: 'border-box',
    border: 'none',

    fontFamily: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

    boxShadow: '0 0 4px rgba(0, 0, 0, 0.45)',

    // Size button
    ...Size[size],

    // Color schema button
    ...(theme && !active && theme.createBtnTheme(theme)[variant][color]),

    ...(theme && active && theme.createBtnTheme(theme)[variant][color]['active']),

    // Circle button (DEMO)
    ...(circle ? {borderRadius: '50%',} : null),
    borderRadius: '5px',
    ...styles,

});

class Button extends Component {

    static propTypes = {
        disabled: PropTypes.bool,
        type: PropTypes.string,
        onClick: PropTypes.func,
        className: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
    };
    static defaultProps = {
        as: 'button',
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        const {
            disabled,
            type,
            onClick,
            className,
            children,
            as = 'button',
        } = this.props;
        const ElementType = getElementType(as, this.props);

            return (
                <ElementType onClick={onClick} className={className} >
                    {children}
                </ElementType>
            )

    }
}

export default createComponentWithProxy(ButtonStyle, Button);