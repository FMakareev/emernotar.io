import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-fela';


class AccordionItemWrapper extends Component {

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
        const {children, styles} = this.props;
        return (
            <div className={styles.wrapper}>
                {children}
            </div>
        )
    }
}

// const STYLE = ({theme, index}) => {
const STYLE = ({color, theme, count}) => {
    const baseSize = 80 / 16;
    return {
        wrapper: {
            marginBottom: `${baseSize/2}rem`,

        },
    }
}

export default connect(STYLE)(AccordionItemWrapper)
4