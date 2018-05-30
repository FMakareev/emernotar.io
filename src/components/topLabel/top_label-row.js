import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy, connect} from "react-fela";
import {Typography} from "../../blocks/typography/index";
import {Image} from "../../blocks/image/index";

class TopLabelRow extends Component {

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
        const {styles, children} = this.props;
        return (
            <div className={styles && styles.wrapper}>
                {children}
            </div>
        )
    }
}

const style = ({children,styles}) => {
    return {
        wrapper: {
            marginRight: '-1rem',
            marginLeft: '-1rem',
            ...styles,
            ...(children && children.length ? {
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
                // '-ms-flex-direction': 'row',
                // '-ms-flex-pack': 'distribute',

            }: {
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                // '-ms-flex-direction': 'row',
                // '-ms-flex-pack': 'center'
            }),

        },

    }
}

export default connect(style)(TopLabelRow)
