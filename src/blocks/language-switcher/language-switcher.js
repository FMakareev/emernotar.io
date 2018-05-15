import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getTranslate, getActiveLanguage, getLanguages} from 'react-localize-redux';
import {changeTranslate} from "../../store/reducers/localization/actions";
import {Store} from '../../store';
import {connect as felaConnect} from 'react-fela';
import {Button} from '../button/index';


class LanguageSwitcher extends Component {
    static propTypes = {}

    static defaultProps = {}


    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }


    render() {
        const {translate, languages, setActiveLanguage, currentLanguage, styles} = this.props;
        return (

            <ul className={styles.wrapper}>
                <li className={styles.toggle}>
                    {currentLanguage}
                </li>
                <li>
                    <ul className={styles.dropdawnWrapper}>
                        {languages.map((language, index) => (
                            <li key={`dropdawnItem-${index}`}
                                className={styles.dropdawnItem + ' ' + (language.code === currentLanguage ? styles.active : null)}
                                onClick={() => setActiveLanguage(language.code)}>
                                {language.code}
                            </li>
                        ))}
                    </ul>
                </li>

            </ul>
        )
    }
}

const STYLE = ({theme}) => {
    return {
        wrapper: {
            position: 'relative',
            padding: 0,
            margin: 0,
            border: 'none',

            // backgroundColor: 'transparent',
            // color: '#fff',

            color: theme.palette.primary.dark,
            backgroundColor: theme.palette.primary.light,

            textTransform: 'uppercase',
            fontSize: '1rem',
            fontWeight: 400,
            ':hover': {
                backgroundColor: theme.palette.default.main,
                color: theme.palette.primary.dark,
            },
            ':hover ul': {
                display: 'block',
                backgroundColor: '#FFFFFF',
                // backgroundColor: theme.palette.primary.dark,
                boxShadow: '0px 0 4px rgba(0, 0, 0, 0.25)',
            }
        },
        toggle: {
            padding: '0.5rem 1rem',
            margin: 0,
            backgroundColor: 'transparent',
            border: 'none',
            color: theme.palette.primary.dark,
            cursor: 'pointer'
        },
        dropdawnWrapper: {
            position: 'absolute',
            display: 'none',
            padding: 0,
            margin: 0,
        },
        dropdawnItem: {
            padding: '0.5rem 1rem',
            margin: 0,
            cursor: 'pointer',
            color: theme.palette.default.dark,

        },
        active: {
            padding: '0.5rem 1rem',
            color: theme.palette.primary.dark,
        }

    }
};

LanguageSwitcher = felaConnect(STYLE)(LanguageSwitcher);

export default connect(
    state => ({
        languages: getLanguages(state.locale),
        translate: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code
    }),
    dispatch => ({
        setActiveLanguage: (value) => {
            dispatch(changeTranslate(Store.getState(), value))
        }
    })
)(LanguageSwitcher)