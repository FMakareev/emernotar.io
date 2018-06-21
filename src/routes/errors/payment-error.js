import React,{Component,Fragment} from 'react';
import {getTranslate,getActiveLanguage} from 'react-localize-redux';
import {connect as ReduxConnect} from "react-redux";

import {Container} from "../../blocks/container/index";
import {Top} from "../../components/top/index";
import {TopLabel,TopLabelRow} from "../../components/topLabel/index";
import {Typography} from '../../blocks/typography/index';
import iconClose from '../../assets/icons/icon_close.svg';
import {Image} from "../../blocks/image/index";

class PaymentError extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get    initialState() {
        return {}
    }

    render() {
        const {translate} = this.props;

        return (
            <Fragment>
                <Top wrapperStyles={{
                    paddingBottom: '19rem',
                    '@media(min-width: 768px )':{
                        paddingBottom: '11rem',
                    }
                }}>
                    {translate('home_error_payment_pagetitle')}
                </Top>
                <Container>

                    <TopLabelRow>
                        <TopLabel isActive>
                            <Image
                                src={iconClose}
                            />
                            <Typography styles={{padding: '2rem',maxWidth: '700px'}} as={'h2'} size={'large'}
                                        fontWeight={'bold'} textAlign={'center'}
                                        textTransform={'uppercase'}
                                        color={'secondary'} bright={'contrastText'}>
                                {translate('home_error_payment_description')}
                            </Typography>
                        </TopLabel>
                    </TopLabelRow>
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code,
});

PaymentError = ReduxConnect(mapStateToProps)(PaymentError);

export default PaymentError