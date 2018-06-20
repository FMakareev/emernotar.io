import React,{Component} from 'react';
import {connect} from "react-fela";
import path from 'path';

import {Typography} from "../../../../blocks/typography";
import {TopLabelRow} from "../../../../components/topLabel";
import {isEmail} from "../../../../utils/validation/is_email";
import {Image} from "../../../../blocks/image/index";
import questionIcon from '../../../../assets/icons/questionIcon.jpg';



const validityOwnerEmail = (ownerEmail,translate) => {

    if (!isEmail(ownerEmail)) {
        return (<tr>
            <td>
                {translate('static_owner')}:
            </td>
            <td
                style={{
                    wordWrap: 'break-word',width: '100%',
                    maxWidth: 0,
                }}
            >
                {ownerEmail}
            </td>
        </tr>)
    } else {
        return (<tr>
            <td>
                {translate('static_owner_hash')}:
            </td>
            <td
                style={{
                    wordWrap: 'break-word',width: '100%',
                    maxWidth: 0,
                }}
            >
                {ownerEmail}
            </td>
        </tr>)
    }
};

const CertificatePageOne = ({
                                styles,
                                translate,
                                submittingDateFormat,
                                idTransaction,
                                blockChainAddress,
                                ownerEmail,
                                submittingExpirationFormat,
                                serviceName,
                                emerhash,
                            }) => (<TopLabelRow styles={{margin: 0,padding: '0 1rem'}}>
    <div className={styles.topLabel}>


        <Typography
            styles={{margin: '0 0 2rem'}}
            as={'h2'}
            size={'medium'}
            fontWeight={'inherit'}
            textAlign={'center'}
        >
            {translate('static_info_transactions')}:
        </Typography>
        <Typography as={'div'} styles={{lineHeight: '13.75px',fontSize: '11.75px'}}>
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
                    <td style={{whiteSpace: 'nowrap'}}>
                        {translate('static_transaction_id')}:
                    </td>
                    <td style={{
                        wordWrap: 'break-word',width: '100%',
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

                {
                    validityOwnerEmail(ownerEmail,translate)
                }

                <tr>
                    <td>
                        {translate('static_validity_period')}:
                    </td>
                    <td>
                        {translate('static_to')} {submittingExpirationFormat} <a target="_blank"
                                                                                 href='/help#5'
                                                                                 style={{textDecoration: 'none'}}>
                                        <span
                                            style={{
                                                display: 'inline-block',
                                            }}
                                        >
                                            <Image
                                                styles={{
                                                    display: 'block',
                                                    width: '18px',
                                                    height: '18px',
                                                }}
                                                src={'http://emernotar.io/assets/media/questionIcon.jpg'}
                                                alt={"?"}
                                            />
                                        </span>
                    </a>
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
                <tr>
                    <td rowSpan="2"> {translate('static_alternative_parsers')}</td>
                    <td><a href={"https://explorer.emercoin.com/nvs//" + emerhash} target="_blank">https://explorer.emercoin.com</a>
                    </td>
                </tr>
                <tr>
                    <td><a
                        href={"https://prohashing.com/explorer/Emercoin/" + idTransaction}>https://prohashing.com/</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </Typography>
    </div>

</TopLabelRow>);


const style = ({theme}) => {
    return {
        topLabel: {
            position: 'relative',
            display: 'inline-block',
            margin: '0 1rem 1rem 1rem',
            zIndex: 5,
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            fontWeight: 'bold',
            transform: 'none',
            padding: '1rem',
            width: '70%',
            lineHeight: '30.8px',
            fontSize: '22px'
        },
    }
};


export default connect(style)(CertificatePageOne)