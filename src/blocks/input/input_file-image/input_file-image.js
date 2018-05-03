import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {InputWrapper} from "../input_wrapper/input_wrapper";
import {InputMessage} from "../input_message/input_message";

@withStyles()
export class InputFileImage extends Component {
    static propTypes = {}

    static defaultProps = {}


    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {
            preview: null,
        }
    }

    render() {
        const {
            input,
            label,
            btnLabel,
            multiple,
            mods,
            style,
            className,
            imgClassName,
            imgWrapperClassName,
            ref,
        } = this.props;
        const {preview} = this.state;
        return (
            <InputWrapper mods={mods ? mods : false}>
                <div className={imgWrapperClassName}>
                    <img src={preview} alt="" className={imgClassName}/>
                </div>

                {
                    meta && <InputMessage mods={mods ? mods : false} meta={meta}/>
                }
            </InputWrapper>
        )
    }
}

