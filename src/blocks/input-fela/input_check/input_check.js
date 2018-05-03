import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy, connect} from "react-fela";
import InputWrapper from "../input_wrapper/input_wrapper";
import InputLabel from "../input_label/input_label";

const CheckStyles = ({value,...props}) => {
    console.log(value);
    console.log(props);
    return ({
        inputCheck: {
            position: 'absolute',
            opacity: '0',
            visibility: 'hidden',
        },

        inputDot: {
            position: 'relative',
            display: 'inline-block',
            width: '1rem',
            height: '1rem',
            borderRadius: '50%',
            border: '1px solid #AEAEAE',
            verticalAlign:'middle',
            ':before':{
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                borderRadius: '50%',
                display: 'block',
                width: '0.5rem',
                height: '0.5rem',
                backgroundColor: '#000',
                opacity: '0',

                ...(value ? {
                    opacity: '1',
                }: null),
            }
        },

        inputDescription: {
            display: 'inline-block',
            verticalAlign:'middle',
            paddingLeft: '1rem'
        }

    })
}

class InputCheck extends Component {

    static propTypes = {
        input: PropTypes.object.isRequired,
        label: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string
        ]),
        type: PropTypes.string.isRequired,
        id: PropTypes.string,
        mods: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.bool
        ]),
    };

    static defaultProps = {
        mods: undefined,
        label: 'label'
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onCheckbox = this.onCheckbox.bind(this);
    }

    get initialState() {
        return {}
    }

    onCheckbox() {
        const {input: {onChange, value: storeValue}, value, stales} = this.props;
        if (typeof storeValue !== 'object') {
            onChange([value]);
        } else {
            if (storeValue.indexOf(value) === -1) {
                storeValue.push(value);
                onChange(storeValue);
            } else {
                storeValue.splice(storeValue.indexOf(value), 1);
                onChange(storeValue);
            }
        }
    }


    render() {

        const {input, label, type, id, value, styles} = this.props;
        console.log(this.props);
        return (
            <InputWrapper {...this.props}>
                <input
                    id={id}
                    value={value}
                    type={type}
                    name={input.name}
                    {...input}
                    checked={value === input.value}

                    className={styles.inputCheck}/>

                <InputLabel
                    {...this.props}
                    onClick={input.onClick}
                    For={id}>
                    <span className={styles.inputDot}>

                    </span>
                    <span className={styles.inputDescription}>
                        {label}
                    </span>
                </InputLabel>

            </InputWrapper>
        )
    }
}

InputCheck = connect(CheckStyles)(InputCheck);


export default InputCheck;
