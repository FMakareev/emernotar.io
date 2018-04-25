import React from 'react';
import {createComponentWithProxy} from "react-fela";


const createMediaQuery = (grid) => {
    const medias = {};

    grid.map(([size = 0, width = 'auto', type = '']) => {
        medias[`@media (min-width: ${size}px)`] = {
            display: 'inline-block',
            width: `${width}${type}`
        }
    });

    return medias;
};


/*
* grid {array object}
* grid[i].size {number} - media query size
* grid[i].width {number} - column width
* grid[i].type {string} - units (px, %, rem, em)
* */
const ColumnStyle = ({grid = [], styles, theme}) => {
    return ({
        display: 'block',
        paddingLeft: theme && theme.gutter || '0.9375rem',
        paddingRight: theme && theme.gutter || '0.9375rem',
        fontSize: 'initial',
        whiteSpace: 'normal',
        verticalAlign: 'top',

        ...(grid ? createMediaQuery(grid): {
            width: '100%'
        } ),

        ...styles,
    });
};

const Column = ({className, children}) => {
    return (<div className={className}>
        {children}
    </div>);
};
export default createComponentWithProxy(ColumnStyle, Column);