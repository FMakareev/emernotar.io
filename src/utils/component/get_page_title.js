import React, {Component} from 'react';
import {getTranslate} from 'react-localize-redux';

export const getPageTitle = ({Store}) => WrappedComponent => {

    return class GetPageTitle extends Component {

        constructor(props) {
            super(props);
        }


        componentDidMount() {
            if (__isBrowser__) {
                try {
                    const translate = getTranslate(Store.getState().locale);
                    let $Title = document.getElementsByTagName('title')[0];
                    let currentTitle = $Title.innerHTML;
                    let newTitle = translate(this.props.route.name);
                    if(currentTitle !== newTitle){
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
    }

}