import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';

import {getTranslate,getActiveLanguage} from 'react-localize-redux';
import {connect} from "react-redux";
import queryString from 'query-string';
import { Typography } from "../../../../blocks/typography/index";
import { Container } from "../../../../blocks/container/index";
import { Wrapper } from "../../../../blocks/wrapper/index";
import {Row} from "../../../../blocks/row/index";
import {Column} from "../../../../blocks/column/index";
import {Link} from 'react-router-dom';



class Result extends Component {
    static propTypes = {
        /** @property {func} translate   */
        translate: PropTypes.func
    }

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
        console.log('constructor',this.props)
    }

    get initialState() {
        return {
            title: '',
            text: '',
            link: ''
        }
    }

    componentWillMount() {
        console.log('componentWillMount;');
    }

    componentDidMount() {
        this.setContent();
    }

    setContent = () => {
        let title, text;
        switch(this.props.match.params.message) {
            case 'success':
                title = this.props.translate('user_active_success_title');
                text = this.props.translate('user_active_success_text');
                break;
            case 'server_error':
                title = this.props.translate('user_active_server_error_title');
                text = this.props.translate('user_active_server_error_text');
                break;
            case 'email_is_exist':
                title = this.props.translate('user_active_user_exists_title');
                text = this.props.translate('user_active_user_exists_text');
                break;
            default:
                break;
        }
        this.setState({
            ...this.state,
            title: title,
            text: text,
            link: this.props.translate('user_active_link')
        })
    };

    render() {
        console.log('render', this.props);
        const { translate, instruction, styles, staticContext } = this.props;
        const { title, text, link } = this.state;

        return (
            <Fragment>

                <Container>
                    <Row>
                        <Column>
                            <Typography
                                as={'h1'}
                                size={'large'}
                                fontWeight={'bold'}
                                textAlign={'center'}
                            >
                                {title}
                            </Typography>
                            <Typography
                                as={'p'}
                                size={'medium'}
                                textAlign={'center'}
                            >
                                {text}
                            </Typography>
                            <Typography
                                as={'p'}
                                size={'medium'}
                                textAlign={'center'}
                            >
                                <Link to={'/'}>
                                    {link}
                                </Link>
                            </Typography>

                        </Column>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(Result);
