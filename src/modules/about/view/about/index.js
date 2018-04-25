import React, {Component, Fragment} from 'react';
import Title            from "../../../../blocks/title/title";
import {Container}      from "../../../../blocks/container/index";
import {Row}            from "../../../../blocks/row/index";
import {Column}         from "../../../../blocks/column/index";
import {FormFeedback}   from "../../../../components/form/index";
import {Top}            from "../../../../components/top/index";
import Notarize         from "./about-notarize";
import Verify from './about-verify';
import {TopLabel, TopLabelRow} from "../../../../components/topLabel/index";
import {TabList} from '../../../../blocks/tabs/tab_list';
import {TabItem} from '../../../../blocks/tabs/tabs_tab-item';
import {TabPanel} from '../../../../blocks/tabs/tab_panel'
import {withRouter} from "react-router-dom";
import {getTranslate, getActiveLanguage} from 'react-localize-redux';
import {connect} from "react-redux";

const data = [
    {
        title: 'about_notarize',
        content: <Notarize/>
    }, {
        title: 'about_verify',
        content: <Verify/>
    }
];

class AboutPage extends Component {

    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.toggleTab = this.toggleTab.bind(this);
    }

    get initialState() {
        return {
            isActive: 0
        }
    }

    toggleTab(index) {
        console.log(index);
        this.setState({isActive: index})
    }

    render() {
        const {isActive} = this.state;
        const {translate} = this.props;
        return (
            <Fragment>
                <Top>
                    {translate('about_aboutus')}
                </Top>
                <Container>
                    <TopLabelRow>
                        {
                            data.map((item, index) =>
                                <TopLabel isActive={index === isActive} key={index.toString()} index={index} toggleTab={()=>{this.toggleTab(index)}}>
                                    {translate(item.title)}
                                </TopLabel>)
                        }
                    </TopLabelRow>
                    <TabPanel isActive={isActive}>
                        {
                            data.map((item, index) => <div key={index}>{item.content}</div>)
                        }
                    </TabPanel>
                </Container>
            </Fragment>
        )
    }
};

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(AboutPage);
