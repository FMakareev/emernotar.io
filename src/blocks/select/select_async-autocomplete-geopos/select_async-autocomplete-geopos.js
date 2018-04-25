import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';

// Be sure to include styles at some point, probably during your bootstrapping
// import style from 'react-select/dist/react-select.css';

// import gql from 'graphql-tag';
// import {graphql, compose} from "react-apollo";
import {
    InputWrapper,
    InputLabel,
    InputMessage,
} from "../../input";

// @withStyles(style)
export class SelectAsyncAutocompleteGeopos extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onChange = this.onChange.bind(this);
    }

    get initialState() {
        const {disabled} = this.props;
        return {
            value: '',
            options: [],
            disabled
        }
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps && nextProps.disabled) {
            if(nextProps.disabled !== this.props.disabled) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    }


    async onChange(value) {

        this.setState({
            value: value
        });
        this.props.input.onChange(value ? value.id : null);
    }

    render() {
        const {input, label, type, mods, meta, name, loading, options,disabled, getOptions} = this.props;
        const {value,} = this.state;

        return (
            <InputWrapper mods={mods ? mods : false}>

                <InputLabel mods={mods ? mods : false}>
                    {label}
                </InputLabel>

                <Select.Async
                    name={name}
                    value={value}
                    options={options}
                    labelKey="name"
                    valueKey="id"
                    disabled={disabled}
                    isLoading={loading}

                    onChange={this.onChange}
                    autoload={false}
                    loadOptions={getOptions}
                />
                {/* Сообщение  с ошибкой */}
                <InputMessage mods={mods ? mods : false} meta={meta}/>
            </InputWrapper>
        )
    }
}

// SelectAsyncAutocomplete.propTypes = {
//     input: PropTypes.object.isRequired,
//     label: PropTypes.string,
//     type: PropTypes.string.isRequired,
//     mods: PropTypes.oneOfType([
//         PropTypes.object,
//         PropTypes.bool
//     ]),
//     meta: PropTypes.object.isRequired,
// };
//
// SelectAsyncAutocomplete.defaultProps = {
//     mods: false
// };


