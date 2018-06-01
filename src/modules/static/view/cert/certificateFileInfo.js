import React from 'react';
import {Typography} from "../../../../blocks/typography";
import {connect} from "react-fela";


const CertificateFileInfo = ({styles, translate, name, fileName}) => (<div className={styles.topFooter}>
    <Typography as={"p"} size={'small'} styles={{
        width: '60%',
        margin: '0 auto',
        lineHeight: '13.75px',
        fontSize: '11.25px'
    }} textAlign={'center'}>
        <Typography as={"p"} size={'small'}
                    styles={{width: '500px', margin: '0 auto', lineHeight: '13.75px', fontSize: '11.25px'}}
                    textAlign={'center'}>
            {translate('static_hash_sum')}: <span style={{wordWrap: 'break-word'}}>
                                        {name}
                                    </span> <br/>
            {translate('static_file_name')}: {fileName}
        </Typography>

    </Typography>
</div>);


const style = ({theme, styles}) => {
    return {
        topFooter: {
            height: '82px',
            padding: '10px',
            verticalAlign: 'middle',
            position: 'relative',
            textAlign: 'center',
            color: 'black',
            ...theme.top,
            margin: '0',
            ...styles,
        },
    }
};

export default connect(style)(CertificateFileInfo)