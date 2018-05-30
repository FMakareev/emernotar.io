import React from 'react';
import {Typography} from "../../../../blocks/typography";


const CertificatePageTitle = ({children}) => (<Typography
    as={"h1"}
    size={'large'}
    color={'primary'}
    bright={'dark'}
    fontWeight={'bold'}
    textAlign={'center'}
    textTransform={'uppercase'}
    styles={{ fontSize: '30px', lineHeight: '50px' }}>
    {children}
</Typography>);

export default CertificatePageTitle;