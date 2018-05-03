import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {InputLabel, InputMessage, InputWrapper} from "../";
import Button from "../../button/button";


export class InputFile extends Component {

    static propTypes = {
        input: PropTypes.object,
        label: PropTypes.string,
        btnLabel: PropTypes.string, // button text
        btnClassMods: PropTypes.string, // button css class
        btnClassName: PropTypes.string, // button css bem mod
        multiple: PropTypes.bool,
        fileList: PropTypes.bool,
        validates: PropTypes.array,
        mods: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.bool
        ]),
    };

    static defaultProps = {
        mods: false,
        multiple: false,
        fileList: false
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onChange = this.onChange.bind(this);
        this.onRemoveFile = this.onRemoveFile.bind(this);
        this.composValidator = this.composValidator.bind(this);
    }

    get initialState() {
        return {
            files: [],
            errors: []
        }
    }

    onChange(file) {

        let errors = [];
        const reader = new FileReader();
        const {input: {onChange}, multiple} = this.props;
        const files = multiple ? this.state.files : [];
        const setState = this.setState;
        reader.onload = (e) => {
            console.log(e);
            file.preview = e.target.result;
            files.push(file);
            this.setState({files: files, errors});
            onChange(files)
        };
        reader.readAsDataURL(file);
    }

    onRemoveFile(elem) {
        const {input: {onChange}} = this.props;

        let newState = [];
        this.state.files.map((item, index) => {
            if (elem !== index) {
                newState.push(item)
            }
        });
        this.setState({files: newState});
        onChange(newState)
    }

    composValidator(event, fileHandler) {
        const {validates} = this.props;
        let error = [];

        for (let i = 0; i < event.target.files.length; i++) {
            if (validates && validates.length) {
                let fileError = [];
                validates.map((fn) => {
                    let result = fn(event.target.files[i]);
                    if (result) {
                        error.push(result);
                        fileError.push(result);
                    }
                });
                if (fileError.length === 0) {
                    fileHandler(event.target.files[i]);
                }
            } else {
                fileHandler(event.target.files[i]);
            }
        }


        if (error.length) {
            this.setState({meta: {error, touched: true}})
        } else {
            this.setState({meta: {error: undefined, touched: true}})
        }
    }


    render() {
        const {
            input,
            label,
            btnLabel,
            btnClassName,
            btnClassMods,
            multiple,
            mods,
            fileList,
        } = this.props;
        const {files, meta, errors} = this.state;
        return (
            <InputWrapper mods={mods ? mods : false}>

                <InputLabel For={`id-${input.name}`} mods={mods ? mods : false}>
                    {label}
                </InputLabel>
                <Button
                    mods={btnClassMods }
                    className={btnClassName}
                    type={'button'}>
                    <input
                        className="input_file"
                        multiple={multiple ? multiple : false}
                        onChange={(event) => this.composValidator(event, this.onChange)}
                        type="file"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        onDrop={(event) => {
                            console.log(event);
                            event.preventDefault();
                            this.onChange(event);
                        }}
                    />
                    {btnLabel}
                </Button>
                {
                    fileList &&
                    <div className="input_file-list">
                        {
                            files && files.map((item, index) => {
                                return (
                                    <div key={index} className="input_file-item">
                                    <span className="input_file-item-name">
                                        {item.name}
                                    </span>
                                        <Button onClick={() => this.onRemoveFile(index)}>
                                            х
                                        </Button>
                                    </div>)
                            })
                        }
                    </div>
                }
                {
                    meta && <InputMessage mods={mods ? mods : false} meta={meta}/>
                }

            </InputWrapper>
        )
    }

}

