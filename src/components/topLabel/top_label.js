import React, {Component} from 'react';
import {connect} from "react-fela";
import {Typography} from "../../blocks/typography/index";

class TopLabel extends Component {

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
        const {styles, toggleTab, children, className, as = 'h2'} = this.props;
        if (!styles) return null;
        return (
            <div onClick={toggleTab} className={className + ' ' + styles.wrapper}>
                <Typography
                    styles={{margin: 0}}
                    as={as}
                    size={'medium'}
                    fontWeight={'inherit'}
                    textAlign={'center'}
                >
                    {children}
                </Typography>
            </div>
        )
    }
}

const style = ({theme, isActive, styles}) => {
    return {
        wrapper: {
            position: 'relative',
            display: 'inline-block',
            transform: 'translateY(-50%)',
            padding: '2rem',
            margin: '1rem',
            zIndex: 5,
            backgroundColor: '#FFFFFF',
            ...(isActive ? {
                // border: '0.1rem solid #FDF396',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                fontWeight: 'bold'
            } : null),
            // height: '13rem',
            // maxWidth: '18rem',
            ...styles,
        },
    }
}

export default connect(style)(TopLabel)
