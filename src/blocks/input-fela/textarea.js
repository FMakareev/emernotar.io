import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {createComponentWithProxy} from 'react-fela'
import {
    InputWrapper,
    InputLabel,
    InputMessage,
} from "./index";

const StyleTextarea = () => ({
    backgroundColor: ' rgb(255, 255, 255)',
    borderRadius: '0.25rem',
    border: '0.0625rem solid rgb(204, 204, 204)',
    color: 'rgb(51, 51, 51)',
    cursor: 'auto',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    padding: '0.625rem',
});

export const Textarea = createComponentWithProxy(StyleTextarea, class Textarea extends Component {

    static propTypes = {
        input: PropTypes.object.isRequired,
        label: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string
        ]),
        meta: PropTypes.object.isRequired,
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }


    render() {
        const {input, label, className, meta} = this.props;
        return (
            <InputWrapper>

                <InputLabel>
                    {label}
                </InputLabel>



                {/* Сообщение  с ошибкой */}
                {
                    meta && <InputMessage meta={meta}/>
                }


            </InputWrapper>
        )
    }
})


