import React, {Component} from 'react';
import {connect} from "react-fela";
import {graphql} from "react-apollo";
import { QRCode } from "react-qr-svg";

import {getTranslate, getActiveLanguage} from 'react-localize-redux';
import {connect as ReduxConnect} from "react-redux";
import {Typography} from "../../../../blocks/typography/index";
import gql from "graphql-tag";
import {changeTranslate} from "../../../../store/reducers/localization/actions";
import {Store} from '../../../../store';
import CertificatePageTitle from "./certificatePageTitle";
import CertificateHeader from './certificateHeader';
import CertificateFooter from './certificateFooter';
import CertificateFileInfo from './certificateFileInfo';
import CertificatePageOne from './page1';
import {TopLabelRow} from "../../../../components/topLabel";

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
            additionalinfo
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
        const {translate, styles, loading, error, data, setActiveLanguage, currentLanguage} = this.props;

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
            console.log('data.certificateItem: ', data.certificateItem);
            const {
                // name,
                // fileName,
                // notarizationCreateTime,
                submittingDate,
                submittingExpiration,
                language,
                additionalinfo

            } = data.certificateItem;

            if (language.toUpperCase() !== currentLanguage) {
                setActiveLanguage(language?language.toUpperCase(): 'EN');
            }

            const submittingDateFormat = new Date(Number.parseInt(submittingDate) * 1000).toString();
            const submittingExpirationFormat = new Date(Number.parseInt(submittingExpiration) * 1000).toString();

            return (
                <div className={styles.wrapper}>
                    <section style={{
                            position: 'relative',
                        }} className={'pdf-page '}>
                        <div className={styles.content}>
                            <CertificateHeader/>

                            <CertificatePageTitle
                                 styles={{
                                    fontSize: '24px', lineHeight: '32px'
                                }}
                            >
                                {translate('static_pagetitle')}
                            </CertificatePageTitle>

                          
                            <CertificatePageOne
                                translate={translate}
                                submittingDateFormat={submittingDateFormat}
                                submittingExpirationFormat={submittingExpirationFormat}
                                {...data.certificateItem}
                            />
                        </div>


                        <div style={{
                            position: 'relative',
                        }}>
                        
                            <CertificateFileInfo
                                {...data.certificateItem}
                                translate={translate}
                                styles={{
                                    ...(additionalinfo? {opacity: 0,}: null)

                                }}
                            />

                            <CertificateFooter/>
                            {/* <QRCode
                                bgColor="#FFFFFF"
                                fgColor="#000000"
                                level="Q"
                                style={{ 
                                    width: 62,
                                    position: 'fixed',
                                    zIndex: '100',
                                    top: '348px',
                                    right:' 30px'
                                }}
                            value="some text"
                        /> */}
                        </div>
                    </section>
                    {
                        additionalinfo &&  <section  className={'pdf-page '}>
                            <div style={{
                                height: '458px'
                            }}>
                                <CertificateHeader/>

                                <CertificatePageTitle
                                    styles={{
                                        fontSize: '24px', lineHeight: '32px'
                                    }}
                                >
                                    {translate('static_pagetitle_2')}
                                </CertificatePageTitle>
                                <TopLabelRow styles={{margin: 0, padding: '0 1rem'}}>
                                    <div className={styles.topLabel}>
                                        <Typography
                                            as={'div'}
                                            styles={{lineHeight: '13px', fontSize: '10px',wordBreak: 'break-all'}}
                                        >
                                            {additionalinfo.substring(0,1500)}
                                        </Typography>
                                    </div>
                                </TopLabelRow>
                            </div>

                            <div style={{
                                position: 'relative',
                            }}>
                                <CertificateFileInfo
                                    {...data.certificateItem}
                                    translate={translate}
                                />
                                <CertificateFooter/>
                            </div>
                        </section>
                    }

                </div>
            )
        }
        return null;
    }
}

const style = ({theme, marginBottom, paddingBottom}) => {
    return {
        wrapper: {
            
            width: '100%',
            // display: 'flex', 
            // flexDirection: 'column',
            // justifyContent: 'space-between',
        },
        content: {
            height: '457px'
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
            margin: '0 auto',
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
    fetchPolicy: 'network-only',
    options: (ownProps) => {
        console.log(ownProps);
        if (ownProps.emerhash) {
            return {
                fetchPolicy: 'network-only',
                variables: {
                    emerhash: ownProps.emerhash
                }
            }
        } else {
            try {
                if (ownProps.match.params.emerhash) {
                    return {
                        fetchPolicy: 'network-only',
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