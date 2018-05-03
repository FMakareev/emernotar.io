import React, {Component} from 'react';
import {connect} from "react-fela";

const Style = ({theme, styles, ...props}) => {
    return {
        wrapper: {
            display: 'block',
            margin: '20px auto',
            fill: 'inherit',
        },
        Vector_2: {
            // fill:theme.palette.primary.main,
            fill: 'inherit',
        },
        Vector_3: {
            // fill:theme.palette.primary.main,
            fill: 'inherit',
        },
    }
}

const IconLogoEmerNatar = ({styles, text = true}) => (
    <svg className={styles.wrapper} width={'80px'} height={'70px'} viewBox="0 0 115 100">
        <g id="Canvas" fill="inherit">
            <g id="785325152">
                <g id="Vector_2">
                    <path transform="translate(29.8909, 31.5054)" className={styles.Vector_2}
                          d="M 35.5703 28.5323L 35.5703 1.17251e-06L 41.7038 1.17251e-06L 41.7038 4.89867L 52.7424 4.89867L 52.7424 9.3747L 45.7924 9.3747L 45.7924 15.0814L 52.7424 15.0814L 52.7424 19.5646L 41.7038 19.5646L 41.7038 38.3164L 34.0023 38.3164L 17.1722 9.25223L 17.1722 38.3164L 11.0386 38.3164L 11.0386 33.4238L -5.88038e-07 33.4238L -5.88038e-07 28.9405L 6.95003 28.9405L 6.95003 22.8256L -5.88038e-07 22.8256L -5.88038e-07 18.3424L 11.0386 18.3424L 11.0386 1.17251e-06L 19.0436 1.17251e-06L 35.5703 28.5323Z"/>
                </g>
                <g id="Vector_3">
                    <path className={styles.Vector_3} fillRule="evenodd" clipRule="evenodd"
                          d="M 103.731 49.9868L 80.7738 10.346L 34.8646 10.346L 11.9094 49.9868L 34.8646 89.6264L 80.7738 89.6264L 103.731 49.9868ZM 86.8652 -1.75877e-06L 115.819 49.9988L 86.8652 100L 28.9551 100L 1.61711e-06 49.9988L 28.9551 -1.75877e-06L 86.8652 -1.75877e-06Z"/>
                </g>
            </g>
        </g>
    </svg>

);

export default connect(Style)(IconLogoEmerNatar);