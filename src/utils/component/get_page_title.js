import React, {Component} from 'react';
import {connect} from "react-redux";
import {getTranslate, getActiveLanguage} from 'react-localize-redux';


export const getPageTitle = ({Store}) => WrappedComponent => {
    const mapStateToProps = state => ({
        translate: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code,
        preLoader: state.preLoader.toggle
    });

    return connect(mapStateToProps)(class GetPageTitle extends Component {

        constructor(props) {
            super(props);
            this.state = this.initialState;
            this.onChangePageTitle = this.onChangePageTitle.bind(this);
        }

        get initialState() {
            return {
                storeUnSubscribe: null,
            }
        }

        componentDidMount() {
            this.onChangePageTitle();
            this.setState({
                storeUnSubscribe: Store.subscribe(() => {
                    this.onChangePageTitle();
                })
            })
        }

        componentWillUnmount() {
            this.state.storeUnSubscribe();
        }
        onChangePageTitle() {
            if (__isBrowser__) {
                try {
                    const translate = getTranslate(Store.getState().locale);
                    let $Title = document.getElementsByTagName('title')[0];

                    let currentTitle = $Title.innerHTML;
                    let newTitle = translate(this.props.route.name);
                    if (currentTitle !== newTitle) {
                        $Title.innerHTML = newTitle;
                    }
                } catch (err) {
                    console.error(err);
                }
            }
        }

        render() {
            const {staticContext, route} = this.props;
            if (staticContext && route) {
                staticContext.pageTitle = route.name;
            }
            return (
                <WrappedComponent
                    {...this.props}
                />
            )
        }
    })

}