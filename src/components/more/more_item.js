import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy, connect} from "react-fela";
import {Typography} from "../../blocks/typography/index";
import {Image} from "../../blocks/image/index";

class MoreItem extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        const {styles, children, icon} = this.props;
        if (!styles) return null;
        return (
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Typography as={'span'} textTransform={'uppercase'} color={'primary'} bright={'dark'}>
                        {children}
                    </Typography>
                </div>
                <div className={styles.iconWrapper}>
                    <Image src={icon}/>
                </div>
                <div className={styles.leftLine}>
                    <div className={styles.left}>
                    </div>
                </div>
            </div>
        )
    }
}

const style = ({theme, count}) => {

    return {
        wrapper: {
            position: 'relative',
            minHeight: '3.125rem',
            display: 'flex',
            marginBottom: '1.875rem',
            justifyContent: 'space-between',
            alignItems: 'center',
            '-ms-flex-align': 'center',
        },
        iconWrapper: {
            width: '3.125rem',
            height: '3.125rem',
            // backgroundColor: theme.palette.primary.main,
        },
        left: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            '-ms-flex-align': 'center',
            marginRighrt: '0.625rem',
            width: '100%',
        },
        leftLine: {
            display: 'block',
            height: '0',
            minWidth: '10rem',
            width: '100%',
            borderTop: '0.125rem dashed',
            borderColor: theme.palette.primary.main,
            ':before': {
                content: "''",
                position: 'absolute',
                display: 'block',
                height: '0',
                width: '50%',
                borderTop: '0.125rem solid',
                borderColor: theme.palette.primary.main,
                top: '50%',
            }
        },
        content: {
            whiteSpace: 'nowrap',
            paddingRight: '1.25rem',
        },

    }
}

export default connect(style)(MoreItem)
