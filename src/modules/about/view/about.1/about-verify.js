import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

// import {getTranslate, getActiveLanguage} from 'react-localize-redux';
// import {connect} from "react-redux";

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
                title: 'about_notarize_1_title',
                content: `about_notarize_1_description`,
            },
            {
                icon: iconSearch,
                title: 'about_notarize_2_title',
                content: `about_notarize_2_description`,
            },
            {
                icon: iconQuestion,
                title: 'about_notarize_3_title',
                content: `about_notarize_3_description`,
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
        const {styles, translate} = this.props;
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
                            {/* {props.title} */}
                            {translate(props.title)}
                        </Typography>
                        <Typography as={'p'} size={'small'}>
                            {/* {props.content} */}
                            {translate(props.content)}
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
        const {data,styles,translate} = this.props;
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
