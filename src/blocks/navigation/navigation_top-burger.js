import React, {Component} from 'react';
import NavigationWrapper from "./navigation_wrapper";
import NavigationList from "./navigation_list";
import NavigationItem from "./navigation_item";
import NavigationLink from "./navigation_link";
import LanguageSwitcher from '../language-switcher/language-switcher';
import {getTranslate, getActiveLanguage} from 'react-localize-redux';
import {connect} from "react-redux";

/*
*TODO прокидывать модули не статично
*/

class NavigationTopBurger extends Component {

    static propTypes = {};

    static defaultProps = {
        navigationItems: [
        // ],
            {
                title: 'home_navigation_name',
                path: '/',
            },
            {
                title: 'about_navigation_name',
                path: '/about'
            },
            {
                title: 'help_navigation_name',
                path: '/help'
            },
            {
                title: 'contact_navigation_name',
                path: '/contact'
            }
        ],
    };


    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        const {navigationItems, translate} = this.props;

        return (
            <NavigationWrapper ref="NavigationWrapper">
                <button>open</button>
                <NavigationList key={'NavigationList1'} ref="navigation">
                    {
                        navigationItems.map((item, index) => <NavigationItem key={`NavigationTopBurger-${index}`}>
                            <NavigationLink to={item.path}>
                                {translate(item.title)}
                            </NavigationLink>
                        </NavigationItem>)
                    }
                    <NavigationItem>
                        <LanguageSwitcher/>
                    </NavigationItem>
                </NavigationList>
            </NavigationWrapper>
        )
    }
}


const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

export default connect(mapStateToProps)(NavigationTopBurger);
