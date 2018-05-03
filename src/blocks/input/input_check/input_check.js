import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy, connect} from "react-fela";
import InputWrapper from "../input_wrapper/input_wrapper";
import InputLabel from "../input_label/input_label";

const InputCheckStyles = ({input, theme}) => {
    console.log(input);
    return ({

        input: {
            position: 'absolute',
            opacity: '0',
            visibility: 'hidden',
        },
        label: {

        },
        dot: {
            position: 'absolute',
            left: '-1.25rem',
            top: '0.5rem',
            display: 'block',
            width: '0.75rem',
            height: '0.75rem',
            backgroundColor: theme.palette['primary']['dark'],
            ...(input.checked  ? {
                ...(input.checked? {
                    backgroundColor: theme.palette['primary']['light'],
                } : null)
            } : null),
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
        value: PropTypes.string,
    };

    static defaultProps = {
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
        const {input: {onChange, value: storeValue}, value} = this.props;
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

        const {styles, input: {name, onChange, onClick, onBlur, onFocus}, label, type, meta, id, value} = this.props;
        console.log(this.props);
        return (
            <InputWrapper state={meta} {...this.props}>
                <input
                    id={`id-${name}`}
                    value={value}
                    type={type}
                    name={name}
                    onChange={onChange}

                    onBlur={onBlur}
                    onFocus={onFocus}
                    className={styles.input}
                />

                <InputLabel
                    onClick={onClick}
                    For={`id-${name}`}
                    state={meta}
                    {...this.props}
                >
                    <span className={styles.dot}>

                    </span>
                    <span className={styles.label}>
                        {label}
                    </span>
                </InputLabel>

            </InputWrapper>
        )
    }
}

export default connect(InputCheckStyles)(InputCheck)
