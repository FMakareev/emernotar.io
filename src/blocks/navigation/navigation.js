import React, {Component} from 'react';
import NavigationTopBurger from "./navigation_top-burger";
import {createComponentWithProxy} from 'react-fela'

const NavigationStyle = () => ({
    padding: '0',
    margin: '0',
})

class Navigation extends Component {
    static propTypes = {}

    static defaultProps = {}


    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {

        return (<NavigationTopBurger/>)
    }
}

export default createComponentWithProxy(NavigationStyle, Navigation)