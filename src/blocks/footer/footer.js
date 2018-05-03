import React, {Component} from 'react';
import {createComponentWithProxy} from "react-fela";


class Footer extends Component {
    render() {
        const {className, children} = this.props;
        return (
            <footer className={className}>
                {children}
            </footer>
        );
    }
}

export default Footer;