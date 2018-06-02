import React,{Component,Fragment} from 'react';
import {connect} from "react-redux";
import {getTranslate,getActiveLanguage} from 'react-localize-redux';
import {graphql} from "react-apollo";
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



    render() {
        const {translate,loading,error,data} = this.props;
        console.log(this.props);
        if (loading) {
            console.log('loading...',loading);
            return (<PreLoader palette={'dark'}/>);
        }
        if (error) {
            console.error('ERROR: ',error);
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
                        data.certificateList.map((item,index) => <VerifyItem
                            data={item} key={`VerifyItem-${index}`}/>)
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
                    <VerifyItem/>
                </Fragment>
            );
        }
    }

}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: state.locale ? getActiveLanguage(state.locale).code : null,
    preLoader: state.preLoader.toggle
});

VerifyCertificatList = connect(mapStateToProps)(VerifyCertificatList);

VerifyCertificatList = graphql(certificateList,{

    options: (ownProps) => {
        console.log('ownProps:',ownProps);
        return {
            // ssr: __SSR_FETCH__,
            variables: {
                name: ownProps.fileHash
            }
        }
    },
    mutate: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
    }
})(VerifyCertificatList);

export default VerifyCertificatList;