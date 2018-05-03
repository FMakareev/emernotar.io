import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
// import style from 'react-widgets/dist/css/react-widgets.css'
import 'react-widgets/dist/css/react-widgets.css'
import {
    InputMessage,
    InputLabel,
    InputWrapper
} from "../";

moment.locale('en');
momentLocalizer();


// @withStyles(style)
export class InputDateTimePicker extends Component {

    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {
            value: null
        }
    }

    render() {
        const {input: {onChange, name}, label, type, mods, meta} = this.props;
        // moment(this.state.public_at).format("YYYY-MM-D h:mm:ss");
        return (
            <InputWrapper mods={mods ? mods : false}>
                <InputLabel For={`id-${name}`} mods={mods ? mods : false}>
                    {label}
                </InputLabel>
                <DateTimePicker
                    id={`id-${name}`}
                    min={new Date()}
                    value={this.state.value}
                    onChange={value => {
                        this.setState({value: value});
                        // return onChange ? onChange(parseFloat(Date.parse(value)).toFixed(2)) : null
                    }}
                /> {/* Сообщение  с ошибкой */}
                {
                    meta && <InputMessage mods={mods ? mods : false} meta={meta}/>
                }

            </InputWrapper>
        )
    }
}


