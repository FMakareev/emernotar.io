import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from "react-router-dom";
import SHA512 from 'sha512-es';
import Dropzone from "react-dropzone";
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import Cookies from 'js-cookie';
import {connect as felaConnect} from 'react-fela';
import {connect} from "react-redux";

import {Container} from "../../../../blocks/container/index";
import {Row} from "../../../../blocks/row/index";
import {Column} from "../../../../blocks/column/index";
import {TopLabel, TopLabelRow} from "../../../../components/topLabel/index";
import {Top} from "../../../../components/top/index";
import {Image} from "../../../../blocks/image/index";
import {ReactPlayer} from "../../../../blocks/video/index";

import iconVerify from '../../../../assets/icons/icon_verify.svg';
import iconArrow from '../../../../assets/icons/icon_arrow_group.svg';
import iconNotariz from '../../../../assets/icons/icon_notoriz.svg';

import iconPaypal from '../../../../assets/icons/icon_paypal.svg';
import iconPlus from '../../../../assets/icons/icon_pluse.svg';
import iconEmail from '../../../../assets/icons/icon_email.svg';
import iconClock from '../../../../assets/icons/icon_clock.svg';
import AboutItem from '../../../../components/about/about_item';

import { Typography } from "../../../../blocks/typography/index";
import { DecorateDots } from "../../../../components/decorate/index";
import { PreLoader } from '../../../../components/preloader/index';

import gql from "graphql-tag";
import { Query } from "react-apollo";
import {config} from "../../../../config";

const price = gql`
  {
    price {
        notarizationPrice
    }
  }
`;

class HomePage extends Component {
    static propTypes = {
        /** @property {arrayOf.object} instruction   */        
        instruction: PropTypes.arrayOf(PropTypes.object),
        /** @property {func} translate   */        
        translate: PropTypes.func,
        /** @property {shape} styles   */
        styles: PropTypes.shape({
            dropzone: PropTypes.string,
            dropZoneContent: PropTypes.string,
            iconRow: PropTypes.string,
            iconWrap: PropTypes.string,
            iconWrapper: PropTypes.string,
            instructionDotsWrapper: PropTypes.string,
            playerVideo: PropTypes.string,
            playerWrapper: PropTypes.string,
        }),
        /** @property {any} staticContext   */        
        staticContext: PropTypes.any,
    };

    static defaultProps = {
        instruction: [
            {
                icon: iconPlus,
                title: 'home_add_title',
                description: 'home_add_description',
            }, {
                icon: iconPaypal,
                title: 'home_pay_title',
                description: 'home_pay_description'
            }, {
                icon: iconClock,
                title: 'home_wait_title',
                description: 'home_wait_description'
            }, {
                icon: iconEmail,
                title: 'home_answer_title',
                description: 'home_answer_description',
            }
        ]
    };

    constructor() {
        super();
        this.state = this.initialState;
        this.renderVideo = this.renderVideo.bind(this);
        this.createHashFromFile = this.createHashFromFile.bind(this);
        this.addEventListenerCloseWindow = this.addEventListenerCloseWindow.bind(this);
        this.removeEventListenerCloseWindow = this.removeEventListenerCloseWindow.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
    }

    get initialState() {

        if (!isBrowser) {
            return {
                files: [],
                hash: null,
                loading: false,
                whatched: false,
            }
        } else {

            return {
                files: [],
                hash: null,
                loading: false,
                whatched: Cookies.get("video") ,
            }
        }


    }

    componentWillUnmount() {

        /**
         * @description if not - set coockie
         */
        Cookies.set("video", 'whatched');
    }

