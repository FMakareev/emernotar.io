import React, {Component, Fragment} from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import {createComponentWithProxy, connect} from "react-fela";
import {Typography} from "../../../../blocks/typography/index";
// import Footer from '../../../../blocks/footer/footer'
// import {Container} from '../../../../blocks/container/index';
import {TopLabel} from '../../../../components/topLabel/index';
// import {Column} from '../../../../blocks/column/index';
// import {Row} from '../../../../blocks/row/index';
import {Image} from '../../../../blocks/image/index';
import {Button} from '../../../../blocks/button/index';
// import  {table, tbody, td, tr} from '../../../../blocks/table/index';
// import { Email, Item, Span, A, renderEmail } from 'react-html-email';

import iconPrint from '../../../../assets/icons/icon_print.svg';

const name = '{name}';
const fileName = '{fileName}';
const notarizationDate = '{notarizationDate}';
const submittingDate = '{submittingDate}';
const submittingExpiration = '{submittingExpiration}';
const ownerEmail = '{ownerEmail}';
const emerhash = '{emerhash}';
const idTransaction = '{idTransaction}';
const blockChainAddress = '{blockChainAddress}';
const serviceName = '{serviceName}';

class Mail extends Component {

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
        const {styles, children} = this.props;
        if (!styles) return null;
        return (<table border="0" cellPadding="0" cellSpacing="0"  className={styles.table}>

                <thead  className={styles.th}>
                <tr className={styles.top}>
                    <td colSpan="2" width="100%">
                        <Typography as={"h1"} color={'default'} size={'large'} fontWeight={'bold'} textAlign={'center'}
                                    textTransform={'uppercase'} styles={{fontSize: '4rem',
                             lineHeight: '5rem'}}>
                            EMERNOTAR.IO
                        </Typography>
                    </td>
                </tr>
                </thead>

                <tbody>
                <tr className={styles.topFooter}>
                    <td colSpan="2">
                        <TopLabel isActive styles={{transform: 'none', maxWidth: '540px', width: '100%',marginTop: '2rem'}}>
                            <Typography as={'h3'} fontWeight={'bold'} textAlign={'center'}>
                                Уважаемый пользователь!
                            </Typography>
                            <Typography as={'p'} fontWeight={'bold'}>
                                Ваша заявка на создание/редакторование записи в блокчейн была выполнена. Ниже Вы найдете
                                все
                                нужные данные о транзакции, а в приложении - архив с подписью и сертификат.
                            </Typography>
                        </TopLabel>
                    </td>
                </tr>
                <tr className={styles.topFooter}>
                    <td  colSpan="1" style={{
                        width: '50%',
                    }} >
                        <TopLabel isActive styles={{transform: 'none', width: 'calc(100%-4rem)', margin: '2rem'}}>
                            Данные о транзакции в блокчейн:
                            <Typography as={'p'}>
                                Дата внесения: {submittingDate} <br/>
                                ID транзакции: {idTransaction} <br/>
                                Ваш адрес в блокчейн Emercoin: {blockChainAddress} <br/>
                            </Typography>
                        </TopLabel>
                    </td>
                    <td colSpan="1" style={{
                        width: '50%',
                    }}>
                        <TopLabel isActive styles={{transform: 'none', width: 'calc(100%-4rem)', margin: '2rem'}}>
                            Данные о сертификате:
                            <Typography as={'p'} lineHeight={'2rem'}>
                                Дата нотаризации: {notarizationDate} <br/>
                                Владелец нотаризации: {ownerEmail} <br/>
                                Срок действия: до {submittingExpiration}
                                <a to='http://emernoter.io/faq' style={{textDecoration: 'none'}}>
                                    <span className={styles.circle}> &iquest; </span>
                                </a><br/>
                                Сервис: {serviceName} <br/>
                            </Typography>
                        </TopLabel>
                    </td>
                </tr>
                <tr className={styles.topFooter}>
                    <td colSpan="2" >
                        <Button as="a" href="" variant={"raised"} color={'primary'}>
                            <Image src={iconPrint} styles={{padding: '0.2rem', height: '3rem'}}/>
                            <Typography as={'span'} size={'large'} textDecoration={'none'}>
                                Print
                            </Typography>
                        </Button>
                    </td>
                </tr>
                <tr  className={styles.topFooter}>
                    <td colSpan="2" >
                        <Typography as={"p"} textAlign={'center'}>
                            SHA512 Хэш-сумма: {name} <br/>
                            Наимменование файла:{fileName}
                        </Typography>
                    </td>
                </tr>
                </tbody>
                <tfoot >
                <tr className={styles.footer}>
                    <td colSpan="2" >
                        <Typography as={"p"} size={'small'} bright={'light'} fontWeight={'bold'} textAlign={'center'}>
                            EMERNOTAR.IO &copy; 2018
                        </Typography>
                    </td>
                </tr>
                </tfoot>

            </table>

        )
    }
}

const style = ({theme, marginBottom, paddingBottom}) => {
    return {
        top: {
            minHeight: '10rem',
            paddingTop: '1px',
            verticalAlign: 'middle',
            position: 'relative',
            borderBottom: '0.5rem solid #FDF396',
            width: '100%',
            ...theme.header,
        },
        topFooter: {
            minHeight: '7rem',
            verticalAlign: 'middle',
            position: 'relative',
            textAlign: 'center',
            color: 'black',
            marginTop: '2rem',
            width: '100%',
        },
        footer: {
            minHeight: '5rem',
            verticalAlign: 'middle',
            position: 'relative',
            ...theme.footer,
            borderTop: 'none',
            width: '100%',
        },

        table:{
            borderSpacing: 0,
            borderCollapse: 'collapse',
            width: '100%',
        },
        th:{
        },
        tr:{
            width: '100%',
        }

    }
}

export default connect(style)(Mail)
