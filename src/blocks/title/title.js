import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getElementType} from '../../utils/component/get_element_type';
import {createComponentWithProxy} from "react-fela";

/*
Example Variable. Maybe later, if it needed union 3 ferst to scope, for @media
* as
* textTransform {binary} 
* fontWeight {binary}
* textAlign {binary}
*/

const as = {
    'default': {
        marginBottom: '0.5rem',
        marginTop: '1.414rem',
        fontSize: '2.441rem',
    },
    // '14px': {
    //     fontSize: 14+'px',
    // },
    'color': {
        fontSize: '1.125rem',
        color: '#888888',
    },
    'h1': {
        // fontSize: 32+'px',
        // textAlign: 'left',
        fontSize: '2.441rem',
    },
    'h2': {
        fontSize: '1.953rem',
    },
    'h3': {
        fontSize: '1.563rem',
    },
    'h4': {
        fontSize: '1.25rem',
    },
    'small': {
        fontSize: '0.8rem',
    }
}

const TitleStyle = ({
                        as = 'default',
                        textTransform = false,
                        fontWeight = false,
                        textAlign = false,
                    }) => ({
    lineHeight: 1.2,
    as: as,
    ...(textTransform ? {textTransform:'uppercase'}: null),
    ...(fontWeight ? {fontWeights: '700'}: null), 
    ...(textAlign ? {textAlign: 'center'}: null),
});

const Title = (props) => {
    const ElementType = getElementType(Title, props);

    return (<ElementType className={props.className}>
        {props.children || ''}
    </ElementType>);
};

export default createComponentWithProxy(TitleStyle, Title)
