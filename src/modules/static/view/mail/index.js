import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect as FelaConnect} from "react-fela";
import {getTranslate,getActiveLanguage} from 'react-localize-redux';
import {connect as ReduxConnect} from "react-redux";

import {Typography} from "../../../../blocks/typography/index";
import {TopLabel} from '../../../../components/topLabel/index';
import {Button} from '../../../../blocks/button/index';
import {changeTranslate} from "../../../../store/reducers/localization/actions";
import {Store} from '../../../../store';
import CALogo from './ca_logo';
import {Image} from "../../../../blocks/image/index";

import logoImage from '../../../../../image/email_logo.jpg';

const name = '{name}';
const fileName = '{fileName}';
const notarizationCreateTime = '{notarizationCreateTime}';
const submittingDate = '{submittingDate}';
const submittingExpiration = '{submittingExpiration}';
const ownerEmail = '{ownerEmail}';
const emerhash = '{emerhash}';
const idTransaction = '{idTransaction}';
const blockChainAddress = '{blockChainAddress}';
const serviceName = '{serviceName}';


class Mail extends Component {

    static propTypes = {
        /**
         * @desc Current language loaded in the redux store
         * */
        currentLanguage: PropTypes.string,
        /**
         * @desc Current language on the server
         * */
        language: PropTypes.string,
        /**
         * @desc Function of changing the language, the input receives a string
         * */
        setActiveLanguage: PropTypes.func,
        /**
         * @desc Function for receiving translation by key
         * */
        translate: PropTypes.func,
        /**
         * @desc Object with styles CSS-IN-JS
         * */
        styles: PropTypes.object,
    };

