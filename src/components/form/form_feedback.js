import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm, SubmissionError} from "redux-form";
import {InputText} from "../../blocks/input-fela/input_text/input_text";
import {Textarea} from "../../blocks/input-fela/textarea";
import {Typography} from '../../blocks/typography/index';
import {Button} from "../../blocks/button/index";
import {connect as connectFela} from 'react-fela';
import gql from 'graphql-tag';
import {Mutation, graphql} from "react-apollo";
import {getTranslate, getActiveLanguage} from 'react-localize-redux';
import {connect} from "react-redux";
import {PreLoader} from "../preloader/index";
import {required} from "../../utils/validation/required";


const createFeedback = gql`mutation createFeedback(
    $name: String,
    $email: String,
    $title: String,
    $message: String,
    ){
        createFeedback(
            name:$name,
            email:$email,
            title:$title,
            message:$message,
        ) {
            name
            email
            title
            message
        }
    }`;

class FormFeedback extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.submit = this.submit.bind(this);
    }

    get initialState() {
        return {preLoader: false, error: null}
    }


    onPreLoaderToggle(state) {
        console.log(open);
        this.setState({preLoader: state})
    }

    submit(value) {
        let data = {variables: value};
        this.onPreLoaderToggle(true);
        return this.props.createFeedback(data)
            .then((res) => {
                console.log(res);
                this.onPreLoaderToggle(false);
                this.setState({status:res});
                this.props.reset();
            })
            .catch((err) => {
                this.onPreLoaderToggle(false);
                console.log('statusCode: ', err.networkError.statusCode);
                console.log('bodyText: ', err.networkError.bodyText);

                if (err.networkError.statusCode >= 400) {
                    this.setState({error: err.networkError.bodyText})
                }

            })
    }

    render() {
        const {handleSubmit, reset, pristine, submitting, styles, translate} = this.props;
        const {preLoader, error, status} = this.state;

        return (
            <form onSubmit={handleSubmit((value) => this.submit(value))}>
                <Field
                    name="name"
                    component={InputText}
                    placeholder={translate('contact_form_name')}
                    type="text"
                    validate={[required(translate('contact_error_required'))]}
                />
                <Field
                    name="email"
                    component={InputText}
                    placeholder={translate('contact_form_email')}
                    type="email"
                    validate={[required(translate('contact_error_required'))]}
                />
                <Field
                    name="title"
                    component={InputText}
                    placeholder={translate('contact_form_theme')}
                    type="text"
                    validate={[required(translate('contact_error_required'))]}
                />
                <Field
                    name="message"
                    component={InputText}
                    placeholder={translate('contact_form_message')}
                    type="textarea"
                    validate={[required(translate('contact_error_required'))]}
                />
                {
                    error && <Typography
                        as={'p'}
                        size={'medium'}
                        color={'error'}
                        bright={'dark'}
                        fontWeight={'bold'}
                        textAlign={'center'}
                    >
                        {translate('home_network_error')}
                    </Typography>
                }

                {
                    status && <Typography
                        as={'p'}
                        size={'medium'}
                        bright={'dark'}
                        fontWeight={'bold'}
                        textAlign={'center'}
                    >
                        {translate('home_success')}
                    </Typography>
                }

                <div className={styles.footer}>
                    <Button variant={"raised"} color={'primary'}
                            type="submit"
                            // disabled={pristine || submitting}
                    >
                        <Typography as={'p'} size={'small'} color={'secondary'} bright={'contrastText'}>
                            {translate('contact_submit')}
                        </Typography>
                    </Button>
                </div>
                {
                    preLoader && <PreLoader backdrop/>
                }
            </form>
        )
    }
}

const STYLE = () => {
    return {
        maxWidth: '100%',
        footer: {
            textAlign: 'right',
            marginBottom: '5rem'
        },
    }
};

FormFeedback = connectFela(STYLE)(FormFeedback);

FormFeedback = reduxForm({
    form: 'FormFeedback',
})(FormFeedback);

FormFeedback = graphql(createFeedback, {
    name: 'createFeedback',
    mutate: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
    }
})(FormFeedback);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(FormFeedback)