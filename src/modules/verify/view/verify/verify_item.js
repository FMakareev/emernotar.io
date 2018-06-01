import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-fela';
import {Image} from "../../../../blocks/image/index";
import iconVerify from '../../../../assets/icons/icon_verify.svg';
import {Typography} from "../../../../blocks/typography/index";
import {Row} from '../../../../blocks/row/index';
import {Column} from '../../../../blocks/column/index';

    /**
     * @description Render list of file with the same hash
     * @memberof Verify
     */

const VerifyItem = ({className, styles,data}) => {
    VerifyItem.propTypes = {
        /** @property {shape} styles   */
        styles: PropTypes.shape({
            VerifyItemWrapper: PropTypes.string,
            VerifyItemImageWrapper: PropTypes.string,
            VerifyItemImage: PropTypes.string,
            VerifyItemContent: PropTypes.string,
        }),
    }
    const notarizationCreateTime = new Date(Number.parseInt(data.notarizationCreateTime)).toString();
    return (
        <Row>
        <Column grid={[[768,'20','%']]}>
            <Image src={iconVerify} className={styles.VerifyItemImage}/>
        </Column>
        <Column grid={[[768,'80','%']]}>
            <Row>
                <Column grid={[[768,'40','%']]}>
                    <Typography styles={{wordWrap: 'break-word'}} fontWeight={'bold'} as={'h3'} size={'medium'}>
                        {translate('verify_owner')}
                    </Typography>
                </Column>
                <Column grid={[[768,'60','%']]}>
                    <Typography styles={{wordWrap: 'break-word'}} fontWeight={'bold'} as={'h3'} size={'medium'}>
                        {data.ownerEmail}
                    </Typography>
                </Column>                
            </Row>
            <Row>
                <Column grid={[[768,'40','%']]}>
                <Typography as={'p'} styles={{wordWrap: 'break-word'}} size={'small'}>
                    {translate('verify_hashsha')}
                </Typography>
                </Column>
                <Column grid={[[768,'60','%']]}>
                    <Typography as={'p'} styles={{wordWrap: 'break-word'}} size={'small'}>
                        {data.name}
                    </Typography>
                </Column>                
            </Row>
            <Row>
                <Column grid={[[768,'40','%']]}>
                <Typography as={'p'} styles={{wordWrap: 'break-word'}} size={'small'}>
                    {translate('verify_creation_time')}
                </Typography>
                </Column>
                <Column grid={[[768,'60','%']]}>
                    <Typography as={'p'} styles={{wordWrap: 'break-word'}} size={'small'}>
                        {notarizationCreateTime}
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


export default connect(STYLE)(VerifyItem);