import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {getTranslate, getActiveLanguage} from 'react-localize-redux';
import {connect} from "react-redux";
import {connect as connectFela} from 'react-fela';
// import 'react-responsive-modal/lib/react-responsive-modal.css';

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

import VerifyItem from './verify_item';
import VerifyModal from "./verify_modal";

import {Query} from "react-apollo";
import gql from 'graphql-tag';
import {PreLoader} from "../../../../components/preloader/index";


const certificate = gql`query certificate($hash: String){
    certificate(hash: $hash){
        emerhash 
    }
}`;

const certificateList = gql`query($name: String){
    certificateList(name: $name) {
        name
        notarizationDate
        ownerEmail
    }
}`;


class VerifyPage extends Component {

    static propTypes = {};

    static defaultProps = {
        match: {
            params: {
                hash: null,
            },
        }
    };
    // componentDidCatch(error, info) {
    //     // Display fallback UI
    //     this.setState({ hasError: true });
    //     // You can also log the error to an error reporting service
    //     console.log(error, info);
    // }
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onModalToggle = this.onModalToggle.bind(this);
    }

    get initialState() {
        if (!process.env.__isBrowser__) {
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
            // hash: null,
        }
    }

    onModalToggle(open) {
        console.log(open);
        this.setState({open})
    }


    componentDidMount() {

    }

    render() {
        const {translate, styles} = this.props;
        const {open} = this.state;
        console.log(this.props);
        // return (<div>
        //     hello
        // </div>)

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
                                        <Link to='/' styles={{textDecoration: 'none'}}>
                                            <Button variant={'raised'} color={'primary'}>
                                                <Image src={iconHome} styles={{padding: '0.2rem'}}/>
                                                <Typography as={'p'} size={'small'} textDecoration={'none'}
                                                            color={'secondary'} bright={'contrastText'}>
                                                    {translate('verify_home')}
                                                </Typography>
                                            </Button>
                                        </Link>
                                        <Button onClick={() => this.onModalToggle(true)} variant={'raised'}
                                                color={'primary'}>
                                            <Image src={iconNotar} styles={{padding: '0.2rem', height: '2.3rem'}}/>
                                            <Typography as={'p'} size={'small'}
                                                        color={'secondary'} bright={'contrastText'}
                                                        styles={{marginRight: '0.5rem'}}>
                                                {translate('verify_notarize')}
                                            </Typography>
                                        </Button>
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
                                                    as={'h3'}
                                                    size={'large'}
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
