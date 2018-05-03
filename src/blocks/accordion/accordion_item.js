import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy} from "react-fela";

const AccordionItemStyle = () =>({

})
class AccordionItem extends Component {

    render() {
        const {children, active, index, onActive,className} = this.props;
        let childrenWithProps = React.Children.map(children, (child) => {
            return React.cloneElement(child, {active, index, onActive})
        });

        return (<div className={className}>
            {childrenWithProps}
        </div>)
    }
}

export default createComponentWithProxy(AccordionItemStyle,AccordionItem)