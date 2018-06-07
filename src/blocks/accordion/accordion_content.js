import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy} from "react-fela";

const AccordionContentStyle = () => ({})

class AccordionContent extends Component {
    static propTypes = {};

    static defaultProps = {
        active: false
    };


    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        const {children, active, index,className} = this.props;
        console.log('AccordionContent:',this.props);
        if (index !== active) return null;

        return (<div className={className}>
            {children}
        </div>)
    }
}


export default createComponentWithProxy(AccordionContentStyle,AccordionContent)