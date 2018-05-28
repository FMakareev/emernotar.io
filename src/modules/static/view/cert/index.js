import React, { Component, Fragment } from 'react';
import { connect } from "react-fela";
import { graphql } from "react-apollo";
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { connect as ReduxConnect } from "react-redux";
import { Typography } from "../../../../blocks/typography/index";
import { TopLabelRow, TopLabel } from '../../../../components/topLabel/index';
import IconLogoEmerNatar from '../../../../components/icons/icon_logo';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { changeTranslate } from "../../../../store/reducers/localization/actions";
import { Store } from '../../../../store';
import BCgraphicelement from '../../../../assets/BCgraphicelement-3-min.jpg';

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
            language
        }
  }
`;


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
        const { translate, styles, loading, error, data, setActiveLanguage, currentLanguage } = this.props;
        if (loading) {
            console.log('loading...', loading);
            return null;
        }
        if (error) {
            console.error('ERROR: ', error);
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
                language

            } = data.certificateItem;
            if (language.toUpperCase() !== currentLanguage) {
                setActiveLanguage(language.toUpperCase());
            }
            const submittingDateFormat = new Date(Number.parseInt(submittingDate) * 1000).toString();
            const submittingExpirationFormat = new Date(Number.parseInt(submittingExpiration) * 1000).toString();
            const notarizationCreateTimeFormat = new Date(Number.parseInt(notarizationCreateTime)).toString();

            return (
                <div style={{
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <div style={{ height: '467px' }}>
                        <div className={styles.top}>
                            <IconLogoEmerNatar />
                        </div>
                        <Typography
                            as={"h1"}
                            size={'large'}
                            color={'primary'}
                            bright={'dark'}
                            fontWeight={'bold'}
                            textAlign={'center'}
                            textTransform={'uppercase'}
                            styles={{ fontSize: '30px', lineHeight: '50px' }}>
                            {translate('static_pagetitle')}
                        </Typography>
                        <TopLabelRow styles={{ margin: 0, padding: '0 1rem' }}>
                            <div className={styles.topLabel}>


                                <Typography
                                    styles={{ margin: '0 0 2rem' }}
                                    as={'h2'}
                                    size={'medium'}
                                    fontWeight={'inherit'}
                                    textAlign={'center'}
                                >
                                    {translate('static_info_transactions')}:
                                </Typography>
                                <Typography as={'div'} styles={{ lineHeight: '13.75px', fontSize: '11.75px' }}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    {translate('static_date_entry')}:
                                            </td>
                                                <td>
                                                    {submittingDateFormat}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ whiteSpace: 'nowrap' }}>
                                                    {translate('static_transaction_id')}:
                                            </td>
                                                <td style={{
                                                    wordWrap: 'break-word', width: '100%',
                                                    maxWidth: 0,
                                                }}>
                                                    {idTransaction}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {translate('static_your_address')}:
                                            </td>
                                                <td>
                                                    {blockChainAddress}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {translate('static_owner')}:
                                            </td>
                                                <td style={{
                                                    wordWrap: 'break-word', width: '100%',
                                                    maxWidth: 0,
                                                }}>
                                                    {ownerEmail}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {translate('static_validity_period')}:
                                            </td>
                                                <td>
                                                    {translate('static_to')} {submittingExpirationFormat}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {translate('static_service')}:
                                            </td>
                                                <td>
                                                    {serviceName}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Typography>
                            </div>

                        </TopLabelRow>
                    </div>

                    <div style={{
                        position: 'relative',
                    }}>
                        <div className={styles.topFooter}>
                            <Typography as={"p"} size={'small'} styles={{
                                width: '60%',
                                margin: '0 auto',
                                lineHeight: '13.75px',
                                fontSize: '11.25px'
                            }} textAlign={'center'}>
                                <Typography as={"p"} size={'small'} styles={{ width: '500px', margin: '0 auto', lineHeight: '13.75px', fontSize: '11.25px' }} textAlign={'center'}>
                                    {translate('static_hash_sum')}: <span style={{ wordWrap: 'break-word' }}>
                                        {name}
                                    </span> <br />
                                    {translate('static_file_name')}:{fileName}
                                </Typography>

                            </Typography>
                        </div>
                        <div className={styles.footer}>
                            <Typography as={"p"} size={'small'} bright={'light'} fontWeight={'bold'}
                                textAlign={'center'}
                                styles={{ lineHeight: '13.75px', fontSize: '11.25px' }}
                            >
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

const style = ({ theme, marginBottom, paddingBottom }) => {
    return {
        wrapper: {},
        top: {
            // minHeight: '10rem',
            padding: '1px',
            verticalAlign: 'middle',
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: 'url(http://rc.compaero.ru/assets/media/BCgraphicelement-3-min-597369e2.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
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
            padding: '10px',
            verticalAlign: 'middle',
            position: 'relative',
            textAlign: 'center',
            color: 'black',
            ...theme.top,
            margin: '0',

        },
        footer: {
            height: 'auto',
            verticalAlign: 'middle',
            position: 'relative',
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.default.contrastText,
            margin: '0',
            padding: '1rem',

        },
        bgImage: {
            position: 'absolute',
            width: '200%',
            top: '50%',
            left: '50%',
            zIndex: '1',
            transform: 'translate(-50%,-50%)',
            '@media(min-width:768px)': {
                width: '150%',
            },
            '@media(min-width:1024px)': {
                width: '100%',
            }
        },
        topLabel: {
            position: 'relative',
            display: 'inline-block',
            margin: '1rem',
            zIndex: 5,
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            fontWeight: 'bold',
            transform: 'none',
            padding: '1rem',
            width: '70%',
            lineHeight: '30.8px',
            fontSize: '22px'
        }
    }
};

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code,
});

Cert = connect(style)(Cert);

Cert = graphql(certificateItem, {

    options: (ownProps) => {
        console.log(ownProps);
        if (ownProps.emerhash) {
            return {
                variables: {
                    emerhash: ownProps.emerhash
                }
            }
        } else {
            try {
                if (ownProps.match.params.emerhash) {
                    return {
                        variables: {
                            emerhash: ownProps.match.params.emerhash
                        }
                    }
                }
            } catch (err) {
                console.log(err);
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
            dispatch(changeTranslate(Store.getState(), value))
        }
    })
)(Cert);

export default Cert;