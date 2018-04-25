import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-fela';
import {Field, reduxForm} from "redux-form";
import {InputText} from "../../blocks/input/input_text/input_text";
import {Typography} from "../../blocks/typography/index";
import {Button} from "../../blocks/button/index";
import {IconArrowLongRight} from "../icons/index";
import {InputCheck} from "../../blocks/input";

const NavigationSidebarFeedbackStyle = () => {
    return {
        wrapper: {
            padding: '6.25rem 5rem 1.25rem 1.25rem',
            minWidth: '400px',
        },
        title: {
            width: '9.375rem',
        },
        footer: {
            textAlign: 'right'
        }
    }
};

class NavigationSidebarFeedback extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.submit = this.submit.bind(this);
    }

    get initialState() {
        return {}
    }

    submit(value) {
        console.log(value);
    }

    render() {
        const {styles, className, handleSubmit, reset, error, pristine, submitting} = this.props;
        return (
            <form onSubmit={handleSubmit((value) => this.submit(value))}>
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        <Typography color={'primary'} bright={'main'} size={'large'} textTransform={'uppercase'}
                                    as={'h3'}>
                            написать
                            письмо
                        </Typography>
                    </div>
                    <div>
                        <Field
                            name="user"
                            component={InputText}
                            placeholder={'Контактное лицо'}
                            type="text"
                        />
                        <Field
                            name="email"
                            component={InputText}
                            placeholder={'e-mail'}
                            type="email"
                        />
                        <Field
                            name="message"
                            component={InputText}
                            placeholder={'Ваше сообщение'}
                            type="text"
                        />
                    </div>
                    <div>
                        <Field
                            name="checkbox"
                            component={InputCheck}
                            label={'Отправляя данную форму, Вы соглашаетесь с политикой конфиденциальности.'}
                            type="checkbox"
                            // validate={[required]}
                        />
                    </div>
                    <footer className={styles.footer} >
                        <Button variant={'raised'} color={'primary'}>
                            <IconArrowLongRight styles={{
                                width: '1.313rem',
                                height: '0.875rem',
                            }}/>
                        </Button>
                    </footer>
                </div>
            </form>
        )
    }
}

NavigationSidebarFeedback = reduxForm({
    form: 'NavigationSidebarFeedback',
})(NavigationSidebarFeedback)

export default connect(NavigationSidebarFeedbackStyle)(NavigationSidebarFeedback)