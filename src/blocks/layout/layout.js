import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect as FelaConnect} from "react-fela";
import {renderRoutes} from 'react-router-config';
import {getTranslate, getActiveLanguage} from 'react-localize-redux';

import Header from "../../blocks/header/header";
import Footer from "../../blocks/footer/footer";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Container} from "../container/index";
import {Row} from "../row/index";
import {Column} from "../column/index";

import logoCA from '../../assets/icons/logo_compaero_2018.svg'

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
        const {styles, translate} = this.props;
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
                                    marginBottom: '15px',
                                    '@media(min-width: 768px)': {
                                        display: 'inline-block',
                                        width: '50%',
                                        verticalAlign: 'middle',
                                        textAlign: 'center',
                                        marginBottom: '0',
                                    }
                                }}
                            >
                                {translate('home_copyright')}
                            </Column>
                            <Column
                                styles={{
                                    '@media(min-width: 768px)': {
                                        display: 'inline-block',
                                        width: '50%',
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
                                        width: '40px',
                                        verticalAlign: 'middle',
                                        marginRight: '10px',
                                    }}>
                                        <img src={logoCA} alt=""/>
                                    </div>
                                    CompAero
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