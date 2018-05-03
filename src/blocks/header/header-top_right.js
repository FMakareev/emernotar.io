import React from 'react';
// import {Link} from "../link/Link";
import { Link } from 'react-router-dom';
import {GetMessages} from "../messages/get_messages";
import {createComponentWithProxy} from "react-fela";
import Button from '../button/button';


const HeaderTopRightStyle = () => ({
    float: 'right',
})

const HeaderTopRight = ({className}) => {
    return (<div className={className}>
        {/*<Button size="medium" variant="flat">*/}
        <Link to="/login">
            Sign in
        </Link>
        {/*</Button>*/}
        {/*<Button size="medium" variant="raised">*/}
            <Link to="/registration">
                Get started
            </Link>
        {/*</Button>*/}
    </div>);
}

export default createComponentWithProxy(HeaderTopRightStyle, HeaderTopRight);
