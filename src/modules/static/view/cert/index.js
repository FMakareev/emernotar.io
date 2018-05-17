import React,{Component,Fragment} from 'react';
import {connect} from "react-fela";
import {getTranslate,getActiveLanguage} from 'react-localize-redux';
import {connect as ReduxConnect} from "react-redux";
import {Typography} from "../../../../blocks/typography/index";
import {TopLabelRow,TopLabel} from '../../../../components/topLabel/index';
import IconLogoEmerNatar from '../../../../components/icons/icon_logo';
import gql from "graphql-tag";
import {Query} from "react-apollo";
import {changeTranslate} from "../../../../store/reducers/localization/actions";
import {Store} from '../../../../store';
import {graphql} from "react-apollo";

const certificateItem = gql`
  query($emerhash: String) {
        certificateItem(emerhash:$emerhash){
            name
            fileName
            notarizationCreateTime
            submittingDate
            submittingExpiration
            ownerEmail
            emerhash
            idTransaction
            blockChainAddress
            serviceName
            paymentId
            PayerID
        }
  }
`;

// const name = '{name}';
// const fileName = '{fileName}';
// const notarizationCreateTime = '{notarizationCreateTime}';
// const submittingDate = '{submittingDate}';
// const submittingExpiration = '{submittingExpiration}';
// const ownerEmail = '{ownerEmail}';
// const emerhash = '{emerhash}';
// const idTransaction = '{idTransaction}';
// const blockChainAddress = '{blockChainAddress}';
// const serviceName = '{serviceName}';

class Cert extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        const {translate,styles,loading,error,data,setActiveLanguage,currentLanguage} = this.props;
        console.log('CERTIFICAT TEMPLATE: ', this.props)
        if (loading) {
            console.log('loading...',loading);
            return null;
        }
        if (error) {
            console.error('ERROR: ',error);
            return (<Typography
                as={'p'}
                size={'medium'}
                color={'error'}
                bright={'dark'}
                fontWeight={'bold'}
                textAlign={'center'}
            >
                {translate('home_network_error')}
            </Typography>)
        }
        if (data && data.certificateItem) {
            const {
                name,
                fileName,
                notarizationCreateTime,
                submittingDate,
                submittingExpiration,
                ownerEmail,
                emerhash,
                idTransaction,
                blockChainAddress,
                serviceName,
                paymentId,
                PayerID,

            } = data.certificateItem;
            // const newLang = 'RU';
            // if(newLang !== currentLanguage) {
            //     setActiveLanguage(newLang);
            // }
            return (
                <div style={{
                    height: '100vh',width: '100%',display: 'flex',flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <div>
                        <div className={styles.top}>
                            <IconLogoEmerNatar/>
                        </div>

                        <div>
                            <Typography as={"h1"} size={'large'} color={'primary'} bright={'dark'}
                                        fontWeight={'bold'}
                                        textAlign={'center'}
                                        textTransform={'uppercase'}
                                        styles={{fontSize: '3rem',lineHeight: '5rem'}}>
                                Certificate
                            </Typography>
                        </div>
                        <TopLabelRow>
                            <TopLabel isActive styles={{transform: 'none',padding: '1rem',width: '40%'}}>
                                {translate('static_info_transactions')}:
                                <Typography as={'p'}>
                                    {translate('static_date_entry')}: {submittingDate} <br/>
                                    {translate('static_transaction_id')}: <span
                                    style={{wordWrap: 'break-word'}}>
                                                {idTransaction}
                                            </span> <br/>
                                    {translate('static_your_address')}: {blockChainAddress} <br/>
                                </Typography>
                            </TopLabel>
                            <TopLabel isActive styles={{transform: 'none',padding: '1rem',width: '40%'}}>
                                {translate('static_info_cert')}:
                                <Typography as={'p'} styles={{lineHeight: '2rem'}}>
                                    {translate('static_notarization_date')}: {notarizationCreateTime} <br/>
                                    {translate('static_owner')}: {ownerEmail} <br/>
                                    {translate('static_validity_period')}: to {submittingExpiration}

                                    <br/>
                                    {translate('static_service')}: {serviceName} <br/>
                                </Typography>
                            </TopLabel>
                        </TopLabelRow>
                    </div>
                    <div style={{margin: '0 0 -9px 0'}}>
                        <div className={styles.topFooter}>
                            <Typography as={"p"} size={'small'} textAlign={'center'}>
                                {translate('static_hash_sum')}: <span style={{wordWrap: 'break-word'}}>
                                                {name}
                                            </span> <br/>
                                {translate('static_file_name')}:{fileName}
                            </Typography>
                        </div>
                        <div className={styles.footer}>
                            <Typography as={"p"} size={'small'} bright={'light'} fontWeight={'bold'}
                                        textAlign={'center'}>
                                EMERNOTAR.IO &copy; 2018
                            </Typography>
                        </div>
                    </div>
                </div>
            )
        }
        return null;
    }
}

const style = ({theme,marginBottom,paddingBottom}) => {
    return {
        wrapper: {},
        top: {
            // minHeight: '10rem',
            padding: '1px',
            verticalAlign: 'middle',
            position: 'relative',
            ...theme.top,
        },
        circle: {
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            textAlign: 'center',
            ...theme.top,
            textDecoration: 'none !important',
            padding: '0.1rem',
            margin: '0.1rem',
        },
        topFooter: {
            // minHeight: '10rem',
            padding: '1px',
            verticalAlign: 'middle',
            position: 'relative',
            textAlign: 'center',
            color: 'black',
            ...theme.top,
            margin: '0',
        },
        footer: {
            minHeight: '5rem',
            height: 'auto',
            verticalAlign: 'middle',
            position: 'relative',
            ...theme.footer,
            borderTop: 'none',
            margin: '0',
            padding: '1rem 1rem 2rem 1rem',

        },
    }
};

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code,
});

Cert = connect(style)(Cert);

Cert = graphql(certificateItem,{

    options: (ownProps) => {
        console.log('ownProps:',ownProps);
        return {
            variables: {
                emerhash: ownProps.emerhash
            }
        }
    },
    mutate: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
    }
})(Cert);

Cert = ReduxConnect(
    mapStateToProps,
    dispatch => ({
        setActiveLanguage: (value) => {
            dispatch(changeTranslate(Store.getState(),value))
        }
    })
)(Cert);

export default Cert;