import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect} from "react-fela";
import { renderRoutes } from 'react-router-config';

import Header from "../../blocks/header/header";
import Footer from "../../blocks/footer/footer";
import {withRouter} from "react-router-dom";

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
        const {styles} = this.props;
        return (
            <React.Fragment>

                <div className={styles && styles.layout}>
                    <Header/>
                    <main>

                        {renderRoutes(this.props.route.routes)}
                    </main>
                </div>

                <Footer className={styles && styles.footer}>
                    Нотаризация. Copyright 2018
                </Footer>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(LayoutStyle)(Layout));