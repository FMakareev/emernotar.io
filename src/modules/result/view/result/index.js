import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';

import gql from 'graphql-tag';
import {graphql} from "react-apollo";
import qp from 'query-parse';
import {getTranslate,getActiveLanguage} from 'react-localize-redux';
import {connect} from "react-redux";
import {SuccessCreateCertificate} from "./successCreateCertificate";
import {PreLoader} from "../../../../components/preloader/index";
import {ErrorCreateCertificate} from "./errorCreateCertificate";

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
        this.createCertificateErrorHandler = this.createCertificateErrorHandler.bind(this);

        this.addEventListenerCloseWindow();
        console.log('run constructor...');
    }

    get initialState() {
        return {
            loading: true,
            error: false,
            redirect: false,
            createCertificate: false,
        }
    }

    componentWillMount() {
        console.log('componentWillMount;');
    }

    componentDidMount() {
        console.log('componentDidMount;');
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
            this.setState({
                loading: true,
            });
            data.variables.language = this.props.currentLanguage.toLowerCase();
            this.props.createCertificate(data)
                .then((response) => {
                    if (response.errors && response.errors.length) {
                        console.log(response.errors,response.errors.length);
                        this.setState({
                            loading: false,
                            error: this.createCertificateErrorHandler(response.errors[ 0 ].message,response.errors),
                        });

                    } else {
                        this.setState({
                            loading: false,
                        });
                    }
                    this.removeEventListenerCloseWindow();
                    // localStorage.clear();
                })
                .catch(error => {
                    this.setState({
                        loading: false,
                        error: this.createCertificateErrorHandler('NETWORK_ERROR',error),
                    });
                    this.removeEventListenerCloseWindow();
                    // localStorage.clear();
                });
        } else {
            this.removeEventListenerCloseWindow();

            this.setState({
                loading: false,
                error: this.createCertificateErrorHandler('UNKNOUN_ERROR','data.variables is empty'),
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

    /**
     * @param {string} type - const error type
     * @param {any} error - error message
     * @return {object} - объект с ключами локализации
     * @desc метод принимает константу ошибки и записывает в state данные для отображения ошибки
     * */
    createCertificateErrorHandler(type,error) {
        console.log('createCertificateErrorHandler - type: ',type);
        console.log('createCertificateErrorHandler - error: ',error);
        switch (type) {
            case('Payment error: Payment has been done already for this cart.'):
                console.log('PAYMENT_ERROR');
                return {
                    pageTitle: 'result_сongratulations',
                    title: 'result_file_notar',
                    description: 'result_description',
                    linkLabel: 'result_home',
                    linkHref: '/'
                };
            case('Timeouted notarization'):
                console.log('TIMEOUTED_NOTARIZATION');
                if (isBrowser) {
                    console.log('setTimeout run');
                    setTimeout(() => {
                        console.log('setTimeout');
                        window.location.reload()
                    },10000);
                }

                return {
                    pageTitle: 'home_error',
                    title: 'result_timeouted_notarization_title',
                    description: 'result_timeouted_notarization_description',
                    linkLabel: 'result_btn_page_reload',
                    linkHref: window.location.href,
                    onClick: () => {
                        window.location.reload()
                    }
                };
            case('NETWORK_ERROR'):
                console.log('NETWORK_ERROR');
                return {
                    pageTitle: 'home_error',
                    title: 'result_error_networkerror_title',
                    description: 'result_error_networkerror_description',
                    linkLabel: 'contact_our_contacts',
                    linkHref: '/contact'
                };
            default:
                console.log('UNKNOUN_ERROR');
                return {
                    pageTitle: 'home_error',
                    title: 'result_unknoun_error_title',
                    description: 'result_unknoun_error_description',
                    linkLabel: 'contact_our_contacts',
                    linkHref: '/contact',
                }
        }
    }

    render() {
        const {translate} = this.props;
        const {loading,error} = this.state;
        console.log(this.props);

        return (
            <Fragment>
                {
                    !loading &&
                    <SuccessCreateCertificate {...error} translate={translate}/>
                }
                {/*{*/}
                {/*!loading && error &&*/}
                {/*<ErrorCreateCertificate {...error} translate={translate}/>*/}
                {/*}*/}
                {
                    loading &&
                    <PreLoader backdrop/>
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
