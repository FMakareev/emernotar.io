import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import throttle from 'lodash/throttle';
import {Link} from "../link/Link";
import NavigationWrapper from "./navigation_wrapper";
import NavigationList from "./navigation_list";
import NavigationItem from "./navigation_item";
import NavigationDropDawn from "./navigation_drop-dawn";
import NavigationLink from "./navigation_link";
import {createComponentWithProxy} from "react-fela";

class NavigationPriority extends Component {

    constructor(props) {
        super(props);
        this.state = {
            priorityItems: [],
            moreItems: []
        };
        this.fullNavArray = this.props.navigationItems;
        this.updateNavigation = this.updateNavigation.bind(this);
        // this.toggleDropDown = this.toggleDropDown.bind(this);
    }

    static propTypes = {
        name: PropTypes.string,
        navigationItems: PropTypes.array,
        minItemsInMenuArray: PropTypes.number
    };

    static defaultProps = {};

    componentWillMount() {
        this.setState({
            priorityItems: this.props.navigationItems
        })
    }

    componentDidMount() {
        const children = ReactDOM.findDOMNode(this.refs.navigation).children;
        this.widthsArray = Array.from(children).map(item => item.getBoundingClientRect().width);
        this.updateNavigation();
        window.addEventListener('resize', throttle(this.updateNavigation), 100);
    }


    updateNavigation() {
        console.log(document.getElementById('navigation-priotiry_wrapper'));
        this.outerWidth = ReactDOM.findDOMNode(this.refs.NavigationWrapper).getBoundingClientRect().width;
        this.moreMenu = this.refs.moreMenu ? ReactDOM.findDOMNode(this.refs.moreMenu).getBoundingClientRect().width : 0;

        const arrayAmount = this.howManyItemsInMenuArray(this.widthsArray, this.outerWidth, this.moreMenu, this.props.minItemsInMenuArray);
        const navItemsCopy = this.fullNavArray;
        const priorityItems = navItemsCopy.slice(0, arrayAmount);

        this.setState({
            priorityItems: priorityItems,
            moreItems: priorityItems.length !== navItemsCopy.length ? navItemsCopy.slice(arrayAmount, navItemsCopy.length) : []
        });
    }

    howManyItemsInMenuArray(array, outerWidth, initialWidth, minimumNumberInNav) {
        console.log(array, outerWidth, initialWidth, minimumNumberInNav);
        let total = (initialWidth * 1.75);
        for (let i = 0; i < array.length; i++) {
            if (total + array[i] > outerWidth) {
                console.log(i);
                return i < minimumNumberInNav ? minimumNumberInNav : i;
            } else {
                total += array[i];
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateNavigation());
    }

    // @deprecated
    // toggleDropDown(children, event) {
    //     console.log(children, event);
    //     const dropDown = this.refs[children].refs['NavigationDropDawn'];
    //     if(dropDown.classList.contains('navigation_drop-dawn--active')) {
    //         dropDown.classList.remove('navigation_drop-dawn--active');
    //     } else {
    //         dropDown.classList.add('navigation_drop-dawn--active')      ;
    //     }
    // }


    getRef(ref){
        console.log(ref);
    }

    render() {
        const {moreItems, priorityItems} = this.state;

        console.log(this);

        return (
            <NavigationWrapper getRef={this.getRef} ref="NavigationWrapper">
                <NavigationList key={'NavigationList1'} ref="navigation"  >
                    {
                        priorityItems.map((item, index) => {
                            // if (item.hasOwnProperty('children') && item.children.length > 1) {
                            //     return (<NavigationItem key={`NavigationItem-${index}`}>
                            //
                            //         <Link className="navigation_link" to={item.path}>
                            //             {item.title}
                            //         </Link>
                            //
                            //         <NavigationDropDawn>
                            //             {
                            //                 item.children.map((item, index) =>
                            //                     <NavigationItem key={`NavigationItem-${index}`} mods={['block']}>
                            //                         <NavigationLink to={item.path}>
                            //                             {item.title}
                            //                         </NavigationLink>
                            //                     </NavigationItem>
                            //                 )
                            //             }
                            //         </NavigationDropDawn>
                            //     </NavigationItem>)
                            // } else {
                                return (
                                    <NavigationItem key={`NavigationItem-${index}`}>
                                        <NavigationLink to={item.path}>
                                            {item.title}
                                        </NavigationLink>
                                    </NavigationItem>
                                )
                            // }
                        })
                    }
                </NavigationList>

                {
                    moreItems.length > 0 && <NavigationList key={'NavigationList2'} ref="moreMenu">
                        <NavigationItem>
                            <NavigationLink>
                                ...more
                            </NavigationLink>
                            <NavigationDropDawn ref="moreNav">
                                {
                                    moreItems.map((item, index) =>
                                        <NavigationItem key={`moreItems-${index}`} mods={['block']}>
                                            <NavigationLink to={item.path}>
                                                {item.title}
                                            </NavigationLink>
                                        </NavigationItem>
                                    )
                                }
                            </NavigationDropDawn>
                        </NavigationItem>
                    </NavigationList>
                }
            </NavigationWrapper>
        )
    }
}

export default NavigationPriority;