import React, {Component, Fragment} from 'react';
import Title from "../../../../blocks/title/title";
import {Container} from "../../../../blocks/container/index";
import {Row} from "../../../../blocks/row/index";
import {Column} from "../../../../blocks/column/index";
import {FormFeedback} from "../../../../components/form/index";
import {Top} from "../../../../components/top/index";
import Contacts from "./contacts";
import {TopLabel, TopLabelRow} from "../../../../components/topLabel/index";
import {connect} from "react-redux";
import {getTranslate, getActiveLanguage} from 'react-localize-redux';


class ContactPage extends Component {


    render() {
        const {translate} = this.props;
        return (
            <Fragment>
                <Top>
                    {translate('contact_contacts')}
                </Top>
                <Container>
                    <Row>
                        <Column>
                            <TopLabelRow >
                                {/*<TopLabel isActive>*/}
                                    {/*{translate('contact_our_contacts')}*/}
                                {/*</TopLabel>*/}
                                <TopLabel isActive>
                                    {translate('contact_ask_a_question')}
                                </TopLabel>
                            </TopLabelRow>
                        </Column>
                    </Row>
                </Container>

                <Container>
                    <Row justifyContent={'center'}>
                        {/*<Column grid={[[700, 50, '%']]}>*/}
                            {/*<Contacts/>*/}
                        {/*</Column>*/}
                        <Column grid={[[700, 50, '%']]}>
                            <FormFeedback/>
                        </Column>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(ContactPage);

