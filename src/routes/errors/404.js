import React, {Component, Fragment} from 'react';
import {Container} from "../../blocks/container/index";
import Button from '../../blocks/button/button';
import {Top} from "../../components/top/index";
import {Column} from "../../blocks/column/index";
import {TopLabel, TopLabelRow} from "../../components/topLabel/index";
import {Typography} from '../../blocks/typography/index';
import {Image} from "../../blocks/image/index";
import { Link } from 'react-router-dom';

import iconClose from '../../assets/icons/icon_close.svg';
import iconHome from '../../assets/icons/icon_home.svg';

class PageNotFound extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get
    initialState() {
        return {}
    }

    render() {
        return (
            <Fragment>
                <Top paddingBottom={'7rem'}>
                    Error<br/> 404
                </Top>
                <Container>
                            <TopLabelRow>
                                <TopLabel isActive>
                                    <Image src={iconClose}/>
                                    <Typography styles={{padding: '2rem'}} as={'h2'} size={'large'}
                                        fontWeight={'bold'} textAlign={'center'}
                                        textTransform={'uppercase'}
                                        color={'secondary'} bright={'contrastText'}>
                                        Page is Not Found
                                    </Typography>
                                </TopLabel>
                            </TopLabelRow>
                </Container>
                <Container styles={{marginTop: '-10rem', textAlign: 'center'}}>
                    <Column grid={[[, 70, '%'],]}>
                    <Typography as={'p'} size={'medium'} fontWeight={'bold'} styles={{lineHeight: '2'}} 
                            color={'default'} bright={'contrastText'}>
                        the reasons for the emergence of the problem:<br/>
                        1. the page has been moved or renamed<br/>
                        2. the page no longer exists <br/>
                        3. URL does not correspond to reality
                    </Typography>
                    </Column>
                </Container>
                <Container styles={{paddingBottom: '5rem', textAlign: 'center'}}>
                    <Link to='/' styles={{textDecoration: 'none'}}>
                    <Button variant={"raised"} color={'primary'}>
                        <Image src={iconHome} styles={{padding: '0.2rem'}}/>
                        <Typography as={'p'} size={'small'} color={'secondary'} bright={'contrastText'}>
                            Home
                        </Typography>
                    </Button>
                    </Link>
                </Container>
            </Fragment>
        )
    }
}
export default PageNotFound