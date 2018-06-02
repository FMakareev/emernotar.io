import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect as FelaConnect} from "react-fela";
import {renderRoutes} from 'react-router-config';
import {getTranslate,getActiveLanguage} from 'react-localize-redux';

import Header from "../../blocks/header/header";
import Footer from "../../blocks/footer/footer";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Container} from "../container/index";
import {Row} from "../row/index";
import {Column} from "../column/index";

import logoCA from '../../assets/icons/logo_compaero_2018.svg'
import appleStore from '../../assets/icons/apple_store.svg';
import googlePlay from '../../assets/icons/google_play.svg';
import {Typography} from "../typography/index";

const LayoutStyle = ({theme}) => {
    return ({
        layout: {
            ...theme.layout,
        },
        footer: {
            ...theme.footer,
        }
    })
}


class Layout extends Component {
    static propTypes = {};

    render() {
        const {styles,translate} = this.props;
        return (
            <React.Fragment>

                <div className={styles && styles.layout}>
                    <Header/>
                    <main>
                        {renderRoutes(this.props.route.routes)}
                    </main>
                </div>

                <Footer className={styles && styles.footer}>
                    <Container>
                        <Row>
                            <Column
                                styles={{
                                    verticalAlign: 'middle',
                                    display: 'inline-block',
                                    width: '50%',
                                    marginBottom: '15px',
                                    '@media(min-width: 768px)': {
                                        width: '10%',
                                        marginBottom: '0',
                                    }
                                }}
                            >
                                <img style={{width: '100%'}} src={appleStore} alt="download from app store"/>
                            </Column>
                            <Column
                                styles={{
                                    verticalAlign: 'middle',
                                    display: 'inline-block',
                                    width: '50%',
                                    marginBottom: '15px',
                                    '@media(min-width: 768px)': {
                                        width: '10%',
                                        marginBottom: '0',
                                    }
                                }}
                            >
                                <img style={{width: '100%'}} src={googlePlay} alt="download from google play"/>
                            </Column>
                            <Column
                                styles={{
                                    marginBottom: '15px',
                                    '@media(min-width: 768px)': {
                                        display: 'inline-block',
                                        width: '40%',
                                        verticalAlign: 'middle',
                                        textAlign: 'center',
                                        marginBottom: '0',
                                    }
                                }}
                            >

                                <Typography
                                    as={'span'}
                                    size={'medium'}
                                    color={'default'}
                                    bright={'contrastText'}
                                >
                                    {translate('home_copyright')}
                                </Typography>
                            </Column>
                            <Column
                                styles={{
                                    '@media(min-width: 768px)': {
                                        display: 'inline-block',
                                        width: '40%',
                                        verticalAlign: 'middle',
                                        textAlign: 'center'
                                    }
                                }}
                            >
                                <a target="_blank" style={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                }} href="https://compaero.ru">
                                    <div style={{
                                        display: 'inline-block',
                                        verticalAlign: 'middle',
                                        width: '40px',
                                        height: '40px',
                                        marginRight: '10px',
                                    }}>
                                        <img style={{border: 'none'}} src={logoCA} alt=""/>
                                    </div>
                                    <Typography
                                        as={'span'}
                                        size={'medium'}
                                        color={'default'}
                                        bright={'contrastText'}
                                        styles={{
                                            display: 'inline-block',
                                            verticalAlign: 'middle',
                                        }}
                                    >
                                        CompAero
                                    </Typography>
                                </a>
                            </Column>
                        </Row>
                    </Container>
                </Footer>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});
Layout = FelaConnect(LayoutStyle)(Layout);
Layout = connect(mapStateToProps)(Layout);

export default withRouter(Layout);