import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect as FelaConnect} from "react-fela";
import { renderRoutes } from 'react-router-config';
import {getTranslate, getActiveLanguage} from 'react-localize-redux';

import Header from "../../blocks/header/header";
import Footer from "../../blocks/footer/footer";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

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
                    {translate('home_copyright')}
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