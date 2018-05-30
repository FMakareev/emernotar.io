import React, {Component, Fragment} from 'react';
import {Container} from "../../blocks/container/index";
import Button from '../../blocks/button/button';
import {Top} from "../../components/top/index";
import {Column} from "../../blocks/column/index";
import {TopLabel, TopLabelRow} from "../../components/topLabel/index";
import {Typography} from '../../blocks/typography/index';
import {Image} from "../../blocks/image/index";
import { Link } from 'react-router-dom';
import {getTranslate, getActiveLanguage} from 'react-localize-redux';

import iconClose from '../../assets/icons/icon_close.svg';
import iconHome from '../../assets/icons/icon_home.svg';
import {connect} from "react-redux";

class PageNotFound extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get
    initialState() {
        return {}
    }

    render() {
        const {translate, instruction, styles, staticContext} = this.props;

        return (
            <Fragment>
                <Top paddingBottom={'7rem'}>
                    {translate('home_error')}
                </Top>
                <Container>
                            <TopLabelRow>
                                <TopLabel as={'div'} isActive>
                                    <Image styles={{maxWidth: '8rem'}} src={iconClose}/>
                                    <Typography  as={'h2'} size={'large'}
                                        fontWeight={'bold'} textAlign={'center'}
                                        textTransform={'uppercase'}
                                        color={'secondary'} bright={'contrastText'}>
                                        {translate('home_error_page_not_found')}
                                    </Typography>
                                </TopLabel>
                            </TopLabelRow>
                </Container>
                <Container styles={{marginTop: '-10rem', textAlign: 'center'}}>
                    <Column grid={[[, 70, '%'],]}>
                    <Typography as={'p'}  size={'medium'} fontWeight={'bold'} styles={{lineHeight: '2'}}
                                color={'secondary'} bright={'contrastText'}>
                        {translate('home_error_page_not_found_description_title')}<br/>
                        {translate('home_error_page_not_found_description_1')}<br/>
                        {translate('home_error_page_not_found_description_2')}<br/>
                        {translate('home_error_page_not_found_description_3')}
                    </Typography>
                    </Column>
                </Container>
                <Container styles={{paddingBottom: '5rem', textAlign: 'center'}}>
                    <Link to='/' styles={{textDecoration: 'none'}}>
                    <Button variant={"raised"} color={'primary'}>
                        <Image src={iconHome} styles={{padding: '0.2rem'}}/>
                        <Typography as={'p'} size={'small'} color={'secondary'} bright={'contrastText'}>
                            {translate('home_page_title')}
                        </Typography>
                    </Button>
                    </Link>
                </Container>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code,
});


PageNotFound = connect(mapStateToProps)(PageNotFound);
export default PageNotFound