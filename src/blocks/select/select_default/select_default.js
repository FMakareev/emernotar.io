import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import {
    InputWrapper,
    InputLabel,
    InputMessage,
} from "../../input";
import {GetMessages} from "../../messages/get_messages";

export class SelectDefault extends Component {

    static propTypes = {
        input: PropTypes.object.isRequired,
        label: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string
        ]),
        type: PropTypes.string.isRequired,
        mods: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.bool
        ]),
        options: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.bool
        ]),
        meta: PropTypes.object.isRequired,
    };

    static defaultProps = {
        mods: false,
        options: []
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    shouldComponentUpdate(nextProps) {
        return (nextProps.options !== this.props.options
            || nextProps.input.value !== this.props.input.value );
    }

    /*
    * @param {string} label
    * @param {object} label - object {moduleName: '', wordKey: ''}
    * @return {string} - If the string parameter
    * @return {react element} - If the object parameter
    * @description Get label text
    * */
    getLabel(label) {
        if (label && typeof label === 'string') {
            return <span>{label}</span>
        } else if (label && typeof label === 'object') {
            return <GetMessages
                moduleName={label.moduleName}
                wordKey={label.wordKey}
            />
        } else {
            return <span>label</span>;
        }
    }

    render() {
        const {input, label, type, mods, meta, options, loading,labelKey,
            valueKey,selectValue} = this.props;
        return (
            <InputWrapper mods={mods ? mods : false}>
                {
                    label &&
                    <InputLabel mods={mods ? mods : false}>
                        {this.getLabel(label)}
                    </InputLabel>
                }
                <Select
                    selectValue={selectValue}
                    name={input.name}
                    value={input.value ? input.value: selectValue ? selectValue : ''}
                    options={options}
                    labelKey={labelKey}
                    valueKey={valueKey}
                    onChange={(e) => {
                        return input.onChange(e ? e[valueKey] : null);
                    }}
                />
                {/* Сообщение  с ошибкой */}
                <InputMessage mods={mods ? mods : false} meta={meta}/>
            </InputWrapper>
        )
    }
}