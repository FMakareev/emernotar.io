import React, {Component, Fragment} from 'react';
import {Redirect, withRouter} from "react-router-dom";
import SHA512 from 'sha512-es';
import Dropzone from "react-dropzone";
import {getTranslate, getActiveLanguage} from 'react-localize-redux';
import Cookies from 'js-cookie';
import {connect as felaConnect} from 'react-fela';

import {Container} from "../../../../blocks/container/index";
import {Row} from "../../../../blocks/row/index";
import {Column} from "../../../../blocks/column/index";
import {connect} from "react-redux";
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

import {Typography} from "../../../../blocks/typography/index";
import {DecorateDots} from "../../../../components/decorate/index";

class HomePage extends Component {
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
    }

    constructor() {
        super();
        this.state = this.initialState;
        this.renderVideo = this.renderVideo.bind(this);
    }

    get initialState() {
        return {
            files: [],
            hash: null
        }
    }

    onDrop(files) {
        console.log(files);
        localStorage.setItem('fileName', files[0].name);
        let reader = new FileReader();

        reader.onload = (e) => {
            console.log(reader.result);
            this.setState({hash: SHA512.hash(reader.result)})
        };

        reader.readAsBinaryString(files[0]);

        this.setState({
            files
        });
    }

    componentDidMount() {
    }

    onChange(event) {
        console.log(event.target);
    }

    renderVideo() {
        if (!process.env.__isBrowser__) return null;

        if (!Cookies.get("video")) {
            Cookies.set("video", 'whatched');
            return (
                <div className={this.props.styles.playerWrapper}>
                    <ReactPlayer
                        className={this.props.styles.playerVideo}
                        url='https://www.youtube.com/watch?v=N3Vt2VXO8AU&t'
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
        const {hash} = this.state;
        const {translate, instruction, styles} = this.props;


        if (hash) {
            localStorage.setItem('fileHash', hash);
            return (<Redirect to={`/verify/${hash}`}/>)
        }
        return (
            <Fragment>
                <Top paddingBottom={'7rem'}
                >
                    {translate('home_motivating_text')}
                </Top>
                <Container>
                    <Row>
                        <Column>
                            <TopLabelRow>
                                <TopLabel as={'div'} className={styles.dropZoneContent} isActive>
                                    <Dropzone className={styles.dropzone} onDrop={this.onDrop.bind(this)}>
                                        <Typography
                                            styles={{margin: '0 0 2rem 0'}}
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
                                                    <Image src={iconVerify} styles={{height: '4rem'}}/>
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
                                                <Image src={iconArrow} styles={{width: '100%', height: '4rem'}}/>
                                            </div>
                                            <div className={styles.iconWrapper}>
                                                <div className={styles.iconWrap}>
                                                    <Image src={iconNotariz} styles={{height: '4rem'}}/>
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
                                    </Dropzone>
                                </TopLabel>
                            </TopLabelRow>
                        </Column>
                    </Row>
                </Container>
                <Container styles={{paddingBottom: '5rem', marginTop: '-5rem'}}>
                    <Row>
                        {
                            instruction.map((item, index) => {

                                if (index !== 0) {
                                    return (
                                        <Fragment key={`instruction-${index}`}>
                                            <Column className={styles.instructionDotsWrapper}
                                                    styles={{textAlign: 'center'}}
                                                    key={`instruction-${index}`} grid={[
                                                [768, 10, '%'],
                                            ]}>
                                                <DecorateDots/>
                                            </Column>
                                            <Column key={`instruction-${index + 1}`}
                                                    grid={[
                                                        [768, 17.5, '%'],
                                                    ]}>
                                                <AboutItem
                                                    title={translate(item['title'])}
                                                    description={translate(item['description'])}
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
                                            description={translate(item['description'])}
                                            icon={item.icon}
                                        />
                                    </Column>)
                                }
                            })
                        }
                    </Row>
                </Container>
                <Container>
                    {
                        this.renderVideo()
                    }
                </Container>
            </Fragment>

        )
    }
}

const STYLE = ({theme}) => {

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
            marginBottom: '2rem'
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
    currentLanguage: getActiveLanguage(state.locale).code
});


export default withRouter(connect(mapStateToProps)(HomePage));

