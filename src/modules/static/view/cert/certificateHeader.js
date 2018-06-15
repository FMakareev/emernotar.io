import React from 'react';
import { connect } from "react-fela";

import IconLogoEmerNatar from '../../../../components/icons/icon_logo';

export const CertificateHeader = ({ styles }) => (<div className={styles.top}>
    <IconLogoEmerNatar styles={{margin: '10px auto'}} height={50}/>
</div>);

const style = ({ theme, marginBottom, paddingBottom }) => {
    return {
        top: {
            // minHeight: '10rem',
            padding: '1px',
            verticalAlign: 'middle',
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: 'url({endpoint}/assets/media/BCgraphicelement-3-min-597369e2.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            ...theme.top,
        },
    }
};

export default connect(style)(CertificateHeader);