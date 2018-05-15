import React,{Component,Fragment} from 'react';
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
import {PreLoader} from "../../../../components/preloader/index";

const createCertificate = gql`mutation createCertificate(
    $name: String!,
    $notarizationDate: String,
    $paymentId: String,
    $PayerID: String,
    ){
        createCertificate(
            name:$name,
            notarizationDate: $notarizationDate,
            paymentId: $paymentId,
            PayerID: $PayerID,
        ) {
            name
            notarizationDate
            paymentId
            PayerID
            emerhash
            blockChainAddress
        }
    }`;


class Result extends Component {

    static propTypes = {};

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
        if (!__isBrowser__) return null;

        const data = {
            variables: this.createCertificateData(),
        };
        /**
         * @description создание сертификата
         * */
        if (data.variables) {
            this.props.createCertificate(data)
                .then((response) => {
                    if (response.errors && response.errors.length) {
                        this.setState({
                            preLoader: false,
                            redirect: '/404'
                        });
                    } else {
                        this.setState({preLoader: false});
                    }
                    this.removeEventListenerCloseWindow();

                    localStorage.clear();
                })
                .catch((err) => {
                    this.setState({
                        preLoader: false,
                        redirect: '/404'
                    });
                    this.removeEventListenerCloseWindow();

                    localStorage.clear();
                    console.log(err);
                });
        } else {
            this.setState({
                preLoader: false,
                redirect: '/404'
            });
        }
    }

    /**
     * @description создание объекта с данными для ссертификата
     * */
    createCertificateData() {
        if (!__isBrowser__) return null;
        const url = qp.toObject(window.location.search.substring(1));

        /**
         * @description проверка query параметров
         * */
        if (url && Object.getOwnPropertyNames(url).length) {
            const name = localStorage.getItem('fileHash');
            const notarizationDate = localStorage.getItem('timestamp'); //timestam from notar
            const paymentId = url.paymentId;
            const PayerID = url.PayerID;

            if (!name) return null;
            if (!notarizationDate) return null;

            return {name,notarizationDate,paymentId,PayerID};
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
        if (!__isBrowser__) return null;
        console.log('run addEventListenerCloseWindow');
        window.addEventListener("beforeunload",this.confirmationMessageCloseWindow);
    }

    /**
     * @description метод убирает обработчик события закрытия окна
     * */
    removeEventListenerCloseWindow() {
        if (!__isBrowser__) return null;
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
                {
                    preLoader && <PreLoader backdrop/>
                }
                {
                    !preLoader &&
                    <Fragment>
                        <Top paddingBottom={'7rem'}>
                            {translate('result_сongratulations')}
                        </Top>
                        <Container>
                            <TopLabelRow>


                                <TopLabel as="div" isActive>
                                    <Typography styles={{padding: '0.5rem'}} as={'h2'} size={'large'}
                                                fontWeight={'bold'} textAlign={'center'}
                                                textTransform={'uppercase'}
                                                color={'secondary'} bright={'contrastText'}>
                                        {translate('result_file_notar')}
                                    </Typography>
                                    <Typography styles={{padding: '0.5rem',maxWidth: '30rem'}} as={'p'}
                                                textAlign={'center'}
                                                color={'secondary'} bright={'contrastText'}>
                                        {translate('result_description')}
                                    </Typography>
                                    <Row>
                                        <Link to='/'
                                              style={{textDecoration: 'none',display: 'block',textAlign: 'center'}}>
                                            <Button styles={{textDecoration: 'none'}} size={'medium'} variant={'raised'}
                                                    color={'primary'}>
                                                <Image src={iconHome} styles={{padding: '0.2rem'}}/>
                                                <Typography as={'p'} size={'small'} color={'secondary'}
                                                            bright={'contrastText'}>
                                                    {translate('result_home')}
                                                </Typography>
                                            </Button>
                                        </Link>
                                    </Row>
                                </TopLabel>

                            </TopLabelRow>
                        </Container>
                    </Fragment>
                }
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
