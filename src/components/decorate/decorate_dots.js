import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-fela';

const DecorateDots = ({styles}) => {

    return (<div className={styles.wrapper}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
    </div>)
}

const STYLE = ({theme}) => {
    return {
        wrapper:{
            fontSize: 0,
            display: 'inline-block',
            lineHeight: '0.75rem',
            whiteSpace: 'nowrap',
            margin: 'auto',
        },
        dot:{
            display: 'inline-block',
            width: '0.75rem',
            height: '0.75rem',
            margin: '0 0.1875rem',
            verticalAlign: 'middle',
            borderRadius: '50%',
            backgroundColor: theme.palette.secondary.light,
            ':nth-child(2n)':{
                backgroundColor: theme.palette.secondary.main,
            },
            ':nth-child(3n)':{
                backgroundColor: theme.palette.secondary.dark,
            },
        }
    }
}

export default connect(STYLE)(DecorateDots);