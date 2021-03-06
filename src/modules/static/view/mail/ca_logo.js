import React from 'react';
import {connect} from "react-fela";


const CALogo = ({styles}) => (
    <svg width="40" height="34.703" viewBox="0 0 1382 1199" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M439.73 752.412L692.159 898.432L944.632 752.412V606.392L818.395 679.379L692.159 752.412L565.922 679.379V533.359L439.73 460.371V752.412Z" fill="#041D2B"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M692.159 314.355L439.73 460.376L565.922 533.363L692.159 460.376L818.395 533.363L944.632 460.376L692.159 314.355Z" fill="#0C3A52"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M692.16 460.371V606.392L818.397 679.379V533.359L692.16 460.371Z" fill="#4CACE0"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M565.918 533.359V679.379L692.155 606.392V460.371L565.918 533.359Z" fill="#267199"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M424.27 1061.93L290.938 830.564L157.605 599.195H0.453125L173.062 898.707L345.717 1198.26L424.27 1061.93Z" fill="#4CACE0"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M690.938 1061.93H424.272L345.719 1198.26H690.938H1036.2L957.648 1061.93H690.938Z" fill="#267199"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M157.605 599.194L290.938 367.825L424.27 136.501L345.717 0.125L173.062 299.682L0.453125 599.194H157.605Z" fill="#267199"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M957.648 136.501L1090.98 367.825L1224.31 599.194L1090.98 830.562L957.648 1061.93L1036.2 1198.26L1208.86 898.705L1381.47 599.194L1208.86 299.682L1036.2 0.125H690.938H345.719L424.272 136.501H690.938H957.648Z" fill="#0C3A52"/>
    </svg>

);

const style = () => {
    return {
        st0: {
            fill: '#00A497'
        },
        st1: {
            fill: '#00A497',
            stroke: '#00A497',
            strokeWidth: 2.36,
            strokeMiterlimit: 22.9256
        },
        st2: {
            fill: '#FEFEFE'
        },
    }
};

export default connect(style)(CALogo);