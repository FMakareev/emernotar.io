import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css';
import InputWrapper from "./input_wrapper/input_wrapper";
import InputLabel from "./input_label/input_label";
import InputMessage from "./input_message/input_message";

export class InputTags extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
    }

    get initialState() {
        return {tags: []}
    }

    handleChange(tags) {
        const {input: {onChange}} = this.props;
        let newArr = this.returnUnique(tags);
        onChange(newArr.join(', '));
        this.setState({tags: newArr})
    }

    returnUnique(arr) {
        let obj = new Object;
        for (let i = 0, i_max = arr.length; i < i_max; i++) {
            obj[arr[i]] = ''; // запоминаем элемент как свойство объекта
        }
        return Object.keys(obj);
    }

    render() {
        const {tags} = this.state;
        const {input: {name,value}, label, meta} = this.props;
        return (
            <InputWrapper {...this.props}>
                {
                    label &&
                    <InputLabel For={`id-${name}`} >
                        {this.getLabel(label)}
                    </InputLabel>
                }
                <TagsInput value={value ? value.split(', ') : []} onChange={this.handleChange}/>

                {
                    meta && <InputMessage {...this.props} />
                }

            </InputWrapper>
        )
    }
}