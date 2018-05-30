import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
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

    
    /**
     * @description Modal that receives information and sends a mutation crateNotarization
     * @returns request with code answer
     * @memberof Verify
     */

class VerifyModal extends Component {

    static propTypes = {
        translate: PropTypes.func,
        open: PropTypes.bool,
        onModalToggle: PropTypes.func, 
        handleSubmit: PropTypes.func, 
        reset: PropTypes.func, 
        error: PropTypes.string, 
        pristine: PropTypes.bool, 
        submitting: PropTypes.func,
        styles: PropTypes.shape({
            VerifyModalWrapper: PropTypes.string,
            VerifyModalHeader: PropTypes.string,
            VerifyModalContent: PropTypes.string,
            VerifyModalFooter: PropTypes.string,
            VerifyModalFooterText: PropTypes.string,
        }),
    }

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.onPreLoaderToggle = this.onPreLoaderToggle.bind(this);
    }

    componentDidMount() { }

    handleChange(value) {
        console.log(value);
        this.setState({emailHashed: value});
    }

    get initialState() {
        return {emailHashed: false};
    }
    /**
     * @description Submit function. Send mutation createNotarization
     * @param {any} value 
     * @memberof VerifyModal
     */
    submit(value) {
        /**
         * @description Get param from localstorage. Set timestamp
         */
        const name = localStorage.getItem('fileHash');
        const docName = localStorage.getItem('fileName');
        const creationTime = Math.floor(Date.now() / 1000);
        localStorage.setItem('timestamp', creationTime);

        /**
         * @description Create obgect for  mutation
         */
        let obj = {name, docName, creationTime, ...value, emailHashed: this.state.emailHashed};
        if (!obj.hasOwnProperty('additionalInfo') || !obj.additionalInfo) {
            obj.additionalInfo = '';
        }
        let data = {variables: obj};
        this.setState({responseData: data});

        /**
         * @description Close modal. Set preloader
         */
        this.props.onModalToggle(false);
        this.onPreLoaderToggle(true);

        /**
         * @description Send requert to backend. Redirect to paypal
         */
        this.props.createNotarization(data).then((res) => {
            console.log(res);
            window.location.replace(`http://rc.compaero.ru/paypal/paypal`);
        }).catch((err) => {
            console.log(err);
        })
    }
    /**
     * @description set loading, preloader
     */
    onPreLoaderToggle(state) {
        console.log(open);
        this.setState({preLoader: state})
    }

    render() {
        const {open, onModalToggle, styles, handleSubmit, reset, error, pristine, submitting, translate} = this.props;
        console.log(open);
        const {preLoader} = this.state;
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
                            <Radio value={true} checked/>{translate('verify_modal_hash_email')}<br/>
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
                            <Button variant={'raised'} color={'primary'}
                                    type="submit"
                                    styles={{textAlign: 'center'}}>
                                <Image src={iconNotar} styles={{padding: '0.2rem', maxWidth: '40px'}}/>

                                <Typography as={'p'} size={'small'} textDecoration={'none'} color={'secondary'}
                                            bright={'contrastText'}>

                                    {translate('verify_modal_btn_submit')}
                                </Typography>
                            </Button>
                        </div>
                    </form>
                </Modal>

                {
                    preLoader && <PreLoader backdrop/>
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

