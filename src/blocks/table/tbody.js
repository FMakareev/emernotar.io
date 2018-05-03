import React from 'react';
import {createComponentWithProxy} from "react-fela";
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const TbodyStyle = ({ }) => ({
});

const FTbody = ({className, children}) => {
    return (<div className={className}>
        {children}
    </div>);
}

export default createComponentWithProxy(TbodyStyle, FTbody);