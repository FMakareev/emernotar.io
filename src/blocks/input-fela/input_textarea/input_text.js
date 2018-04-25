import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InputWrapper from "../input_wrapper/input_wrapper";
import InputLabel from "../input_label/input_label";
import InputMessage from "../input_message/input_message";
import Input from "../input";

export class InputText extends Component {

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
        const {input, label, type, meta, required, } = this.props;
        return (
            <InputWrapper state={meta} {...this.props}>
                <InputLabel For={`id-${input.name}`} state={meta} {...this.props}>
                    {label}
                </InputLabel>

                <Input state={meta} {...this.props}/>

                <InputMessage state={meta} {...this.props}/>

            </InputWrapper>
        )
    }

}