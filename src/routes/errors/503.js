import React, {Component, Fragment} from 'react';
import {Container} from "../../blocks/container/index";
import {Top} from "../../components/top/index";
import {Column} from "../../blocks/column/index";
import {TopLabel, TopLabelRow} from "../../components/topLabel/index";
import {Typography} from '../../blocks/typography/index';
import iconClose from '../../assets/icons/icon_close.svg';
import {Image} from "../../blocks/image/index";

class SevriceUnavailable extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        return (
            <Fragment>
                <Top paddingBottom={'7rem'}>
                    Error<br/> 503
                </Top>
                <Container>
                    <TopLabelRow>
                        <TopLabel isActive>
                            <Image
                                src={iconClose}
                                // styles={{}}
                            />
                            <Typography styles={{padding: '2rem'}} as={'h2'} size={'large'}
                                        fontWeight={'bold'} textAlign={'center'}
                                        textTransform={'uppercase'}
                                        color={'secondary'} bright={'contrastText'}>
                                Sevrice Unavailable
                            </Typography>
                        </TopLabel>
                    </TopLabelRow>
                </Container>
                <Container styles={{marginTop: '-10rem', textAlign: 'center'}}>
                    <Column grid={[[, 70, '%'],]}>
                        <Typography as={'p'} size={'medium'} fontWeight={'bold'} styles={{lineHeight: '2'}}
                                    color={'default'} bright={'contrastText'}>
                            The server is temporarily unable to service your request due to maintenance or capacity
                            problems. please try again later.
                        </Typography>
                    </Column>
                </Container>
            </Fragment>
        )
    }
}

export default SevriceUnavailable