    /**
     * @descrition Get and make hash of file
     * @link https://react-dropzone.netlify.com/#examples
     * @param {any} files 
     * @memberof HomePage
     */
    createHashFromFile(files) {

        let reader = new FileReader();


        reader.onloadstart = (e) => {
            this.addEventListenerCloseWindow();
            this.setState({
                loading: true
            });
        };
        reader.onloadend = (e) => {
            this.setState({
                loading: false
            });
        };
        reader.onerror = this.errorHandler;

        reader.onload = (e) => {
            let binary = "";
            let bytes = new Uint8Array(reader.result);
            let length = bytes.byteLength;
            for (let i = 0; i < length; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            const hash = SHA512.hash(binary);

            localStorage.setItem('fileName', files[0].name);
            localStorage.setItem('fileHash', hash);

            this.setState({
                files,
                hash: hash
            });
            this.removeEventListenerCloseWindow()
        };

        reader.readAsArrayBuffer(files[0]);

    }
    /**
     * @description function that update event
     * @param {any} evt 
     * @memberof HomePage
     */
    updateProgress(evt) {
        /**
         * @description read-only property is a Boolean flag indicating if the resource concerned by the ProgressEvent 
         * has a length that can be calculated. If not, the ProgressEvent.total property has no significant value.
         */
        if (evt.lengthComputable) {
            /**
             * @description var for read loading progress
             */
            var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
            /**
             * @description if loading not 100% set procentLoaded
             */
            if (percentLoaded < 100) {
                this.setState({
                    progress: percentLoaded + '%'
                });
            }
        }
    }
    /**
     * @description function error handel
     * @param {any} evt 
     * @memberof HomePage
     */
    errorHandler(evt) {
        console.error(evt.target.error.name + ': ' + evt.target.error.message);
        /**
         * @description switch error
         */
        switch (evt.target.error.code) {
            /**
             * @description if not found - 404
             */
            case evt.target.error.NOT_FOUND_ERR:
                this.setState({
                    error: 'home_not_found_err'
                });
                break;
            /**
             * @description Can't read error
             */
            case evt.target.error.NOT_READABLE_ERR:
                this.setState({
                    error: 'home_not_readable_err'
                });
                break;
            /**
             * @description Abort
             */
            case evt.target.error.ABORT_ERR:
                this.setState({
                    error: 'home_any_error'
                });
                break;
            /**
             * @description Other error
             */
            default:
                this.setState({
                    error: 'home_any_error'
                });
                return
        }
    }

    confirmationMessageCloseWindow(e) {
        let confirmationMessage = "";
        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
    }

    addEventListenerCloseWindow() {
        console.log('run addEventListenerCloseWindow');
        window.addEventListener("beforeunload", this.confirmationMessageCloseWindow);
    }

    removeEventListenerCloseWindow() {
        console.log('run removeEventListenerCloseWindow');
        window.removeEventListener("beforeunload", this.confirmationMessageCloseWindow);
    }
    /**
     * @description render  video if user visit this page in the first time
     * @returns 
     * @memberof HomePage
     */
    renderVideo() {
        const { translate, instruction, styles, staticContext } = this.props;

        if (!isBrowser) return null;
        /**
         * @description check cookies
         */
        if (this.state.whatched !== "whatched") {

            return (
                <div className={this.props.styles.playerWrapper}>
                    <ReactPlayer
                        className={this.props.styles.playerVideo}
                        url={translate('home_youtube_link')}
                        width='100%'
                        height='100%'
                    />
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        const { hash, loading } = this.state;
        const { translate, instruction, styles, staticContext } = this.props;
        if (hash) {
            /**
             * @description if hash - set hash on local storage and redirect to verifi page
             */
            localStorage.setItem('fileHash', hash);
            return (<Redirect to={`/verify/${hash}`} />)
        }
        return (
            <Fragment>
                <Top paddingBottom={'7rem'}>
                    {translate('home_motivating_text')}
                </Top>
                <Container>
                    <Row>
                        <Column>
                            <TopLabelRow>
                                <TopLabel as={'div'} className={styles.dropZoneContent} isActive>
                                    <Dropzone className={styles.dropzone} onDrop={this.createHashFromFile}>
                                        <Typography
                                            styles={{ margin: '0 0 2rem 0' }}
                                            as={'h2'}
                                            size={'large'}
                                            fontWeight={'bold'}
                                            textAlign={'center'}
                                        >
                                            {translate('home_drugndrop')}
                                        </Typography>
                                        <div className={styles.iconRow}>
                                            <div className={styles.iconWrapper}>
                                                <div className={styles.iconWrap}>
                                                    <Image src={iconVerify} styles={{ height: '4rem' }} />
                                                </div>
                                                <Typography
                                                    as={'p'}
                                                    fontWeight={'bold'}
                                                    textAlign={'center'}
                                                >
                                                    {translate('home_verify')}
                                                </Typography>
                                            </div>
                                            <div className={styles.iconWrapper}>
                                                <Image src={iconArrow} styles={{ width: '100%', height: '4rem' }} />
                                            </div>
                                            <div className={styles.iconWrapper}>
                                                <div className={styles.iconWrap}>
                                                    <Image src={iconNotariz} styles={{ height: '4rem' }} />
                                                </div>

                                                <Typography
                                                    as={'p'}
                                                    fontWeight={'bold'}
                                                    textAlign={'center'}
                                                >
                                                    {translate('home_notarize')}
                                                </Typography>
                                            </div>
                                        </div>
                                        {
                                            this.state.error && <Typography
                                                as={'p'}
                                                size={'medium'}
                                                color={'error'}
                                                bright={'dark'}
                                                fontWeight={'bold'}
                                                textAlign={'center'}
                                            >
                                                {translate(this.state.error)}
                                            </Typography>
                                        }
                                    </Dropzone>
                                </TopLabel>
                            </TopLabelRow>
                        </Column>
                    </Row>
                </Container>
                <Container styles={{ paddingBottom: '5rem', marginTop: '-5rem' }}>
                    <Row>
                        <Query query={price} ssr={SSR_FETCH}>
                            {({loading, error, data}) => {
                                if (loading) {
                                    return <PreLoader />;
                                }
                                if (error) {
                                    return (<Typography
                                        as={'p'}
                                        size={'medium'}
                                        color={'error'}
                                        bright={'dark'}
                                        fontWeight={'bold'}
                                        textAlign={'center'}
                                    >
                                        {translate('home_network_error')}
                                    </Typography>)
                                }
                                else
                                    return (<Fragment>
                                        {
                                            instruction.map((item, index) => {
                                                let description = '';
                                                if (data.price && data.price.notarizationPrice) {
                                                    description = translate(item['description']).replace('_price', data.price.notarizationPrice)
                                                } else {
                                                    description = translate(item['description'])
                                                }


                                                if (index !== 0) {
                                                    return (
                                                        <Fragment key={`instruction-${index}`}>
                                                            <Column className={styles.instructionDotsWrapper}
                                                                styles={{ textAlign: 'center' }}
                                                                key={`instruction-${index}`} grid={[
                                                                    [768, 10, '%'],
                                                                ]}>
                                                                <DecorateDots />
                                                            </Column>
                                                            <Column key={`instruction-${index + 1}`}
                                                                grid={[
                                                                    [768, 17.5, '%'],
                                                                ]}>
                                                                <AboutItem
                                                                    title={translate(item['title'])}
                                                                    description={description}
                                                                    icon={item.icon}
                                                                />
                                                            </Column>
                                                        </Fragment>
                                                    )
                                                } else {
                                                    return (<Column key={`instruction-${index}`}
                                                        grid={[
                                                            [768, 17.5, '%'],
                                                        ]}>
                                                        <AboutItem
                                                            title={translate(item['title'])}
                                                            description={description}
                                                            icon={item.icon}
                                                        />
                                                    </Column>)
                                                }
                                            })
                                        }
                                    </Fragment>)
                            }}
                        </Query>
                    </Row>
                </Container>
                <Container>
                    {
                        this.renderVideo()
                    }
                </Container>
                {
                    this.state.loading &&
                    <PreLoader backdrop>
                        {translate('home_calculation_of_hash_preloader')}
                    </PreLoader>
                }
            </Fragment>
        )
    }
}

const STYLE = ({ theme }) => {

    return {
        dropzone: {
            width: '100%',
            height: 'auto',
            border: 'none'
        },
        dropZoneContent: {
            minWidth: '50%',
            cursor: 'pointer',
        },
        iconRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
        },
        iconWrapper: {
            display: 'inline-block',
            width: '33.3333333%',
            verticalAlign: 'top',
        },
        instructionDotsWrapper: {
            paddingTop: '1.5rem',
            display: 'inline-flex !important',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '2rem',
        },
        iconWrap: {
            width: '3rem',
            margin: '0 auto'
        },
        playerWrapper: {
            position: 'relative',
            paddingTop: '56.25%',
            maxWidth: '850px',
            margin: '0 auto',
            marginBottom: '5rem'
        },
        playerVideo: {
            position: 'absolute',
            top: 0,
            left: 0,
        }
    }
};

HomePage = felaConnect(STYLE)(HomePage);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code,
});

HomePage = connect(mapStateToProps)(HomePage);

export default HomePage