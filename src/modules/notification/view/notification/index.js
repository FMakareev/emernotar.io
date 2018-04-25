import React, {Component, Fragment} from 'react';
import {Container}  from "../../../../blocks/container/index";
import Title      from "../../../../blocks/title/title";
import {Row}        from "../../../../blocks/row/index";
import {Column}     from "../../../../blocks/column/index";
import {Button}       from '../../../../blocks/button/index';
import {getTranslate, getActiveLanguage} from 'react-localize-redux';
import {connect} from "react-redux";

class NotificationPage extends Component {


    render(){
        const {translate} = this.props;
        return (
            <Container>
                <Title as="h1">
                    {translate('notification_record_added')}
                </Title>
                <Row>
                    <Column>
                        <Title as="h3">
                            {translate('notification_notar_info')}
                        </Title>
                        <ul>
                           <li>
                               <b>{translate('notification_owner')}:</b> Кто то
                           </li>
                           <li>
                               <b>{translate('notification_date')}</b> 00.00.0000
                           </li>
                        </ul>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Button variant="raised" color="secondary">
                            {translate('notification_view_cert')}
                        </Button>
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


export default connect(mapStateToProps)(NotificationPage);
