import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {TabWrapper} from "./tab_wrapper";
import {TabItem} from "./tabs_tab-item";
import {TabPanel} from "./tab_panel";
import {TabList} from "./tab_list";
// import './tabs.scss';

const data = [
    {
        title: 'tab 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Debitis dolore exercitationem facilis neque obcaecati provident quis reiciendis, rem! Impedit, suscipit, velit! Error inventore nesciunt nihil nobis obcaecati perferendis quaerat, quo.'
    }, {
        title: 'tab 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolore exercitationem facilis neque obcaecati provident quis reiciendis, rem! Impedit, suscipit, velit! Error inventore nesciunt nihil nobis obcaecati perferendis quaerat, quo.'
    }, {
        title: 'tab 3',
        content: 'Lorem ipsum dolor sit amet, dit, suscipit, velit! Error inventi perferendis quaerat, quo.'
    }
];


export class Tabs extends Component {

    static propTypes = {

    };
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.toggleTab = this.toggleTab.bind(this);
    }

    get initialState() {
        return {
            activeTab: 0
        }
    }

    toggleTab(index) {
        this.setState({activeTab: index})
    }

    render() {
        const {activeTab} = this.state;
        return (
            <TabWrapper>
                <TabList>
                    {
                        data.map((item, index) =>
                            <TabItem activeTab={activeTab} key={index.toString()} index={index} toggleTab={this.toggleTab}>
                                {item.title}
                            </TabItem>)
                    }
                </TabList>

                <TabPanel activeTab={activeTab}>
                    {
                        data.map((item, index) => <div key={index}>{item.content}</div>)
                    }
                </TabPanel>

            </TabWrapper>
        )
    }
}