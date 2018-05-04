import React, {Component, Fragment} from 'react';
import {Container} from "../../../../blocks/container/index";

import {getTranslate, getActiveLanguage} from 'react-localize-redux';

import Button from '../../../../blocks/button/button';
import {Top} from "../../../../components/top/index";
import {Row} from "../../../../blocks/row/index";
import {Column} from "../../../../blocks/column/index";
import {TopLabel, TopLabelRow} from "../../../../components/topLabel/index";
import {DecorateDots} from "../../../../components/decorate/index";
import {Typography} from '../../../../blocks/typography/index';

import {connect} from "react-redux";

class AboutPage extends Component {

    static defaultProps = {
        content: [
            {content: `about_question_1_description`},
            {content: `about_question_2_description`}, 
            {content: `about_question_3_description`}, 
            {content: `about_question_4_description`}, 
            {content: `about_question_5_description`}, 
            {content: `about_question_6_description`}, 
            {content: `about_question_7_description`}, 
            {content: `about_question_8_description`},
        ]
    };
    
        render() {
            const {isActive} = this.state;
            const {translate} = this.props;
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
                    <Container maxWidth={'768px'}>
                        {
                            data.map((item, index) => (
                                <Row>
                                    <Typography as={'p'}>
                                        {item.content}
                                    </Typography>
                                    <DecorateDots/>
                                </Row>
                            ))
                        }
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
    