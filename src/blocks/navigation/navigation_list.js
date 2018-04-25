import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy,connect} from 'react-fela'

const NavigationListStyle = () => ({
    marginLeft: '-15px',
    marginRight: '-15px',
    padding: '0',
    textAlign: 'center',
    '@media (max-width: 810px)': {margin: 'auto'}
})

class NavigationList extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        const {children,className,styles } = this.props;
        return (<ul ref="NavigationList" style={{
            // marginLeft: '-15px',
            // marginRight: '-15px',
            padding: '0',
            textAlign: 'center',
        }} className={className}>
            {children}
        </ul>);
    }
}

export default createComponentWithProxy(NavigationListStyle, NavigationList);
