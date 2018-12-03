import React,{Fragment} from 'react';
import PropTypes from 'prop-types';

import {connect as connectRedux} from "react-redux";
import {getTranslate,getActiveLanguage} from 'react-localize-redux';
import {connect} from 'react-fela';
import {Image} from "../../../../blocks/image/index";
import iconVerify from '../../../../assets/icons/icon_verify.svg';
import {Typography} from "../../../../blocks/typography/index";
import {Row} from '../../../../blocks/row/index';
import {Column} from '../../../../blocks/column/index';
import {isEmail} from "../../../../utils/validation/is_email";
import {Link} from 'react-router-dom';

const validityOwnerEmail = (ownerEmail,translate) => {
    if (!isEmail(ownerEmail)) {
        return (<Row>
            <Column grid={[ [ 768,'40','%' ] ]}>
                <Typography styles={{wordWrap: 'break-word'}} fontWeight={'bold'} as={'p'} size={'medium'}>
                    {translate('static_owner')}:
                </Typography>
            </Column>
            <Column grid={[ [ 768,'60','%' ] ]}>
                <Typography styles={{wordWrap: 'break-word'}}  as={'p'} size={'medium'}>
                    {ownerEmail}
                </Typography>
            </Column>
        </Row>)
    } else {
        return (<Row>
            <Column grid={[ [ 768,'40','%' ] ]}>
                <Typography styles={{wordWrap: 'break-word'}} fontWeight={'bold'} as={'p'} size={'medium'}>
                    {translate('static_owner_hash')}:
                </Typography>
            </Column>
            <Column grid={[ [ 768,'60','%' ] ]}>
                <Typography styles={{wordWrap: 'break-word'}} as={'p'} size={'medium'}>
                    {ownerEmail}
                </Typography>
            </Column>
        </Row>)
    }
};


/**
 * @description Render list of file with the same hash
 * @memberof Verify
 */

let VerifyItem = ({className,styles,data,translate}) => {
    VerifyItem.propTypes = {
        /** @property {shape} styles   */
        styles: PropTypes.shape({
            VerifyItemWrapper: PropTypes.string,
            VerifyItemImageWrapper: PropTypes.string,
            VerifyItemImage: PropTypes.string,
            VerifyItemContent: PropTypes.string,
        }),
    };

    if (!data) {
        return null;
    }
    let notarizationCreateTime;
    if(data.notarizationCreateTime.length === 10){
        notarizationCreateTime = new Date(Number.parseInt(data.notarizationCreateTime) * 1000).toString();
    } else if(data.notarizationCreateTime.length === 13){
        notarizationCreateTime = new Date(Number.parseInt(data.notarizationCreateTime)).toString();
    }


    return (
        <Row>
            <Column grid={[ [ 768,'20','%' ] ]}>
                <Image src={iconVerify} className={styles.VerifyItemImage}/>
            </Column>
            <Column grid={[ [ 768,'80','%' ] ]}>

                {validityOwnerEmail(data.ownerEmail,translate)}


                <Row>
                    <Column grid={[ [ 768,'40','%' ] ]}>
                        <Typography styles={{wordWrap: 'break-word'}} fontWeight={'bold'} as={'p'} size={'medium'}>
                            {translate('verify_hashsha')}
                        </Typography>
                    </Column>
                    <Column grid={[ [ 768,'60','%' ] ]}>
                        <Typography styles={{wordWrap: 'break-word'}} as={'p'} size={'medium'}>
                            {data.name}
                        </Typography>
                    </Column>
                </Row>
                <Row>
                    <Column grid={[ [ 768,'40','%' ] ]}>
                        <Typography styles={{wordWrap: 'break-word'}} fontWeight={'bold'} as={'p'} size={'medium'}>
                            {translate('verify_creation_time')}
                        </Typography>
                    </Column>
                    <Column grid={[ [ 768,'60','%' ] ]}>
                        <Typography styles={{wordWrap: 'break-word'}} as={'p'} size={'medium'}>
                            {notarizationCreateTime}
                        </Typography>
                    </Column>
                </Row>
                <Row>
                    <Column grid={[ [ 768,'40','%' ] ]}>
                        <Typography styles={{wordWrap: 'break-word'}} fontWeight={'bold'} as={'p'} size={'medium'}>
                            {translate('verify_additional_info')}
                        </Typography>
                    </Column>
                    <Column grid={[ [ 768,'60','%' ] ]}>
                        <Typography styles={{wordWrap: 'break-word'}} as={'p'} size={'medium'}>
                            {data.additionalinfo}
                        </Typography>
                    </Column>
                </Row>
                <Row>
                    <Column grid={[ [ 768,'40','%' ] ]}>
                        <Typography styles={{wordWrap: 'break-word'}} fontWeight={'bold'} as={'p'} size={'medium'}>
                            {translate('verify_parser_transaction')}
                        </Typography>
                    </Column>
                    <Column grid={[ [ 768,'60','%' ] ]}>
                        <Typography styles={{wordWrap: 'break-word'}} as={'p'} size={'medium'}>
                            <a target="_blank" href={'https://explorer.emercoin.com/nvs//' + data.name}>{data.name}</a>
                        </Typography>
                    </Column>
                </Row>
            </Column>
        </Row>);
};

const STYLE = () => {

    return {
        VerifyItemWrapper: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '2rem',
        },
        VerifyItemImageWrapper: {
            display: 'inline-block',
            width: '20%',
            overflow: 'hidden'
        },
        VerifyItemImage: {
            width: '100%'
        },
        VerifyItemContent: {
            display: 'inline-block',
            width: '60%',
            paddingLeft: '2rem'
        },
    }
}

VerifyItem = connect(STYLE)(VerifyItem);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: state.locale ? getActiveLanguage(state.locale).code : null,
    preLoader: state.preLoader.toggle
});


export default connectRedux(mapStateToProps)(VerifyItem);
;