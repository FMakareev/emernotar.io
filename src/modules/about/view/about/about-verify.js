import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Row} from "../../../../blocks/row/index";
import {Column} from "../../../../blocks/column/index";
import {connect} from 'react-fela';
import {DecorateDots} from "../../../../components/decorate/index";
import {Typography} from '../../../../blocks/typography/index';
import {Image} from "../../../../blocks/image/index";
import AboutItem from '../../../../components/about/about_item';

import iconPlus from '../../../../assets/icons/icon_pluse.svg';
import iconQuestion from '../../../../assets/icons/icon_question.svg';
import iconSearch from '../../../../assets/icons/icon_search.svg';


class Notarize extends Component {

    static propTypes = {};

    static defaultProps = {
        data: [
            {
                icon: iconPlus,
                title: 'Add file',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                icon: iconSearch,
                title: 'Searching',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                icon: iconQuestion,
                title: 'Answer',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.renderNotarize = this.renderNotarize.bind(this);
    }

    get initialState() {
        return {}
    }

    renderNotarize(props,index){
        const {styles} = this.props;
        return ( 
            <Fragment key={`renderNotarize-${index}`}>
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
                    data.map((item,index) => this.renderNotarize(item,index))
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

export default connect(STYLE)(Notarize)
