import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Row} from "../../../../blocks/row/index";
import {Column} from "../../../../blocks/column/index";
import {connect} from 'react-fela';
import {DecorateDots} from "../../../../components/decorate/index";
import {Typography} from '../../../../blocks/typography/index';
// import {Image} from "../../../../blocks/image/index";
import AboutItem from '../../../../components/about/about_item';

import iconPaypal from '../../../../assets/icons/icon_paypal.svg';
import iconPlus from '../../../../assets/icons/icon_pluse.svg';
import iconEmail from '../../../../assets/icons/icon_email.svg';
import iconClock from '../../../../assets/icons/icon_clock.svg';

class Verify extends Component {

    static propTypes = {};

    static defaultProps = {
        data: [
            {
                icon: iconPlus,
                title: 'Add file',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                icon: iconPaypal,
                title: 'Pay',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                icon: iconClock,
                title: 'Wait',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                icon: iconEmail,
                title: 'Answer',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.renderVerify = this.renderVerify.bind(this);
    }

    get initialState() {
        return {}
    }

    renderVerify(props, index){
        const {styles} = this.props;
        return ( 
            <Fragment key={`renderVerify-${index}`}>
                <Row className={styles.row}>
                    <Column className={styles.column}
                    grid={[
                        [1024, 20, '%']
                    ]}>
                    <AboutItem
                            icon={props.icon}
                        />
                    </Column>
                    <Column className={styles.column}
                    grid={[
                        [1024, 80, '%']
                    ]}>
                        <Typography as={'h4'} size={'medium'} fontWeight={'bold'}>
                            {props.title}
                        </Typography>
                        <Typography as={'p'} size={'small'}>
                            {props.content}
                        </Typography>
                    </Column>
                </Row>
                <Row className={styles.row}>
                    <DecorateDots/>
                </Row>
            </Fragment>
        )
    }

    render() {
        const {data,styles} = this.props;
        return (
            <div className={styles.wrapper}>
                {
                    data.map((item,index) => this.renderVerify(item,index))
                }
            </div>
        )
    }
}

const STYLE = () =>{
    return {
        // wrapper: {
        //     marginBottom: '3rem',
        // },
        row:{
            minHeight: '70px',
            display: 'flex',
            verticalAlign: 'middle',
            marginBottom: '1.5rem',
        },
        column:{
            alignSelf: 'baseline',
            alignItems: 'center',
        },
        colDot: {
        }
    }
}

export default connect(STYLE)(Verify)
