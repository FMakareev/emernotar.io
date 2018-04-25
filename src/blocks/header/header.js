import React, {Component} from 'react';
import Navigation from "../navigation/navigation";
import {createComponentWithProxy} from 'react-fela'

import {Container} from '../container/index';
import {Row} from '../row/index';
import {Column} from '../column/index';
import {Typography} from '../typography/index';
import {Image} from "../image/index";
// import Logo from '../logo/logo'

import iconLogo from '../../assets/icons/icon_logo.svg';
import {Link} from 'react-router-dom';

import gql from "graphql-tag";
import {Query} from "react-apollo";

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
        const {className} = this.props;

        return (
            <div className={className}>
                <Container maxWidth={'100%'}>
                    <Row alignItems={'center'} justifyContent={'spaceBetween'}
                         styles={{
                             '@media (max-width: 810px)': {
                                 display: 'block'
                             }
                         }}>
                        <Column>
                            <Link to='/' style={{textDecoration: 'none'}}>
                                <Image src={iconLogo} alt="logo" styles={{
                                    height: '2rem',
                                    // margin: '1rem 0.5rem',
                                    '@media (min-width: 900px)': { height: '3rem'},
                                    '@media (max-width: 810px)': {margin: 'auto'}
                                }}/>
                            </Link>
                        </Column>
                        <Column>
                            <Query query={price}  ssr={__SSR_FETCH__}>
                                {({loading, error, data}) => {
                                    console.log(error);
                                    console.log(data);
                                    if (loading) return '';
                                    if (error) return '';
                                    else
                                        return (
                                            <Typography as={'p'} size={'small'} textAlign={'center'}
                                                        textTransform={'uppercase'} color={'default'}
                                                        bright={'contrastText'}>
                                                Rate {data.price && data.price.notarizationPrice} $
                                            </Typography>
                                        );
                                }}
                            </Query>
                        </Column>
                        <Column>
                            <Navigation/>
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default createComponentWithProxy(HeaderStyle, Header)
