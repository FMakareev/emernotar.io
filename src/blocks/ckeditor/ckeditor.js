import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {ClientSideOnly} from '../../utils';


// @ClientSideOnly
export class FormCKEditor extends Component {
    static propTypes = {
        editable: PropTypes.bool,
        editorClassName: PropTypes.string,
        editableClassName: PropTypes.string,
    }

    static defaultProps = {
        content: '<div>Example HTML string</div>',
        editable: true
    }


    constructor(props) {
        super(props);
        const {default: RichTextEditor} = require('react-rte');
        this.RichTextEditor = RichTextEditor;
        this.state = {
            value: this.RichTextEditor.createEmptyValue(),
            format: 'html',
            readOnly: false,
        };
        this._onChange = this._onChange.bind(this);

    }

    componentDidMount() {
        try {
            this.setState({
                value: this.state.value.setContentFromString(this.props.input.value, this.state.format),
            });
        } catch (err) {
            console.error('ProductDescription:', err);
        }
    }

    _onChange(value) {
        this.props.input.onChange(value.toString('html'));
        this.setState({value});
    }

    render() {
        const {
            editable,
            editorClassName,
            editableClassName,
        } = this.props;

        const {value} = this.state;
        const {RichTextEditor} = this;
        if (!RichTextEditor) return null;
        return <RichTextEditor
            value={value}
            editorClassName={editorClassName}
            className={editable ? '' : editableClassName}
            onChange={this._onChange}
            readOnly={!editable}
        />
    }
}

