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
     * @description Scope data from ReduxForm and lockalstorage and send mutation Create Certificate to backend
     * @returns Status answer. 200 Ok or some else
     * @memberof Result
     */
    createCertificate() {
        console.log('run createCertificate...');
        if (!process.env.__isBrowser__) return null;
        /**
         * @description Create object to send
         */
        const name = localStorage.getItem('fileHash');
        const notarizationDate = Number.parseInt(localStorage.getItem('timestamp')); //timestam from notar
        const url = qp.toObject(window.location.search.substring(1));
        const paymentId = url.paymentId;
        const PayerID = url.PayerID;
        const obj = {name, notarizationDate, paymentId, PayerID};
        const data = {variables: obj};
        /**
         * @description Sent data to backend and handle фтыцук
         */
        this.props.createCertificate(data).then((res)=>{
            console.log(res);
            localStorage.clear();
        }).catch((err) => {
            console.log(err);
        });
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
