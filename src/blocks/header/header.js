import React, {Component} from 'react';
import NavigationTopBurger from "../navigation/navigation_top-burger";

import {createComponentWithProxy} from 'react-fela'
import {getTranslate, getActiveLanguage} from 'react-localize-redux';

import {Container} from '../container/index';
import {Row} from '../row/index';
import {Column} from '../column/index';
import {Typography} from '../typography/index';
import {Image} from "../image/index";

import iconLogo from '../../assets/icons/icon_logo.svg';
import {NavLink} from 'react-router-dom';

import gql from "graphql-tag";
import {Query} from "react-apollo";
import {connect} from "react-redux";

const price = gql`
  {
    price {
        notarizationPrice
    }
  }
`;

const HeaderStyle = ({theme}) => ({
    position: 'relative',
    ...theme.header,
})

class Header extends Component {
    render() {
        const {translate,className} = this.props;

        return (
            <div className={className}>
                <Container maxWidth={'100%'}>
                    <Row alignItems={'center'}
                         justifyContent={'spaceBetween'}
                         styles={{
                             '@media (max-width: 810px)': {
                                 display: 'block'
                             }
                         }}>
                        <Column>
                            <NavLink to='/' style={{textDecoration: 'none'}}>
                                <Image src={iconLogo} alt="logo" styles={{
                                    height: '2rem',
                                    // margin: '1rem 0.5rem',
                                    '@media (min-width: 900px)': { height: '3rem'},
                                    '@media (max-width: 810px)': {margin: 'auto'}
                                }}/>
                            </NavLink>
                        </Column>
                        <Column>
                            <Query query={price}  ssr={__SSR_FETCH__}>
                                {({loading, error, data}) => {
                                    if (loading) return '';
                                    if (error) return '';
                                    else
                                        return (
                                            <Typography as={'p'} size={'small'} textAlign={'center'}
                                                        textTransform={'uppercase'} color={'default'}
                                                        bright={'contrastText'}>
                                                {translate('home_rate')} {data.price && data.price.notarizationPrice} $
                                            </Typography>
                                        );
                                }}
                            </Query>
                        </Column>
                        <Column>
                            <NavigationTopBurger/>
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    }
}



Header = createComponentWithProxy(HeaderStyle, Header);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code,
    preLoader: state.preLoader.toggle
});
Header = connect(mapStateToProps)(Header);
export default Header
