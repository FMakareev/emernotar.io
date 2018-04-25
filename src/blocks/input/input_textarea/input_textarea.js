import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    InputWrapper,
    InputLabel,
    InputMessage,
} from "../index";


class Textarea extends Component {

    static propTypes = {
        input: PropTypes.object.isRequired,
        label: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string
        ]),
        mods: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.bool
        ]),
        meta: PropTypes.object.isRequired,
    };

    static defaultProps = {
        mods: false
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        const {input, type, required, className} = this.props;
        return (
            <textarea
                id={`id-${input.name}`}
                className={className}
                type={type}
                {...input}
                aria-required={required ? required : false}
                aria-labelledby={`${input.name}`}
            >

                </textarea>
        )
    }
}
