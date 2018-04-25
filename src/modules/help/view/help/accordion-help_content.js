import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-fela';


class AccordionHelpContent extends Component {

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
        const {children, styles, index} = this.props;

        return (
            <div className={styles.wrapper}>
                {children}
            </div>
        )
    }
}

// const STYLE = ({theme, index}) => {
const STYLE = ({color, theme}) => {
    const baseSize = 80 / 16;
    return {
        wrapper: {
            backgroundColor: theme.palette.secondary[color()],
            marginLeft: `${baseSize / 5 * 4}rem`,
            padding: '1rem 1.25rem',
            color: '#000',
        },
    }
}

export default connect(STYLE)(AccordionHelpContent)
