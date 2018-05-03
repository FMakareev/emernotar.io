import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy} from "react-fela";

const AccordionToggleStyle = () => ({})

class AccordionToggle extends Component {

    render() {
        const {children, active, index, onActive, className} = this.props;
        let childrenWithProps = React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                active: active === index,
                index,
                onClick: onActive
            })
        });

        return (<div className={className}>
            {childrenWithProps}
        </div>)
    }
}

export default createComponentWithProxy(AccordionToggleStyle, AccordionToggle)