import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from "redux-form";
import {InputText} from "../../blocks/input-fela/input_text/input_text";
import {Textarea} from "../../blocks/input-fela/textarea";
import {Typography} from '../../blocks/typography/index';
import {Button} from "../../blocks/button/index";
import {connect as connectFela} from 'react-fela';
import gql from 'graphql-tag';
import {Mutation, graphql} from "react-apollo";
import {getTranslate, getActiveLanguage} from 'react-localize-redux';
import {connect} from "react-redux";


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
    }

    get initialState() {
        return {}
    }

    submit(value) {
        let data = {variables: value};
        this.props.createFeedback(data).then((res)=>{
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
        // при положителном ответе закрываешь окно и редиректишь на paypal/paypal




        // this.onModalToggle(true);
    }

    render() {
        const {handleSubmit, reset, error, pristine, submitting, styles, translate} = this.props;
        return (
            <form onSubmit={handleSubmit((value) => this.submit(value))}>
                <Field
                    name="name"
                    component={InputText}
                    placeholder={translate('contact_form_name')}
                    type="text"
                />
                <Field
                    name="email"
                    component={InputText}
                    placeholder={translate('contact_form_email')}
                    type="email"
                />
                <Field
                    name="title"
                    component={InputText}
                    placeholder={translate('contact_form_theme')}
                    type="text"
                />
                <Field
                    name="message"
                    component={InputText}
                    placeholder={translate('contact_form_message')}
                    type="textarea"
                />
                <div className={styles.footer}>
                    <Button variant={"raised"} color={'primary'} 
                        type="submit" disabled={pristine || submitting}>
                        <Typography as={'p'} size={'small'} color={'secondary'} bright={'contrastText'}>
                            {translate('contact_submit')}
                        </Typography>
                    </Button>
                </div>
            </form>
        )
    }
}

const STYLE = () => {
    return {
        maxWidth: '100%',
        footer:{
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