import React, {Component, Fragment} from 'react';
import {Container}  from "../../../../blocks/container/index";
import Title      from "../../../../blocks/title/title";
import {Row}        from "../../../../blocks/row/index";
import {Column}     from "../../../../blocks/column/index";
import {Button}       from '../../../../blocks/button/index';
import {getTranslate, getActiveLanguage} from 'react-localize-redux';
import {connect} from "react-redux";

class About extends Component {


    render(){
        const {translate} = this.props;
        return (
            <Container>
                <Title as="h1">
                    lololo
                </Title>
                <Row>
                    <Column>
                        <Title as="h3">
                            lololo
                        </Title>
                        lololololololol
                    </Column>
                </Row>
            </Container>
        )
    }
}
const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(About);
