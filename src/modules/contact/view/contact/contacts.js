import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row} from "../../../../blocks/row/index";
import {Typography} from '../../../../blocks/typography/index'
import {Column} from "../../../../blocks/column/index";
import {connect as connectFela} from 'react-fela';
import {DecorateDots} from "../../../../components/decorate/index";
import {connect} from "react-redux";
import {getTranslate, getActiveLanguage} from 'react-localize-redux';

class Contacts extends Component {

    static propTypes = {};

    static defaultProps = {
        data: [
            {
                title: 'contact_phone',
                content: '0 000 000 00 00',
            },
            {
                title: 'contact_email',
                content: 'email@email.com',
            },
            {
                title: 'contact_address',
                content: 'Country, city blbalabla st. 15/ 45',
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.renderContactRow = this.renderContactRow.bind(this);
    }

    get initialState() {
        return {}
    }

    renderContactRow(props, index) {
        const {styles, translate} = this.props;
        return ( <Row key={`renderContactRow-${index}`} className={styles.row}>
            <Column grid={[
                [500, 33.3333333, '%'],
                [0, 20, '%']
            ]}
            >
                {translate(props.title)}
            </Column>
            <Column grid={[
                [500, 33.3333333, '%'],
                [0, 20, '%']
            ]}>
                <DecorateDots/>
            </Column>
            <Column grid={[
                [500, 33.3333333, '%'],
                [0, 60, '%']
            ]}>

                {props.content}
            </Column>
        </Row>)
    }

    render() {
        const {data, styles} = this.props;
        return (
            // <div className={styles.wrapper}>
            //     {
            //         data.map((item,index) => this.renderContactRow(item))
            //     }
            // </div>
            <Typography as={'p'}>
                {
                    data.map((item, index) => this.renderContactRow(item, index))
                }
            </Typography>
        )
    }
}

const STYLE = () => {
    return {
        // wrapper: {
        //     marginBottom: '3rem',
        //     marginTop: '3rem',
        //     color: '#FDF396',
        // },
        row: {
            marginBottom: '1.5rem',
            marginTop: '1.5rem',
        },
        colDot: {}
    }
}
const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

Contacts = connectFela(STYLE)(Contacts);
export default connect(mapStateToProps)(Contacts)

