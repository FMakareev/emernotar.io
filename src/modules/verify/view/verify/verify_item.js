import React from 'react';
import {connect} from 'react-fela';
import {Image} from "../../../../blocks/image/index";
import iconVerify from '../../../../assets/icons/icon_verify.svg';
import {Typography} from "../../../../blocks/typography/index";

    /**
     * @description Render list of file with the same hash
     * @memberof Verify
     */

    // static propTypes = {
    //     styles: PropTypes.shape({
    //         VerifyItemWrapper: PropTypes.string,
    //         VerifyItemImageWrapper: PropTypes.string,
    //         VerifyItemImage: PropTypes.string,
    //         VerifyItemContent: PropTypes.string,
    //     }),
    // }

const VerifyItem = ({className, styles,data}) => {
    return (<div className={className + ' ' + styles.VerifyItemWrapper}>
        <div className={styles.VerifyItemImageWrapper}>
            <Image src={iconVerify} className={styles.VerifyItemImage}/>
        </div>
        <div className={styles.VerifyItemContent}>
            <Typography styles={{wordWrap: 'break-word'}} fontWeight={'bold'} as={'h3'} size={'medium'}>
               {data.ownerEmail}
            </Typography>
            <Typography as={'p'} styles={{wordWrap: 'break-word'}} size={'small'}>
                {data.name}
            </Typography>
            <Typography as={'p'} styles={{wordWrap: 'break-word'}} size={'small'}>
                {data.notarizationDate}
            </Typography>
        </div>
    </div>);
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
            width: '80%',
            paddingLeft: '2rem'
        },
    }
}


export default connect(STYLE)(VerifyItem);