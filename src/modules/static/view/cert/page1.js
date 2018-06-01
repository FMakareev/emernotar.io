import React, {Component} from 'react';
import { connect } from "react-fela";
import {Typography} from "../../../../blocks/typography";
import {TopLabelRow} from "../../../../components/topLabel";

const CertificatePageOne = ({
                               styles,
                               translate,
                               submittingDateFormat,
                               idTransaction,
                               blockChainAddress,
                               ownerEmail,
                               submittingExpirationFormat,
                               serviceName,

}) => (<TopLabelRow styles={{ margin: 0, padding: '0 1rem' }}>
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
                <tr>
                    <td rowspan="2"> {translate('static_alternative_parsers')}</td>
                        <td>https://explorer.emercoin.com</td>
                    </tr>
                    <tr>
                        <td>https://prohashing.com/explorer/Emercoin</td>
                    </tr
                </tbody>
            </table>
        </Typography>
    </div>

</TopLabelRow>);


const style = ({ theme }) => {
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