import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-fela';


class AccordionButton extends Component {

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
        const {children, styles, onClick} = this.props;
        console.log(this.props);
        return (
            <div onClick={onClick} className={styles.wrapper}>
                <div className={styles.icon}></div>
                <button className={styles.content}>
                    <div className={styles.text}>
                        {children}
                    </div>
                </button>
            </div>
        )
    }
}

// const STYLE = ({theme, index}) => {
const STYLE = ({color, theme, count,active}) => {
    const baseSize = 80 / 16;
    return {
        wrapper: {
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'row',
            // '-ms-flex-direction': 'row',
            alignItems: 'inherit',
            // '-ms-flex-pack': 'inherit',
            width: '100%',
            padding: 0,
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            ':hover :first-child:before': {
                color: '#000'
            },
            ':hover :last-child': {
                color: '#000'
            }

        },
        icon: {
            position: 'relative',
            width: `${baseSize}rem`,
            minHeight: `${baseSize}rem`,
            borderRadius: '50%',
            backgroundColor: theme.palette.secondary[color()],
            ':before': {
                content: `"${count}"`,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                display: 'block',
                color: '#fff',
                fontSize: '1.75rem',
                fontWeight: 'bold',
                ...(active? {
                    color: '#000'
                }:null)
            }
        },
        content: {
            display: 'flex',
            justifyContent: 'flex-start',
            // '-ms-flex-pack': 'start',

            alignItems: 'center',
            // '-ms-flex-align': 'center',

            width: `calc(100% - ${baseSize / 2}rem)`,
            minHeight: `${baseSize}rem`,
            marginLeft: `-${baseSize / 2}rem !important`,
            padding: `1rem 1rem 1rem ${baseSize / 2}rem`,
            backgroundColor: theme.palette.secondary[color()],
            textAlign: 'left',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
            border: 'none',
            ':hover': {
                color: '#000',
            },
            ...(active? {
                color: '#000'
            }:null),
        },
        text: {
            fontSize: '1.75rem',
            color: '#4F4F4F',
            fontWeight: 'bold',
            fontFamily: "'Vollkorn-Bold', serif, 'Roboto', sans-serif",
            ':hover': {
                color: '#000',
            },
             ...(active? {
                color: '#000'
            }:null),
        }
    }
}

export default connect(STYLE)(AccordionButton)
