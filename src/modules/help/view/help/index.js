import React, {Component, Fragment} from 'react';
import {Container} from "../../../../blocks/container/index";
import {
    AccordionContent,
    AccordionItem,
    AccordionToggle,
    AccordionWrapper,
} from '../../../../blocks/accordion';

// import AccordionButton from './accordion_button';
// import AccordionHelpContent from './accordion-help_content';
// import AccordionItemWrapper from './accordion_item-wrapper';
import {getTranslate, getActiveLanguage} from 'react-localize-redux';

import Button from '../../../../blocks/button/button';
import {Top} from "../../../../components/top/index";
import {Row} from "../../../../blocks/row/index";
import {Column} from "../../../../blocks/column/index";
import {TopLabel, TopLabelRow} from "../../../../components/topLabel/index";
import {Wrapper} from "../../../../blocks/wrapper/index";
import {connect} from "react-redux";

class FAQPage extends Component {

    static defaultProps = {
        content: [
            {
                title: 'help_question_1_title',
                content: `help_question_1_description`
            }, {
                title: 'help_question_2_title',
                content: `help_question_2_description`
            }, {
                title: 'help_question_3_title',
                content: `help_question_3_description`
            }, {
                title: 'help_question_4_title',
                content: `help_question_4_description`
            }, {
                title: 'help_question_5_title',
                content: `help_question_5_description`
            }, {
                title: 'help_question_6_title',
                content: `help_question_6_description`
            }, {
                title: 'help_question_7_title',
                content: `help_question_7_description`
            }, {
                title: 'help_question_8_title',
                content: `help_question_8_description`
            }, {
                title: 'help_question_9_title',
                content: `help_question_9_description`
            }, {
                title: 'help_question_10_title',
                content: `help_question_10_description`
            }, {
                title: 'help_question_11_title',
                content: `help_question_11_description`
            }, {
                title: 'help_question_12_title',
                content: `help_question_12_description`
            },
        ]
    };

    render() {
        const {content,translate} = this.props;

        return (
            <Fragment>
                <Top>
                    {translate('help_help')}
                </Top>
                <Container>
                    <Row>
                        <Column>
                            <TopLabelRow>
                                <TopLabel isActive>
                                    {translate('help_faq')}
                                </TopLabel>
                            </TopLabelRow>
                        </Column>
                    </Row>
                </Container>
                <Container maxWidth={'768px'}>

                    {
                        content && content.map((item, index) => (
                            <AccordionItemWrapper key={`AccordionWrapper-${index}`}>
                                <AccordionWrapper >
                                    <AccordionItem>
                                        <AccordionToggle>
                                            <AccordionButton color={() => {
                                                if ((index + 1) % 3 === 0) {
                                                    return 'dark';
                                                } else if ((index + 1) % 2 === 0) {
                                                    return 'main';
                                                } else {
                                                    return 'light';
                                                }
                                            }} count={index + 1}>
                                                {translate(item.title)}
                                            </AccordionButton>
                                        </AccordionToggle>
                                        <AccordionContent>
                                            <AccordionHelpContent color={() => {
                                                if ((index + 1) % 3 === 0) {
                                                    return 'dark';
                                                } else if ((index + 1) % 2 === 0) {
                                                    return 'main';
                                                } else {
                                                    return 'light';
                                                }
                                            }}>
                                                {translate(item.content)}
                                            </AccordionHelpContent>
                                        </AccordionContent>
                                    </AccordionItem>
                                </AccordionWrapper>
                            </AccordionItemWrapper>))
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


export default connect(mapStateToProps)(FAQPage);


