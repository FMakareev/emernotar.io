import React, {Component, Fragment} from 'react';
import {Container} from "../../../../blocks/container/index";

import {getTranslate, getActiveLanguage} from 'react-localize-redux';

import {Top} from "../../../../components/top/index";
import {Row} from "../../../../blocks/row/index";
import {Column} from "../../../../blocks/column/index";
import {TopLabel, TopLabelRow} from "../../../../components/topLabel/index";
import {connect} from "react-redux";
import {Typography} from "../../../../blocks/typography/index";
import {DecorateDots} from "../../../../components/decorate/index";

class AboutPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {content: 'about_question_1_description'},
                {content: `about_question_2_description`},
                {content: `about_question_3_description`},
                {content: `about_question_4_description`},
                {content: `about_question_5_description`},
                {content: `about_question_6_description`},
                {content: `about_question_7_description`},
                {content: `about_question_8_description`},
            ]
        };
    };

    static defaultProps = {}

    render() {
        const {translate} = this.props;
        const {data} = this.state;
        return (
            <Fragment>
                <Top>
                    {translate('about_aboutus')}
                </Top>
                <Container>
                    <Row>
                        <Column>
                            <TopLabelRow>
                                <TopLabel isActive>
                                    {translate('about_aboutus')}
                                </TopLabel>
                            </TopLabelRow>
                        </Column>
                    </Row>
                </Container>
                <Container styles={{marginBottom: '3rem', textAlign: 'center'}} maxWidth={'768px'}>
                    {
                        data && data.map((item, index) => (
                            <Row key={`AccordionWrapper-${index}`}>
                                <Column>
                                    <Typography textAlign={'center'} as={'p'}>
                                        {translate(item.content)}
                                    </Typography>
                                    <DecorateDots/>
                                </Column>
                            </Row>
                        ))
                    }
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(AboutPage);