import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {createComponentWithProxy, connect} from 'react-fela'
import {Button} from "../../blocks/button/index";
import {IconBurgerMenuClose} from "../icons/index";

const NavigationSidebarDrawerStyle = ({theme, ...props}) => {
    return {
        wrapper: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '0',
            display: 'flex',
            paddingLeft: '5rem',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minWidth: '400px',
            ...(theme ? {
                backgroundColor: theme.palette['default']['main']
            } : null),
            zIndex: 11,
        },
        background: {
            position: 'fixed',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            zIndex: 10,
            backgroundColor: 'rgba(33, 33, 33, 0.6)',
        }
    }
};

class NavigationSidebarDrawer extends Component {

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
        const {styles, children, onClose, toggleMenu} = this.props;
        console.log(this.props);
        if (!toggleMenu) {
            return null
        }
        return (
            <Fragment>

                <div className={styles.wrapper}>
                    <Button styles={{
                        position: 'absolute',
                        top: '1.25rem',
                        left: '1.25rem',
                    }} onClick={onClose}>
                        <IconBurgerMenuClose/>
                    </Button>
                    {children}
                </div>
                <div onClick={onClose} className={styles.background}>

                </div>
            </Fragment>
        )
    }
}


export default connect(NavigationSidebarDrawerStyle)(NavigationSidebarDrawer);