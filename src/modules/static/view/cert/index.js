import React, {Component, Fragment} from 'react';
import {connect} from "react-fela";
import {Typography} from "../../../../blocks/typography/index";
import {TopLabelRow, TopLabel} from '../../../../components/topLabel/index';
import iconLogo from '../../../../assets/icons/icon_logo.svg';
import {Image} from "../../../../blocks/image/index";
import IconLogoEmerNatar from '../../../../components/icons/icon_logo';
import gql from "graphql-tag";
import {Query} from "react-apollo";
import {PageNotFound} from "../../../../routes/errors/index";

const price = gql`
  query($emerhash: String) {
        certificateItem(emerhash:$emerhash){
            name
            fileName
            notarizationDate
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
// const notarizationDate = '{notarizationDate}';
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
        const {styles, emerhash} = this.props;
        if (!styles) return null;
        return (
            <Query query={price} variables={{emerhash: emerhash}}>
                {({loading, error, data}) => {
                    console.log(error);
                    console.log(data);
                    if (loading) {
                        return ''
                    }

                    if (error) {
                        return null
                    } else if (data.certificateItem) {
                        const {
                            name,
                            fileName,
                            notarizationDate,
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
                        return (
                            <div style={{
                                height: '100vh', width: '100%', display: 'flex', flexDirection: 'column',
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
                                                    styles={{fontSize: '3rem', lineHeight: '5rem'}}>
                                            Certificate
                                        </Typography>
                                    </div>
                                    <TopLabelRow>
                                        <TopLabel isActive styles={{transform: 'none', padding: '1rem', width: '40%'}}>
                                            Данные о транзакции в блокчейн:
                                            <Typography as={'p'}>
                                                Дата внесения: {submittingDate} <br/>
                                                ID транзакции: <span style={{wordWrap: 'break-word'}}>
                                                {idTransaction}
                                            </span> <br/>
                                                Ваш адрес в блокчейн Emercoin: {blockChainAddress} <br/>
                                            </Typography>
                                        </TopLabel>
                                        <TopLabel isActive styles={{transform: 'none', padding: '1rem', width: '40%'}}>
                                            Данные о сертификате:
                                            <Typography as={'p'} styles={{lineHeight: '2rem'}}>
                                                Дата нотаризации: {notarizationDate} <br/>
                                                Владелец нотаризации: {ownerEmail} <br/>
                                                Срок действия: до {submittingExpiration}

                                                <br/>
                                                Сервис: {serviceName} <br/>
                                            </Typography>
                                        </TopLabel>
                                    </TopLabelRow>
                                </div>
                                <div style={{margin: '0 0 -12px 0'}}>
                                    <div className={styles.topFooter}>
                                        <Typography as={"p"} size={'small'} textAlign={'center'}>
                                            SHA512 Хэш-сумма: <span style={{wordWrap: 'break-word'}}>
                                                {name}
                                            </span>  <br/>
                                            Наимменование файла:{fileName}
                                        </Typography>
                                    </div>
                                    <div className={styles.footer}>
                                        <Typography as={"p"} size={'small'} bright={'light'} fontWeight={'bold'}
                                                    textAlign={'center'}>
                                            EMERNOTAR.IO &copy; 2018
                                        </Typography>
                                    </div>
                                </div>
                            </div>)
                    } else {
                        return null
                    }

                }}
            </Query>

        )
    }
}

const style = ({theme, marginBottom, paddingBottom}) => {
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
}

export default connect(style)(Cert)