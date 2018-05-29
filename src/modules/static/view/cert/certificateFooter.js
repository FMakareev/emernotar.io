import React from 'react';
import { connect } from "react-fela";
import { Typography } from "../../../../blocks/typography/index";

const CertificateFooter = ({styles}) => (<div className={styles.footer}>
    <Typography as={"p"} size={'small'} bright={'light'} fontWeight={'bold'}
        textAlign={'center'}
        styles={{ lineHeight: '13.75px', fontSize: '11.25px' }}
    >
        EMERNOTAR.IO &copy; 2018
    </Typography>
</div>);

const style = ({ theme, marginBottom, paddingBottom }) => {
    return {
        footer: {
            height: 'auto',
            verticalAlign: 'middle',
            position: 'relative',
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.default.contrastText,
            margin: '0',
            padding: '1rem',

        },
    }
};

export default connect(style)(CertificateFooter);