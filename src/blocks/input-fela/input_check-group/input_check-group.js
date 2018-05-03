import React, {Component} from 'react';
import InputCheck from "../input_check/input_check";
import PropTypes from 'prop-types';
import {createComponentWithProxy} from 'react-fela'


export class InputCheckGroup extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired,
        type: PropTypes.string.isRequired,
        options:  PropTypes.array.isRequired,
        mods: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.bool
        ]),
        meta: PropTypes.object,
    };

    static defaultProps = {

    };
    render() {
        const {input, type, options, meta,mods} = this.props;
        console.log(this.props);
        return (<div>
            {
                options.map((item, index) =>
                    <InputCheck
                        key={item.value}
                        // value={item.value}
                        input={input}
                        id={`${input.name}-${index}`}
                        label={item.label}
                        type={type}
                        checked={item.value === input.value}
                        state={item.value}
                    />
                )
            }
            {
                meta &&
                <div className="complaints_input-valid">
                    {meta.touched &&
                    ((meta.error && <span>{meta.error}</span>) ||
                        (meta.warning && <span>{meta.warning}</span>))}
                </div>
            }
        </div>)
    }
}
