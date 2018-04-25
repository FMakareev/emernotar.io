import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getTranslate, getActiveLanguage, getLanguages} from 'react-localize-redux';
import {changeTranslate} from "../../store/reducers/localization/actions";
import {Store} from '../../store'
import {Button} from "../../blocks/button/index";
import {Typography} from "../../blocks/typography/index";

const mapState = state => ({
    languages: getLanguages(state.locale),
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});


class LanguageSwitcher extends Component {
    static propTypes = {}

    static defaultProps = {
        btnStyles: {
            display: 'inline-block',
            width: '1.875rem',
            minWidth: '1.875rem',
            minHeight: '1.875rem',
            height: '1.875rem',
            padding: '0',
        }
    }


    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {
            isActive: 'ENG'
        }
    }

    onChange() {

    }

    render() {
        const {btnStyles, translate, languages, setActiveLanguage, currentLanguage} = this.props;
        const {isActive} = this.state;
        console.log(this.props);
        return (
            <div style={{
                textAlign: 'center'
            }}>
                <Button
                    onClick={()=>this.setState({isActive:'ENG'})}
                    active={isActive === 'ENG'}
                    styles={btnStyles}
                    variant={'raised'}
                    color={'default'}
                >
                    <Typography textAlign={'center'} size={'small'} as={'div'} color={'inherit'} >
                        ENG
                    </Typography>
                </Button>
                <Button
                    onClick={()=>this.setState({isActive:'RU'})}
                    active={isActive === 'RU'}
                    styles={btnStyles}
                    variant={'raised'}
                    color={"default"}
                >
                    <Typography textAlign={'center'} size={'small'} as={'div'} color={'inherit'} >
                        RU
                    </Typography>
                </Button>
            </div>
        )
    }
}

export default connect(
    state => ({
        languages: getLanguages(state.locale),
        translate: getTranslate(state.locale),
        // currentLanguage: getActiveLanguage(state.locale).code
    }),
    dispatch => ({
        setActiveLanguage: (value) => {
            dispatch(changeTranslate(Store.getState(), value))
        }
    })
)(LanguageSwitcher)