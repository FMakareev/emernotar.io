import React,{Component,Fragment} from 'react';
import Modal from 'react-responsive-modal';
import gql from 'graphql-tag';
import {Mutation,graphql} from "react-apollo";

import {Typography} from "../../../../blocks/typography/index";
import {connect as connectFela} from 'react-fela';
import {Field,reduxForm} from "redux-form";
import {Button} from "../../../../blocks/button/index";
import {InputText} from "../../../../blocks/input-fela/input_text/input_text";
import {Image} from "../../../../blocks/image/index";
import {Checkbox} from '../../../../blocks/input-fela/input_checkbox-group/input_checkbox-group';
import {RadioGroup,Radio} from '../../../../blocks/input-fela/input_radio-group/input_radio-group';
import {getTranslate,getActiveLanguage} from 'react-localize-redux';

import iconNotar from '../../../../assets/icons/icon_notorize-black.svg';
import {connect} from "react-redux";
import {PreLoader} from "../../../../components/preloader/index";


const createNotarization = gql`mutation createNotarization(
    $name: String!,
    $emailHashed: Boolean,
    $docName: String,
    $additionalInfo: String,
    $notarizationCreateTime: String,
    ){
        createNotarization(
            name:$name,
            emailHashed:$emailHashed,
            docName:$docName,
            additionalInfo:$additionalInfo,
            notarizationCreateTime:$notarizationCreateTime
        ) {
            name
            emailHashed
            docName
            additionalInfo
            notarizationCreateTime
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
        return {
            emailHashed: null,
            emailHashedMessage: null,
        };
    }

    submit(value) {
        console.log(value);
        // получаешь данные local storage
        const name = localStorage.getItem('fileHash');
        const docName = localStorage.getItem('fileName');
        const notarizationCreateTime = Date.now() + ''; //timestamp
        localStorage.setItem('timestamp',notarizationCreateTime);

        if (this.state.emailHashed === null) {
            this.setState({emailHashedMessage: this.props.translate('verify_modal_email_hashed_message')});
            return null
        }
        let obj = {name,docName,notarizationCreateTime,...value,emailHashed: this.state.emailHashed};
        if (!obj.hasOwnProperty('additionalInfo') || !obj.additionalInfo) {
            obj.additionalInfo = '';
        }
        let data = {variables: obj};
        this.setState({responseData: data});

        this.props.onModalToggle(false);
        this.onPreLoaderToggle(true);
        console.log(data);
        this.props.createNotarization(data).then((res) => {
            console.log(res);
            window.location.replace(`/paypal/paypal`);
        }).catch((err) => {
            console.log(err);
        })
    }

    onPreLoaderToggle(state) {
        console.log(open);
        this.setState({preLoader: state})
    }

    render() {
        const {open,onModalToggle,styles,handleSubmit,reset,error,pristine,submitting,translate} = this.props;
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
                            <div style={{
                                marginBottom: '0.5rem',
                            }}>
                                <Radio value={true}/>{translate('verify_modal_hash_email')}
                                <Typography  styles={{
                                    fontStyle: 'italic',
                                    paddingLeft: '20px',
                                }} as={'div'} size={'small'} textDecoration={'none'} color={'secondary'}
                                             bright={'contrastText'}>
                                    {translate('verify_modal_hash_email_description')}
                                </Typography>
                            </div>
                            <div style={{
                                marginBottom: '0.5rem',
                            }}>
                                <Radio value={false} checked/>{translate('verify_modal_open_email')}
                                <Typography  styles={{
                                    fontStyle: 'italic',
                                    paddingLeft: '20px',
                                }} as={'div'} size={'small'} textDecoration={'none'} color={'secondary'}
                                             bright={'contrastText'}>
                                    {translate('verify_modal_open_email_description')}
                                </Typography>
                            </div>
                            {
                                this.state.emailHashedMessage && <div>
                                    <Typography  styles={{
                                        paddingLeft: '20px',
                                    }}  as={'p'} size={'small'} textDecoration={'none'} color={'error'}
                                                bright={'main'}>
                                        {this.state.emailHashedMessage}
                                    </Typography>
                                </div>
                            }

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
                                    type="submit"
                                    styles={{textAlign: 'center'}}>
                                <Image src={iconNotar} styles={{padding: '0.2rem',maxWidth: '40px'}}/>

                                <Typography as={'p'} size={'small'} textDecoration={'none'} color={'secondary'}
                                            bright={'contrastText'}>

                                    {translate('verify_modal_btn_submit')}
                                </Typography>
                            </Button>
                        </div>

                        {/*<div className={styles.VerifyModalFooterText}>*/}
                        {/*<Typography as={'div'} color={'secondary'} bright={'contrastText'} fontWeight={'bold'}*/}
                        {/*size={'small'} textTransform={'uppercase'}>*/}
                        {/*{translate('verify_modal_info_title')}*/}
                        {/*</Typography>*/}
                        {/*<Typography as={'span'} color={'secondary'} bright={'contrastText'} size={'small'}>*/}
                        {/*{translate('verify_modal_info_text')}*/}
                        {/*</Typography>*/}
                        {/*</div>*/}
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
            margin: '0 auto',
            maxHeight: '650px'
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
};

VerifyModal = connectFela(STYLE)(VerifyModal);

VerifyModal = reduxForm({
    form: 'VerifyModal',
})(VerifyModal);

VerifyModal = graphql(createNotarization,{
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

