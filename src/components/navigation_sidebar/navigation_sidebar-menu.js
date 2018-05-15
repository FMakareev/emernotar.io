import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy} from 'react-fela'
import {NavigationSidebarMenuList} from "./index";
import {Button} from "../../blocks/button/index";
import {Typography} from "../../blocks/typography/index";
import {IconArrowLongRight, IconLogoCompAero} from "../icons/index";
import {Wrapper} from "../../blocks/wrapper/index";

const NavigationSidebarMenuStyle = ({theme, ...props}) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minWidth: '400px',
        height: '100%',
        padding: '100px 20px 20px 20px',
        ...(theme ? {
            backgroundColor: theme.palette['default']['main']
        } : null),
    }
};

class NavigationSidebarMenu extends Component {

    static propTypes = {};

    static defaultProps = {
        iconStyle: {
            width: '16px',
            height: '12px',
            marginRight: '-15px',
            position: 'relative',
            left: '-20px',
            opacity: 0
        },
        menu: [
            {
                title: 'Главная страница',
                link: '#!'
            }, {
                title: 'О компании',
                link: 'about'
            }, {
                title: 'Разработка web-сервисов, web-порталов и приложений',
                link: 'web'
            }, {
                title: 'Создание мобильных приложений для платформ iOS и Android',
                link: 'phone'
            }, {
                title: 'Реализация проектов с применением блокчейн- технологии',
                link: 'blockchain'
            }, {
                title: 'Портфолио',
                link: 'workout'
            }, {
                title: 'Контакты',
                link: 'workout'
            }, {
                title: 'новости',
                link: 'workout'
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        const {className, iconStyle, menu,toggleMenu} = this.props;

        return (
            <div className={className}>
                <div>
                    <IconLogoCompAero styles={{
                        maxWidth: '120px',
                        marginLeft: '10px',
                        marginBottom: '40px',
                    }}/>
                    <NavigationSidebarMenuList>
                        {
                            menu.map((item, index) =>
                                <Button key={`Button-${index}`} fullWidth={true} styles={{
                                    alignItems: 'center',
                                    '-ms-flex-align': 'center',
                                    ':hover > svg': {
                                        opacity: 1,
                                    }
                                }}
                                        as={'li'} variant={'flat'} color={"default"}>
                                    <IconArrowLongRight styles={iconStyle}/>
                                    <Typography fullWidth={true} textTransform={'uppercase'} color={'inherit'}
                                                href={item.link}
                                                as={'a'}>
                                        {item.title}
                                    </Typography>
                                </Button>
                            )
                        }
                    </NavigationSidebarMenuList>
                </div>
                <div>
                    <Typography size={'small'} color={'primary'} bright={'main'} as={'span'}>
                        7 (812) 241-12-34
                    </Typography>
                    {' '}
                    <Typography size={'small'} color={'primary'} as={'span'}>|</Typography>
                    {' '}
                    <Typography size={'small'} color={'primary'} bright={'main'} as={'span'}>
                        mail@compaero.rut
                    </Typography>
                    <Typography styles={{marginBottom: '20px'}} size={'small'} color={'primary'} bright={'main'} as={'div'}>
                        г. Санкт-Петербург, Коломяжский пр., д. 10Е, оф. 213
                    </Typography>
                    <Typography size={'small'}  as={'div'}>
                        Политика конфиденциальности
                    </Typography>

                </div>
            </div>
        )
    }
}

export default createComponentWithProxy(NavigationSidebarMenuStyle, NavigationSidebarMenu);