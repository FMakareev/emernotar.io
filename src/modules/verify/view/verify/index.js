import React, {Component, Fragment} from 'react';
import {getTranslate, getActiveLanguage} from 'react-localize-redux';
import {connect} from "react-redux";
import {connect as connectFela} from 'react-fela';

import {Container} from "../../../../blocks/container/index";
import {Row} from "../../../../blocks/row/index";
import {Column} from "../../../../blocks/column/index";
import {Top} from "../../../../components/top/index";
import {TopLabel, TopLabelRow} from "../../../../components/topLabel/index";
import {Typography} from "../../../../blocks/typography/index";
import {Image} from "../../../../blocks/image/index";
import {Button} from "../../../../blocks/button/index";
import {Link} from 'react-router-dom';
import qp from 'query-parse';
import iconHome from '../../../../assets/icons/icon_home.svg';
import iconNotar from '../../../../assets/icons/icon_notorize-black.svg';
import iconVerify from '../../../../assets/icons/icon_verify.svg';

import VerifyModal from "./verify_modal";

import gql from 'graphql-tag';
import VerifyCertificatList from "./verify_certificat-list";


const certificate = gql`query certificate($hash: String){
    certificate(hash: $hash){
        emerhash 
    }
}`;


    /**
     * @description Get hash and returns list of notarization file with the same hash or no, if there are not. 
     * @returns List of notarization file with the same hash, if there are.
     * @memberof Verify
     */

class VerifyPage extends Component {
    static propTypes = {
        /** @property {func} translate   */
        translate: PropTypes.func,
        /** @property {shape} shape   */
        styles: PropTypes.shape({
            topLabel: PropTypes.string,
            topLabelIcon: PropTypes.string,
        }),
        /** @property {string} hash   */
        hash: PropTypes.string
    }

    static defaultProps = {
        match: {
            params: {
                hash: null,
            },
        }
    };
    
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onModalToggle = this.onModalToggle.bind(this);
    }

    get initialState() {
        if (!process.env.isBrowser) {
            return {
                open: false,
                hasError: false,
                preLoader: false,
            }
        }
        return {
            open: false,
            hasError: false,
            hash: qp.toObject(window.location.search.substring(1)).hash,
        }
    }

    onModalToggle(open) {
        console.log(open);
        this.setState({open})
    }

    componentDidMount() { }

    render() {
        const {translate, styles} = this.props;
        const {open} = this.state;
        return (
            <Fragment>
                <Top paddingBottom={'9rem'}>
                    {translate('verify_verify')}
                </Top>
                <Container>
                    <Row>
                        <Column>
                            <TopLabelRow>
                                <TopLabel
                                    as={'div'} isActive>
                                    <Typography styles={{margin: '0 0 2rem 0'}} as={'h2'} size={'large'}
                                                fontWeight={'bold'} textAlign={'center'}
                                                color={'secondary'} bright={'contrastText'}>
                                        {translate('verify_file_hash')}
                                    </Typography>
                                    <Image
                                        className={styles.topLabelIcon}
                                        src={iconVerify}
                                    />
                                    <Row justifyContent={'spaceBetween'}>
                                        <Column styles={{display: 'inline-block'}}>
                                            <Link to='/' styles={{textDecoration: 'none'}}>
                                                <Button variant={'raised'} color={'primary'}>
                                                    <Image src={iconHome} styles={{padding: '0.2rem'}}/>
                                                    <Typography as={'p'} size={'small'} textDecoration={'none'}
                                                                color={'secondary'} bright={'contrastText'}>
                                                        {translate('verify_home')}
                                                    </Typography>
                                                </Button>
                                            </Link>
                                        </Column>
                                        <Column styles={{display: 'inline-block'}}>
                                            <Button onClick={() => this.onModalToggle(true)} variant={'raised'}
                                                    color={'primary'}>
                                                <Image src={iconNotar} styles={{padding: '0.2rem', height: '2.3rem'}}/>
                                                <Typography as={'p'} size={'small'}
                                                            color={'secondary'} bright={'contrastText'}
                                                            styles={{marginRight: '0.5rem'}}>
                                                    {translate('verify_notarize')}
                                                </Typography>
                                            </Button>
                                        </Column>
                                    </Row>
                                </TopLabel>
                            </TopLabelRow>
                        </Column>
                    </Row>
                </Container>
                <Container styles={{maxWidth: '768px !important', marginBottom: '5rem', marginTop: '-5rem'}}>
                    <Row>
                        <Column>
                            {
                                this.props.match.params.hash &&
                                <Query query={certificateList} variables={{name: this.props.match.params.hash}}
                                       ssr={__SSR_FETCH__}>
                                    {
                                        ({loading, error, data}) => {
                                            console.log(loading, error, data);

                                            if (loading) {
                                                return (<PreLoader palette={'dark'}/>);
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
                                            if (data.certificateList && data.certificateList.length) {

                                                return (
                                                    <Fragment>
                                                        <Typography
                                                            as={'h3'}
                                                            size={'large'}
                                                            fontWeight={'bold'}
                                                            textAlign={'center'}
                                                        >
                                                            {translate('verify_file_is_not_unique')}<br/>
                                                            {translate('verify_matches_found')}: {data.certificateList.length}
                                                        </Typography>

                                                        {
                                                            data.certificateList.map((data, index) => <VerifyItem
                                                                data={data} key={`VerifyItem-${index}`}/>)
                                                        }
                                                    </Fragment>
                                                );
                                            } else {
                                                return (
                                                    <Fragment>
                                                        <Typography
                                                            styles={{marginBottom: '5rem'}}
                                                            as={'h3'}
                                                            size={'large'}
                                                            fontWeight={'bold'}
                                                            textAlign={'center'}
                                                        >
                                                            {translate('verify_not_matches_found')}
                                                        </Typography>

                                                    </Fragment>
                                                );
                                            }
                                        }
                                    }
                                </Query>
                            }
                        </Column>
                    </Row>
                </Container>
                <VerifyModal open={open} onModalToggle={this.onModalToggle}/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: state.locale ? getActiveLanguage(state.locale).code : null,
    preLoader: state.preLoader.toggle
});

const STYLE = () => {
    return {
        topLabel: {
            padding: '2rem 5rem !important',
        },
        topLabelIcon: {
            marginBottom: '3rem !important',
            height: '6.25rem',
        }
    }
};

VerifyPage = connectFela(STYLE)(VerifyPage);
VerifyPage = connect(mapStateToProps)(VerifyPage);

export default VerifyPage;
