import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy} from 'react-fela'

const NavigationSidebarMenuListStyle = ({theme, ...props}) => {
    return {

    }
};

class NavigationSidebarMenuList extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        const {className, children} = this.props;
        console.log(this.props);
        return (
            <ul className={className}>
                {children}
            </ul>
        )
    }
}

export default createComponentWithProxy(NavigationSidebarMenuListStyle,NavigationSidebarMenuList);