import React from 'react';
import {createComponentWithProxy} from "react-fela";
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const TdStyle = ({bold = false}) => ({
    padding: '0.5rem 0.9375rem',
    ...(bold ? {
        fontWeight: '400',
    } : null)
});

// const FTd = (props) => {
//     const ElementType = getElementType(Td, props);

//     return (<ElementType className={props.className}>
//         {props.children || ''}
//     </ElementType>);
// };

const FTd = ({className, children}) => {
    return (<div className={className}>
        {children}
    </div>);
}

export default createComponentWithProxy(TdStyle, FTd);