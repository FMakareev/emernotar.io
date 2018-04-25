import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Select from 'react-select';

// import {graphql} from 'react-apollo'
// import gql from 'graphql-tag';
// Be sure to include styles at some point, probably during your bootstrapping
// import style from 'react-select/dist/react-select.css';

import {
    InputWrapper,
    InputLabel,
    InputMessage,
} from "../../input";

// @withStyles(style)
export class SelectAutocomplete extends Component {


    static propTypes = {
        input: PropTypes.object.isRequired,
        label: PropTypes.string,
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
        this.onChange = this.onChange.bind(this);
    }

    get initialState() {
        return {}
    }

    onChange(e) {
        const {input: {onChange}} = this.props;
        onChange(e ? e.id : null);
    }

    shouldComponentUpdate(nextProps) {
        return (nextProps.options !== this.props.options
            || nextProps.input.value !== this.props.input.value );
    }

    render() {
        const {input, label, type, mods, meta, options,loading} = this.props;
        if(loading) {
            return (<div>'loading@'</div>)
        }
        console.log('options',options);
        return (
            <InputWrapper mods={mods ? mods : false}>

                <InputLabel mods={mods ? mods : false}>
                    {label}
                </InputLabel>

                <Select
                    name={input.name}
                    value={input.value}
                    options={options}
                    searchable={true}
                    onChange={this.onChange}
                    labelKey="name"
                    valueKey="id"
                />
                {/* Сообщение  с ошибкой */}
                <InputMessage mods={mods ? mods : false} meta={meta}/>
            </InputWrapper>
        )
    }
}

// SelectAutocomplete.propTypes = {
//     input: PropTypes.object.isRequired,
//     label: PropTypes.string,
//     type: PropTypes.string.isRequired,
//     mods: PropTypes.oneOfType([
//         PropTypes.object,
//         PropTypes.bool
//     ]),
//     // options: PropTypes.oneOfType([
//     //     PropTypes.array,
//     //     PropTypes.bool
//     // ]),
//     meta: PropTypes.object.isRequired,
// };
//
// SelectAutocomplete.defaultProps = {
//     mods: false,
//     // options: false
// };