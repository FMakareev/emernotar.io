import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy} from "react-fela";

const AccordionWrapperStyle = () => ({})

class AccordionWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onActive = this.onActive.bind(this);
    }

    get initialState() {
        return {
            active: null,
        }
    }

    onActive(index) {
        const active = index !== this.state.active ? index : null;
        this.setState({active})
    }

    render() {
        const {children, className} = this.props;
        const {active} = this.state;

        let childrenWithProps = React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
                index: index,
                active: active,
                onActive: () => {
                    this.onActive(index);
                }
            })
        });

        return <div className={className}>{childrenWithProps}</div>
    }
}

export default createComponentWithProxy(AccordionWrapperStyle, AccordionWrapper)