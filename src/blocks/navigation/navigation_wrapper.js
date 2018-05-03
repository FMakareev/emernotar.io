import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy} from 'react-fela'

const NavigationWrapperStyle = ({state}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    '@media (max-width: 500px)': {
        justifyContent: 'space-around',
    },
    '@media (min-width: 811px)': {
        paddingRight: '2rem',
    },
});

class NavigationWrapper extends Component {
    static propTypes = {};

    static defaultProps = {};


    componentDidMount(){
        console.log(this);
    }

    render() {
        const {children,className} = this.props;
        return (<nav ref="navigation-priotiry_wrapper" className={className}>
            {children}
        </nav>);
    }
}


export default createComponentWithProxy(NavigationWrapperStyle,NavigationWrapper, ['innerRef'])