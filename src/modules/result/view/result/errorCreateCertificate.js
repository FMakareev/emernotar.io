import React,{Component,Fragment} from 'react';
import {Top} from "../../../../components/top/index";
import {Container} from "../../../../blocks/container/index";
import {TopLabel,TopLabelRow} from "../../../../components/topLabel/index";
import {Typography} from "../../../../blocks/typography/index";
import {Row} from "../../../../blocks/row/index";
import {Link} from "react-router-dom";
import {Button} from "../../../../blocks/button/index";
import {Image} from "../../../../blocks/image/index";
import iconHome from '../../../../assets/icons/icon_home.svg';


export const ErrorCreateCertificate = ({
                                           translate,
                                           title = 'static_error_data_integrity_title',
                                           description = 'static_error_data_integrity_description',

}) => (<Fragment>
    <Top paddingBottom={'7rem'}>
        {translate('home_error')}
    </Top>
    <Container>
        <TopLabelRow>
            <TopLabel styles={{maxWidth: '40rem'}} isActive>
                <Typography styles={{padding: '0.5rem'}} as={'h2'} size={'large'}
                            fontWeight={'bold'} textAlign={'center'}
                            textTransform={'uppercase'}
                            color={'secondary'} bright={'contrastText'}>
                    {translate(title)}
                </Typography>
                <Typography styles={{padding: '0.5rem'}} as={'p'} textAlign={'left'}
                            color={'secondary'} bright={'contrastText'}>
                    {translate(description)}

                </Typography>
                <Row>
                    <Link to='/contact' style={{textDecoration: 'none',display: 'block',textAlign: 'center'}}>
                        <Button styles={{textDecoration: 'none'}} size={'medium'} variant={'raised'}
                                color={'primary'}>
                            <Image src={iconHome} styles={{padding: '0.2rem'}}/>
                            <Typography as={'p'} size={'small'} color={'secondary'} bright={'contrastText'}>
                                {translate('contact_our_contacts')}
                            </Typography>
                        </Button>
                    </Link>
                </Row>
            </TopLabel>
        </TopLabelRow>
    </Container>
</Fragment>);

export default ErrorCreateCertificate;