import React, {Component, Fragment} from 'react';
import Modal from 'react-responsive-modal';
import gql from 'graphql-tag';
import {Mutation, graphql} from "react-apollo";

import {Typography} from "../../../../blocks/typography/index";
import {connect as connectFela} from 'react-fela';
import {Field, reduxForm} from "redux-form";
import {Button} from "../../../../blocks/button/index";
import {InputText} from "../../../../blocks/input-fela/input_text/input_text";
import {Image} from "../../../../blocks/image/index";
import {Checkbox} from '../../../../blocks/input-fela/input_checkbox-group/input_checkbox-group';
import {RadioGroup, Radio} from '../../../../blocks/input-fela/input_radio-group/input_radio-group';
import {getTranslate, getActiveLanguage} from 'react-localize-redux';

import iconNotar from '../../../../assets/icons/icon_notorize-black.svg';
import {connect} from "react-redux";
import {PreLoader} from "../../../../components/preloader/index";


const createNotarization = gql`mutation createNotarization(
    $name: String!,
    $emailHashed: Boolean,
    $docName: String,
    $additionalInfo: String,
    $creationTime: Int,
    ){
        createNotarization(
            name:$name,
            emailHashed:$emailHashed,
            docName:$docName,
            additionalInfo:$additionalInfo,
            creationTime:$creationTime
        ) {
            name
            emailHashed
            docName
            additionalInfo
            creationTime
        }
    }`;


class VerifyModal extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.onPreLoaderToggle = this.onPreLoaderToggle.bind(this);
    }

    componentDidMount() {
        // console.log(this.props);
    }

    // get InitialState() {
    //     return {
    //         selectedValue: true,
    //         responseData: null,
    //         emailHashed: false,
    //     };
    // }

    handleChange(value) {
        console.log(value);
        this.setState({emailHashed: value});
    }

    get initialState() {
        return {emailHashed: false};
    }

    submit(value) {
        console.log(value);
        // получаешь данные local storage
        const name = localStorage.getItem('fileHash');
        const docName = localStorage.getItem('fileName');
        const creationTime = Math.floor(Date.now() / 1000); //timestamp
        localStorage.setItem('timestamp', creationTime);


        let obj = {name, docName, creationTime, ...value, emailHashed: this.state.emailHashed};
        if (!obj.hasOwnProperty('additionalInfo') || !obj.additionalInfo) {
            obj.additionalInfo = '';
        }
        let data = {variables: obj};
        this.setState({responseData: data});

        this.onPreLoaderToggle(true);

        this.props.createNotarization(data).then((res) => {
            console.log(res);
            this.props.onModalToggle(false);
            window.location.replace(`${__ENDPOINT__}/paypal/paypal`);
        }).catch((err) => {
            console.log(err);
            this.props.onModalToggle(false);
        })
    }

    onPreLoaderToggle(state) {
        console.log(open);
        this.setState({preLoader: state})
    }

    render() {
        const {open, onModalToggle, styles, handleSubmit, reset, error, pristine, submitting, translate} = this.props;
        const {preLoader} = this.state;
        console.log(this);
        return (
            <Fragment>
                <Modal
                    open={open}
                    classNames={{modal: styles.VerifyModalWrapper}}
                    onClose={() => onModalToggle(!open)}
                    little>

                    <div className={styles.VerifyModalHeader}>
                        <Typography as={'h3'} size={'large'}
                                    fontWeight={'bold'} textAlign={'center'}
                                    textTransform={'uppercase'}
                                    color={'secondary'} bright={'contrastText'}>
                            {translate('verify_modal_title')}
                        </Typography>
                    </div>
                    <form onSubmit={handleSubmit((value) => this.submit(value))}>
                        <RadioGroup name="emailHashed"
                                    selectedValue={this.state.emailHashed}
                                    onChange={this.handleChange}
                        >
                            <Radio value={true} checked/>{translate('verify_modal_open_email')}<br/>
                            <Radio value={false}/>{translate('verify_modal_open_email')}
                        </RadioGroup>
                        <br/>
                        <label htmlFor="">
                            <Typography as={'p'} size={'small'} textDecoration={'none'} color={'secondary'}
                                        bright={'contrastText'}>
                                {translate('verify_modal_additional_label')}
                            </Typography>
                            <Field
                                name="additionalInfo"
                                component={InputText}
                                placeholder={translate('verify_modal_additional_textarea')}
                                type="textarea"
                            />
                        </label>
                        {error && <strong>{error}</strong>}

                        <div className={styles.VerifyModalFooter}>
                            {/* <Link to='/paypal/paypal' styles={{textDecoration: 'none'}}> */}
                            <Button variant={'raised'} color={'primary'}
                                    type="submit" disabled={pristine || submitting}
                                    styles={{textAlign: 'center'}}>
                                <Image src={iconNotar} styles={{padding: '0.2rem', maxWidth: '40px'}}/>

                                <Typography as={'p'} size={'small'} textDecoration={'none'} color={'secondary'}
                                            bright={'contrastText'}>

                                    {translate('verify_modal_btn_submit')}
                                </Typography>
                            </Button>
                        </div>

                        <div className={styles.VerifyModalFooterText}>
                            <Typography as={'div'} color={'secondary'} bright={'contrastText'} fontWeight={'bold'}
                                        size={'small'} textTransform={'uppercase'}>
                                {translate('verify_modal_info_title')}
                            </Typography>
                            <Typography as={'span'} color={'secondary'} bright={'contrastText'} size={'small'}>
                                {translate('verify_modal_info_text')}
                            </Typography>
                        </div>
                    </form>
                </Modal>

                {
                    preLoader && <PreLoader/>
                }
            </Fragment>);
    }
}

const STYLE = () => {
    return {
        VerifyModalWrapper: {
            backgroundColor: '#FDF396 !important',
        },
        VerifyModalHeader: {
            padding: '1rem 2rem !important',
        },
        VerifyModalContent: {
            padding: '1rem 2rem !important'
        },
        VerifyModalFooter: {
            padding: '1rem 2rem !important',
            textAlign: 'center',
        },
        VerifyModalFooterText: {
            padding: '1rem 2rem !important',
        },
    }
}

VerifyModal = connectFela(STYLE)(VerifyModal);

VerifyModal = reduxForm({
    form: 'VerifyModal',
})(VerifyModal);

VerifyModal = graphql(createNotarization, {
    name: 'createNotarization',
    mutate: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
    }
})(VerifyModal);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(VerifyModal);

