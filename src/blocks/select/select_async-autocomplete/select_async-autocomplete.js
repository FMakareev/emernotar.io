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
export class SelectAsyncAutocomplete extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.getOptions = this.getOptions.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    get initialState() {
        // console.log('initialState');
        return {
            value:'',
            options: [],
        }
    }

    shouldComponentUpdate(nextProps) {
        return (nextProps.options !== this.props.options
            || nextProps.input.value !== this.props.input.value );
    }

    async getOptions(event) {

        if (event.length < 3 || event === this.state.value) {
            return this.props.options
        }

        this.setState({value: event});
        // console.log('event:', event);
        const {data} = await this.props.refetch({name: event});
        if(data) {
            // await this.setState({options: data.schoolsearch});
            return {options: data.schoolsearch};
        }

    }

    async onChange(e) {

        this.setState({
            value: e.id,
            // options: [...e]
        });
        this.props.input.onChange(e ? e.id : null);
    }

    render() {
        const {input, label, type, mods, meta, name, loading,options} = this.props;
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

                    isLoading={loading}

                    onChange={this.onChange}
                    autoload={false}
                    loadOptions={this.getOptions}
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


