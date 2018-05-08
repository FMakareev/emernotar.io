import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy,connect } from "react-fela";

const InputMessageStyle = ({state}) => ({
    position: 'relative',
    display: 'block',
    marginBottom: '1.5rem',
    fontSize: '1.375rem',
    ...(state? {
        ...(state.valid && state.touched ? {
            color: '#00bfa5',
        } : null),
        ...(state.warning ? {
            color: '#FFA500',
        } : null),
        ...(state.invalid && state.touched ? {
            color: '#ff1744',
        } : null),
        ...(state.active ? {
            color: '#2979ff',
        } : null)
    } : null),
})

class InputMessage extends Component {

    static propTypes = {

    };
    static defaultProps = {    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        const {className, meta} = this.props;
        if (meta) {
            if (Array.isArray(meta.error) || Array.isArray(meta.warning)) {
                return (<div className={className}>
                    {
                        meta.touched &&
                        (meta.error && meta.error.map((item, index) => <span key={index}>{item}</span>))
                    }
                    {
                        meta.touched &&
                        (meta.warning && meta.warning.map((item, index) => <span key={index}>{item}</span>))
                    }
                </div>)
            } else {
                return (<div className={className}>
                    {
                        meta.touched &&
                        (meta.error &&
                            <span>
                            {meta.error}
                        </span>
                        )
                    }
                    {
                        meta.touched &&
                        (meta.warning &&
                            <span>
                                {meta.warning}
                            </span>
                        )
                    }
                </div>)
            }
        } else {
            return null;
        }
    }
}

export default createComponentWithProxy(InputMessageStyle, InputMessage);