import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy} from "react-fela";
import {} from "./navigation_sidebar-bottom";
import {IconBurgerMenuClose, IconBurgerMenuOpen, IconMessage, IconPhone, IconVK} from "../icons/index";
import {LanguageSwitcher} from "../language-switcher/index";
import {
    NavigationSidebarDrawer, NavigationSidebarMenu, NavigationSidebarBottom, NavigationSidebarTop,
    NavigationSidebarFeedback
} from "./index";
import {Button} from "../../blocks/button/index";

const NavigationSidebarStyle = ({...props, theme}) => {

    return {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        '-ms-flex-align': 'center',
        '-ms-flex-pack': 'center',
        padding: '1.25rem',
        minHeight: '100%',
    }
};

class NavigationSidebarWrapper extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {
            toggleMenu: false,
            toggleFeedback: false,
        }
    }

    render() {
        const {className} = this.props;
        const {toggleMenu, toggleFeedback} = this.state;
        return (
            <div className={className}>
                <NavigationSidebarTop>
                    <Button onClick={() => {
                        console.log('toggleMenu', toggleMenu);
                        this.setState({toggleMenu: !toggleMenu});
                        if (toggleFeedback) {
                            this.setState({toggleFeedback: !toggleFeedback});
                        }
                    }}>
                        {
                            toggleMenu && <IconBurgerMenuClose/>
                        }
                        {
                            !toggleMenu && <IconBurgerMenuOpen/>
                        }


                    </Button>
                </NavigationSidebarTop>
                <NavigationSidebarBottom>
                    <Button onClick={() => {
                        this.setState({toggleFeedback: !toggleFeedback});
                        if (toggleMenu) {
                            this.setState({toggleMenu: !toggleMenu});
                        }
                    }}>
                        <IconPhone/>
                    </Button>
                    <a href="#!">
                        <IconMessage/>
                    </a>
                    <a href="#!">
                        <IconVK/>
                    </a>

                    <LanguageSwitcher/>
                </NavigationSidebarBottom>

                <NavigationSidebarDrawer onClose={() => {this.setState({toggleMenu: false})}} toggleMenu={toggleMenu}>
                    <NavigationSidebarMenu/>
                </NavigationSidebarDrawer>
                <NavigationSidebarDrawer onClose={() => {this.setState({toggleFeedback: false})}} toggleMenu={toggleFeedback}>
                    <NavigationSidebarFeedback/>
                </NavigationSidebarDrawer>


            </div>
        )
    }
}

export default createComponentWithProxy(NavigationSidebarStyle, NavigationSidebarWrapper)