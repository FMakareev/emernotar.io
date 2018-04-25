import React from 'react';
import {createComponentWithProxy} from "react-fela";
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const TableStyle = ({ }) => ({
    marginLeft: '-0.9375rem',
    marginRight: '-0.9375rem',
    minWidth: '100%',
});

const FTable = ({className, children}) => {
    return (<div className={className}>
        {children}
    </div>);
}
export default createComponentWithProxy(TableStyle, FTable);