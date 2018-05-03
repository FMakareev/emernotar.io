import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {createComponentWithProxy} from "react-fela";
import {getElementType} from '../../utils/component/get_element_type';


const ColorTheme = ({palette}, color, bright) => ({
    color: palette[color][bright]
});


const Size = {
    'small': {
        fontSize: '1.125rem',
        lineHeight: '1.2',
    },
    'medium': {
        fontSize: '1.375rem',
        lineHeight: '1.4',
    },
    'large': {
        fontSize: '2.4375rem',
        lineHeight: '2.8125rem'
    },
    // 'superLarge': {
    //     fontSize: '60px',
    //     lineHeight: '65px',
    //     textTransform: 'uppercase',
    // },
};


const TypographyStyle = ({
                             size = 'medium',
                             styles,
                             theme,
                             color = 'primary',
                             bright = 'contrastText',
                             textTransform = 'none',
                             fontWeight = 'normal',
                             textAlign = 'left',
                             fullWidth = false,

                         }) => {

    return {
        textAlign: textAlign,
        fontWeight: fontWeight,
        textTransform: textTransform,
        ...Size[size],
        ...styles,
        ...(theme && color !== 'inherit' ? {
            ...ColorTheme(theme, color, bright)
        } : null),
        ...(color === 'inherit' ? {color: 'inherit'}: null),
        ...(fullWidth && {
            width: '100%',
        }),
    }

};

const Typography = ({
                        children,
                        as,
                        ...props
                    }) => {
    const ElementType = getElementType(as, props);

    return (<ElementType>{children}</ElementType>)
};

// TODO: разобратся почему эта валидация срабатывает для layout component
// Component.propTypes = {
//
//     size: PropTypes.oneOf(['small', 'medium', 'large']),
//     styles: PropTypes.object,
//     theme: PropTypes.object,
//     color: PropTypes.oneOf(['default', 'secondary', 'warning', 'error', 'disable']),
//     bright:  PropTypes.oneOf(['light', 'main', 'dark', 'contrastText']),
//     textTransform: PropTypes.oneOf(['none', 'uppercase', 'lowercase', 'capitalize']),
//     fontWeight: PropTypes.oneOf(['100', '200', '300','400','500','600','700','800','900','normal','bold','bolder','lighter' ]),
//     textAlign: PropTypes.oneOf(['left', 'right', 'center']),
//
// };
// Component.contextTypes = { fela: PropTypes.func.isRequired };

export default createComponentWithProxy(TypographyStyle, Typography);