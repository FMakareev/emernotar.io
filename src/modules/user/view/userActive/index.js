import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {getTranslate, getActiveLanguage} from 'react-localize-redux';
import {connect} from "react-redux";
import {Typography} from "../../../../blocks/typography/index";
import {Container} from "../../../../blocks/container/index";
import {Column} from "../../../../blocks/column/index";
import {Link} from 'react-router-dom';
import {Top} from "../../../../components/top";
import {TopLabel, TopLabelRow} from "../../../../components/topLabel";
import {Image} from "../../../../blocks/image";
import iconHome from '../../../../assets/icons/icon_home.svg';
import {Button} from "../../../../blocks/button";


class Result extends Component {
    static propTypes = {
        /** @property {func} translate   */
        translate: PropTypes.func
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
        console.log('constructor', this.props)
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

    }

    setContent = () => {
        switch (this.props.match.params.message) {
            case 'success':
                return {
                    ...this.state,
                    title: 'user_active_success_title',
                    text: 'user_active_success_text',
                    link: 'user_active_link'
                };
            case 'server_error':

                return {
                    ...this.state,
                    title: 'user_active_server_error_title',
                    text: 'user_active_server_error_text',
                    link: 'user_active_link'
                };
            case 'email_is_exist':
                return {
                    ...this.state,
                    title: 'user_active_user_exists_title',
                    text: 'user_active_user_exists_text',
                    link: 'user_active_link'
                };
            default:
                return {
                    ...this.state,
                    title: 'home_error_page_not_found',
                    text: 'home_error_page_not_found_description_title',
                    link: 'user_active_link'
                };
        }
    };

    render() {
        console.log('render', this.props);
        const {translate} = this.props;
        const {title, text, link} = this.setContent();

        return (
            <Fragment>
                <Top paddingBottom={'7rem'}/>
                <Container>
                    <TopLabelRow >
                        <TopLabel styles={{maxWidth: '600px'}} as={'div'} isActive>
                            {/*<Image styles={{maxWidth: '8rem'}} src={iconClose}/>*/}
                            <Typography
                                as={'h2'}
                                size={'large'}
                                fontWeight={'bold'}
                                textAlign={'center'}
                                textTransform={'uppercase'}
                                color={'secondary'}
                                bright={'contrastText'}
                            >
                                {translate(title)}
                            </Typography>
                        </TopLabel>
                    </TopLabelRow>
                </Container>
                <Container styles={{marginTop: '-5rem', textAlign: 'center'}}>
                    <Column grid={[[, 70, '%']]}>
                        <Typography
                            as={'p'}
                            size={'medium'}
                            fontWeight={'bold'}
                            styles={{lineHeight: '2'}}
                            color={'secondary'}
                            bright={'contrastText'}
                            textAlign={'center'}
                        >
                            {translate(text)}
                        </Typography>
                    </Column>
                </Container>
                <Container styles={{paddingBottom: '5rem', textAlign: 'center'}}>
                    <Link to='/' styles={{textDecoration: 'none'}}>
                        <Button variant={"raised"} color={'primary'}>
                            <Image src={iconHome} styles={{padding: '0.2rem'}}/>
                            <Typography as={'p'} size={'small'} color={'secondary'} bright={'contrastText'}>
                                {translate(link)}
                            </Typography>
                        </Button>
                    </Link>
                </Container>

                {/*<Container>*/}
                {/*<Row>*/}
                {/*<Column>*/}
                {/*<Typography*/}
                {/*as={'h1'}*/}
                {/*size={'large'}*/}
                {/*fontWeight={'bold'}*/}
                {/*textAlign={'center'}*/}
                {/*>*/}
                {/*{translate(title)}*/}
                {/*</Typography>*/}
                {/*<Typography*/}
                {/*as={'p'}*/}
                {/*size={'medium'}*/}
                {/*textAlign={'center'}*/}
                {/*>*/}
                {/*{translate(text)}*/}
                {/*</Typography>*/}
                {/*<Typography*/}
                {/*as={'p'}*/}
                {/*size={'medium'}*/}
                {/*textAlign={'center'}*/}
                {/*>*/}
                {/*<Link to={'/'}>*/}
                {/*{translate(link)}*/}
                {/*</Link>*/}
                {/*</Typography>*/}

                {/*</Column>*/}
                {/*</Row>*/}
                {/*</Container>*/}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(Result);
