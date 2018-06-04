import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';

import gql from 'graphql-tag';
import {graphql} from "react-apollo";
import qp from 'query-parse';
import {Container} from "../../../../blocks/container/index";
import Button from '../../../../blocks/button/button';
import {Top} from "../../../../components/top/index";
import {Row} from "../../../../blocks/row/index";
import {TopLabel,TopLabelRow} from "../../../../components/topLabel/index";
import {Typography} from '../../../../blocks/typography/index';
import {Link,Redirect} from 'react-router-dom';
import {Image} from "../../../../blocks/image/index";
import {getTranslate,getActiveLanguage} from 'react-localize-redux';
import {connect} from "react-redux";
import iconHome from '../../../../assets/icons/icon_home.svg';

const createCertificate = gql`mutation createCertificate(
    $name: String!,
    $notarizationCreateTime: String,
    $paymentId: String,
    $PayerID: String,
    $language: String,
    ){
        createCertificate(
            name:$name,
            notarizationCreateTime: $notarizationCreateTime,
            paymentId: $paymentId,
            PayerID: $PayerID,
            language: $language,
        ) {
            name
            notarizationCreateTime
            paymentId
            PayerID
            blockChainAddress
        }
    }`;


class Result extends Component {
    static propTypes = {
        /** @property {func} translate   */
        translate: PropTypes.func
    }

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.createCertificate = this.createCertificate.bind(this);
        this.createCertificateData = this.createCertificateData.bind(this);
        this.addEventListenerCloseWindow = this.addEventListenerCloseWindow.bind(this);
        this.removeEventListenerCloseWindow = this.removeEventListenerCloseWindow.bind(this);

        this.addEventListenerCloseWindow();
    }

    get initialState() {
        return {
            preLoader: true,
            error: false,
            redirect: false,
        }
    }

    componentDidMount() {
        console.log('run componentDidMount...');
        this.createCertificate();
    }

    /**
     * @description создание сертификата
     * */
    createCertificate() {
        console.log('run createCertificate...');
        if (!isBrowser) return null;

        const data = {
            variables: this.createCertificateData(),
        };
        /**
         * @description создание сертификата
         * */
        if (data.variables) {
            data.variables.language = this.props.currentLanguage.toLowerCase();
            this.props.createCertificate(data)
                .then((response) => {
                    if (response.errors && response.errors.length) {
                        console.log(response.errors, response.errors.length);
                        alert('ERROR!: response.errors - ' + response.errors[0]);
                        this.setState({
                            preLoader: false,
                            // redirect: '/404'
                        });
                    } else {
                        this.setState({preLoader: false});
                    }
                    this.removeEventListenerCloseWindow();

                    localStorage.clear();
                })
                .catch((err) => {
                    console.error(err);
                    alert('ERROR!: catch - '+ err);
                    this.setState({
                        preLoader: false,
                        // redirect: '/404'
                    });
                    this.removeEventListenerCloseWindow();

                    localStorage.clear();
                });
        } else {
            console.log('data.variables is empty');
            alert('data.variables is empty');
            this.setState({
                preLoader: false,
                // redirect: '/404'
            });
        }
    }

    /**
     * @description создание объекта с данными для ссертификата
     * */
    createCertificateData() {
        if (!isBrowser) return null;
        const url = qp.toObject(window.location.search.substring(1));

        /**
         * @description проверка query параметров
         * */
        if (url && Object.getOwnPropertyNames(url).length) {
            const name = localStorage.getItem('fileHash');
            const notarizationCreateTime = localStorage.getItem('timestamp'); //timestam from notar
            const paymentId = url.paymentId;
            const PayerID = url.PayerID;

            if (!name) return null;
            if (!notarizationCreateTime) return null;

            return {name,notarizationCreateTime,paymentId,PayerID};
        } else {
            return null
        }
    }

    /**
     * @description callback функция для создания confirm окна блокирующего закрытие окна браузера
     * */
    confirmationMessageCloseWindow(e) {
        let confirmationMessage = "";
        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
    }

    /**
     * @description метод добавляет обработчик события закрытия окна
     * */
    addEventListenerCloseWindow() {
        if (!isBrowser) return null;
        console.log('run addEventListenerCloseWindow');
        window.addEventListener("beforeunload",this.confirmationMessageCloseWindow);
    }

    /**
     * @description метод убирает обработчик события закрытия окна
     * */
    removeEventListenerCloseWindow() {
        if (!isBrowser) return null;
        console.log('run removeEventListenerCloseWindow');
        window.removeEventListener("beforeunload",this.confirmationMessageCloseWindow);
    }


    render() {
        const {translate} = this.props;
        const {preLoader,redirect} = this.state;
        if (redirect) {
            return <Redirect to={redirect}/>
        }
        return (
            <Fragment>
                <Top paddingBottom={'7rem'}>
                    {translate('result_сongratulations')}
                </Top>
                <Container>
                    <TopLabelRow>
                        <TopLabel isActive>
                            <Typography styles={{padding: '0.5rem'}} as={'h2'} size={'large'}
                                fontWeight={'bold'} textAlign={'center'}
                                textTransform={'uppercase'}
                                color={'secondary'} bright={'contrastText'}>  
                                    {translate('result_file_notar')}
                            </Typography>
                            <Typography styles={{padding: '0.5rem',maxWidth: '30rem'}} as={'p'} textAlign={'center'}
                                color={'secondary'} bright={'contrastText'}>
                                {translate('result_description')}
                            </Typography>
                            <Row>
                                <Link to='/' style={{textDecoration: 'none',display: 'block',textAlign: 'center'}}>
                                    <Button styles={{textDecoration: 'none'}} size={'medium'} variant={'raised'} color={'primary'}>
                                        <Image src={iconHome} styles={{padding: '0.2rem'}}/>
                                        <Typography as={'p'} size={'small'} color={'secondary'} bright={'contrastText'}>
                                        {translate('result_home')}
                                        </Typography>
                                    </Button>
                                </Link>
                            </Row>
                        </TopLabel>
                    </TopLabelRow>
                </Container>
            </Fragment>
        )
    }
}


Result = graphql(createCertificate,{
    name: 'createCertificate',
    mutate: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
    }
})(Result);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(Result);
