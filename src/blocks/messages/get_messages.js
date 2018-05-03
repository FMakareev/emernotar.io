import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {connect} from "react-redux";

// const mapState = state => ({
//     messages: state.intl.modules
// });

// @connect(mapState)
export class GetMessages extends Component {
    static propTypes = {
        moduleName: PropTypes.string,
        wordKey: PropTypes.string
    };

    static defaultProps = {
        moduleName: '',
        wordKey: '',
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }


    render() {
        const {moduleName,wordKey,messages} = this.props;

        return (
            <span>
                {messages[moduleName].messages[wordKey]}
            </span>
        )
    }
}