    static defaultProps = {
        currentLanguage: 'EN',
        language: 'EN'
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        const {translate,styles,setActiveLanguage,currentLanguage,language} = this.props;
        if (currentLanguage !== language) {
            setActiveLanguage(language);
        }

        return (<table width="100%" border="0" cellPadding="0" cellSpacing="0" style={{
            borderSpacing: 0,
            borderCollapse: 'collapse',
        }}>

            <tr>
                <td align="center">
                    <table width="100%" border="0" cellPadding="0" cellSpacing="0" style={{
                        borderSpacing: 0,
                        borderCollapse: 'collapse',
                        width: '100%',
                    }}>
                        <thead className={styles.th}>
                        <tr className={styles.top}>
                            <td colSpan="2" width="100%">
                               <Image src={logoImage} alt={'emernotar.io'}/>
                            </td>
                        </tr>
                        </thead>
                    </table>

                    <table width="100%" border="0" cellPadding="0" cellSpacing="0" className={styles.table}>
                        <tbody>
                        <tr className={styles.topFooter}>
                            <td>
                                <TopLabel isActive styles={{
                                    transform: 'none',
                                    width: 'calc(100% - 48px)',
                                    marginTop: '24px'
                                }}>
                                    <Typography as={'h3'} fontWeight={'bold'} textAlign={'center'}>
                                        {translate('static_dear_user')}
                                    </Typography>
                                    <Typography as={'p'} fontWeight={'bold'}>

                                        {translate('static_description_row_1')} <br/>
                                        {translate('static_description_row_2')}
                                    </Typography>
                                </TopLabel>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table width="100%" border="0" cellPadding="0" cellSpacing="0" className={styles.table}>
                        <tbody>
                        <tr className={styles.topFooter}>
                            <td>
                                <TopLabel isActive
                                          styles={{transform: 'none',width: 'calc(100% - 48px)',margin: '0 24px 24px'}}>

                                    {translate('static_info_transactions')}
                                    <Typography as={'p'}>
                                        {translate('static_date_entry')}: {submittingDate} <br/>
                                        {translate('static_transaction_id')}: {idTransaction} <br/>
                                        {translate('static_your_address')}: {blockChainAddress} <br/>
                                    </Typography>
                                </TopLabel>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table width="100%" border="0" cellPadding="0" cellSpacing="0" className={styles.table}>
                        <tbody>
                        <tr>
                            <td>
                                <TopLabel isActive
                                          styles={{transform: 'none',width: 'calc(100% - 48px)',margin: '0 24px 24px'}}>
                                    {translate('static_info_cert')}
                                    <Typography as={'p'} lineHeight={'24px'}>
                                        {translate('static_notarization_date')}: {notarizationCreateTime} <br/>
                                        {translate('static_owner')}: {ownerEmail} <br/>
                                        {translate('static_validity_period')}: <a target="_blank"
                                                                                  href='http://rc.compaero.ru/help'
                                                                                  style={{textDecoration: 'none'}}>
                                        <span className={styles.circle}> ? </span>
                                    </a>: {translate('static_to')} {submittingExpiration}<br/>
                                        {translate('static_service')}: {serviceName} <br/>
                                    </Typography>
                                </TopLabel>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table width="100%" border="0" cellPadding="0" cellSpacing="0" className={styles.table}>
                        <tbody>
                        <tr className={styles.topFooter}>
                            <td>
                                <Button as="a" href="http://rc.compaero.ru/create_certificat/{emerhash}"
                                        variant={"raised"}
                                        color={'primary'}>
                                    <Typography as={'span'} size={'large'} textDecoration={'none'}>
                                        {translate('static_print')}
                                    </Typography>
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table width="100%" border="0" cellPadding="0" cellSpacing="0" className={styles.table}>
                        <tbody>
                        <tr className={styles.topFooter}>
                            <td colSpan="2">
                                <Typography as={"div"} textAlign={'center'}>
                                    <table style={{
                                        width: '100%',
                                        textAlign: 'left'
                                    }}>
                                        <tbody>
                                        <tr>
                                            <td style={{whiteSpace: 'nowrap'}}>
                                                {translate('static_hash_sum')}:
                                            </td>
                                            <td style={{
                                                wordWrap: 'break-word',width: '100%',
                                                maxWidth: 0,
                                            }}>
                                                {name}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{whiteSpace: 'nowrap'}}>
                                                {translate('static_file_name')}:
                                            </td>
                                            <td style={{
                                                wordWrap: 'break-word',width: '100%',
                                                maxWidth: 0,
                                            }}>
                                                {fileName}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Typography>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table width="100%" border="0" cellPadding="0" cellSpacing="0" style={{
                        borderSpacing: 0,
                        borderCollapse: 'collapse',
                        width: '100%',
                    }}>
                        <tfoot>
                        <tr className={styles.footer}>
                            <td colSpan="1" align="center">
                                <table width="100%" border="0" cellPadding="0" cellSpacing="0" className={styles.table}>
                                    <tfoot>
                                    <tr className={styles.footer}>
                                        <td colSpan="1">
                                            <Typography as={"p"} size={'small'} bright={'light'} fontWeight={'bold'}
                                                        textAlign={'center'}>
                                                EMERNOTAR.IO &copy; 2018
                                            </Typography>
                                        </td>
                                        <td colSpan="1">
                                            <a target="_blank" style={{
                                                color: '#fff',
                                                textDecoration: 'none',
                                                display: 'block',
                                                padding: '10px 0'
                                            }} href="https://compaero.ru">
                                                <div style={{
                                                    display: 'inline-block',
                                                    verticalAlign: 'bottom',
                                                    width: '40px',
                                                    marginRight: '10px',
                                                }}>
                                                    <CALogo/>
                                                </div>
                                                <Typography
                                                    as={'span'}
                                                    size={'medium'}
                                                    color={'default'}
                                                    bright={'contrastText'}
                                                    styles={{
                                                        display: 'inline-block',
                                                        verticalAlign: 'middle',
                                                    }}
                                                >
                                                    CompAero
                                                </Typography>
                                            </a>
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </td>
                        </tr>
                        </tfoot>
                    </table>


                </td>
            </tr>


        </table> )

    }
}

const style = ({theme}) => {
    return {
        top: {
            minHeight: '10rem',
            paddingTop: '1px',
            verticalAlign: 'middle',
            position: 'relative',
            borderBottom: '6px solid #FDF396',
            width: '100%',
            ...theme.header,
        },
        topFooter: {
            minHeight: '43px',
            verticalAlign: 'middle',
            position: 'relative',
            textAlign: 'center',
            color: 'black',
            marginTop: '24px',
            width: '100%',
        },
        footer: {
            minHeight: '43px',
            verticalAlign: 'middle',
            position: 'relative',
            ...theme.footer,
            borderTop: 'none',
            width: '100%',
        },

        table: {
            borderSpacing: 0,
            borderCollapse: 'collapse',
            width: '640px',
        },
        th: {},
        tr: {
            width: '100%',
        },

    }
};

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code,
});

const mapDispatchToProps = dispatch => ({
    setActiveLanguage: (value) => {
        dispatch(changeTranslate(Store.getState(),value))
    }
});

Mail = FelaConnect(style)(Mail);
Mail = ReduxConnect(mapStateToProps,mapDispatchToProps)(Mail);

export default Mail;
