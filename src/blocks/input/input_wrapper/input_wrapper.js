import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy} from 'react-fela'

const rule = ({horizontal = false}) => ({
    position: 'relative',
    ...(horizontal ? {
        display: 'flex',
        alignItems: 'baseline',
        '-ms-flex-align': 'baseline',
    } : null)
});

class InputWrapper extends Component {

    static defaultProps = {
        mods: false
    };

    static propTypes = {
        mods: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.bool
        ])
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }
    render() {
        const {
            className,
            children
        } = this.props;
        return (
            <div className={className}>
                {children}
            </div>
        )
    }
}

export default createComponentWithProxy(rule, InputWrapper);