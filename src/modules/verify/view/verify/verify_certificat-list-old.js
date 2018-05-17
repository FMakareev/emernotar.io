import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {getTranslate, getActiveLanguage} from 'react-localize-redux';
import {Query} from "react-apollo";
import gql from 'graphql-tag';
import {PreLoader} from "../../../../components/preloader/index";
import {Typography} from "../../../../blocks/typography/index";
import VerifyItem from './verify_item';
const certificateList = gql`query($name: String){
    certificateList(name: $name) {
        name
        notarizationCreateTime
        ownerEmail
    }
}`;

class VerifyCertificatList extends Component {


    componentDidCatch(error, info) {

        console.error('componentDidCatch: ', error);
        console.info('componentDidCatch: ', info);
    }

    render() {
        const {fileHash, translate} = this.props;
        if(!fileHash){
            return null;
        }
        return (
            <Query
                query={certificateList}
                variables={{name: fileHash}}
                ssr={__SSR_FETCH__}
            >
                {
                    ({loading, error, data}) => {

                        if (loading) {
                            console.log('loading...', loading);
                            return (<PreLoader palette={'dark'}/>);
                        }
                        if (error) {
                            console.error('ERROR: ', error);
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
                        } else {
                            console.log('DATA:', data);

                            if (data && data.certificateList && data.certificateList.length) {

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
                }
            </Query>
        )
    }

}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: state.locale ? getActiveLanguage(state.locale).code : null,
    preLoader: state.preLoader.toggle
});

VerifyCertificatList = connect(mapStateToProps)(VerifyCertificatList);
export default VerifyCertificatList;