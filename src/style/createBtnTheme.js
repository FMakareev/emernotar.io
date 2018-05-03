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


export const createBtnTheme = (theme,bright) => {
    return {
        flat: {
            'default': {
                color: theme.palette['default']['contrastText'],
                backgroundColor: 'transparent',
                ...CreateElementState({
                    textDecoration: 'none',
                    color: theme.palette['primary']['main'],
                    '> svg': {
                        fill: theme.palette['primary']['main'],
                    }
                }),
            },
            'primary': {
                color: theme.palette['primary']['main'],
                backgroundColor: 'transparent',
                ...CreateElementState({
                    textDecoration: 'none',
                    color: theme.palette['default']['contrastText'],
                    '> svg': {
                        fill: theme.palette['default']['contrastText'],
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
            // 'disable': {
            //     color: theme.palette['disable']['main'],
            //     backgroundColor: 'transparent',
            //     cursor: 'default',
            //     ':disabled': {
            //         color: 'rgba(34,34,34, .5)',
            //         cursor: 'default'
            //     },
            // },
        },
        raised: {
            'default': {
                color: theme.palette['primary']['main'],
                backgroundColor: 'transparent',
                ...CreateElementState({
                    textDecoration: 'none',
                    backgroundColor: theme.palette['primary']['main'],
                    color: theme.palette['default']['dark'],
                    '> svg': {
                        fill: theme.palette['default']['dark'],
                    }
                }),
            },
            'primary': {
                color: theme.palette['secondary']['contrastText'],
                backgroundColor: theme.palette['primary']['main'],
                borderRadius: '5%',
                ...CreateElementState({
                    textDecoration: 'none',
                    color: theme.palette['secondary']['contrastText'],
                    backgroundColor: theme.palette['primary']['light'],
                }),
            },
            'secondary': {
                color: theme.palette['primary']['main'],
                backgroundColor: theme.palette['primary']['contrastText'],
                ...CreateElementState({
                    textDecoration: 'none',
                    color: theme.palette['primary']['contrastText'],
                    backgroundColor: theme.palette['primary']['main'],
                    '> svg': {
                        fill: theme.palette['primary']['contrastText'],
                    }
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
            // 'disable': {
            //     color: theme.palette['disable']['contrastText'],
            //     backgroundColor: theme.palette['disable']['main'],
            //     cursor: 'default',
            //     ':disabled': {
            //         color: 'rgba(34,34,34, .5)',
            //         cursor: 'default'
            //     },
            // },
            // 'invert': {
            //     color: theme.palette['error']['contrastText'],
            //     backgroundColor: theme.palette['error']['main'],
            //
            //     ...CreateElementState({
            //         textDecoration: 'none',
            //         opacity: 0.5
            //     }),
            // },
        },
    };
}