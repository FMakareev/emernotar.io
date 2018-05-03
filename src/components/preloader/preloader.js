import React, {Component} from 'react';
import {connect} from 'react-fela';
import IconLogoEmerNatar from '../icons/icon_logo--text-less';

class PreLoader extends Component {
    constructor() {
        super();
        this.state = this.initialState;
        this.onClose = this.onClose.bind(this);
        this.renderPreloader = this.renderPreloader.bind(this);
    }

    get initialState() {
        return {
            active: true
        }
    }

    onClose() {
        this.setState({active: false});
    }

    renderCssLoadContainer(styles) {
        return (<div className={styles.cssloadContainer}>
            <ul className={styles.cssloadLoader}>
                <li className={styles.cssloadLi}></li>
                <li className={styles.cssloadLi}></li>
                <li className={styles.cssloadLi}></li>
                <li className={styles.cssloadLi}></li>
            </ul>
        </div>)
    }

    renderPreloader(styles,palette) {
        return (<div className={styles.cssloadLoader}>
            {
                this.renderCssLoadContainer(styles)
            }
            <IconLogoEmerNatar palette={palette}/>
            {
                this.renderCssLoadContainer(styles)
            }
        </div>)
    }

    render() {
        const {styles,backdrop,palette} = this.props;
        if (!this.state.active) return null;

        if(backdrop) {
            return (
                <div className={styles.backdrop} onClick={this.onClose}>
                    <div className={styles.wrapper}>
                        {this.renderPreloader(styles,palette)}
                    </div>
                </div>
            )
        } else {
            return this.renderPreloader(styles,palette)
        }


    }
}

const Style = ({theme,palette= 'main'}) => {
    return {
        backdrop: {
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: '100',
            backgroundColor: 'rgba(0,0,0,0.4)'
        },
        wrapper: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
        },


        cssloadLoader: {
            display: 'flex',
            alignItems: 'center',
            width:'210px',
            margin: '0 auto',
            fill: theme.palette.primary[palette],
        },

        cssloadContainer: {
            position: 'relative',
            zIndex: 4,
            margin: '0 auto',
            width: '55px',
            height: '49px',
            listStyle: 'none',
        },
        cssloadLi: {
            backgroundColor: theme.palette.primary[palette],
            width: '10px',
            height: '10px',
            float: 'right',
            marginRight: '5px !important',
            // boxShadow: '0px 19px 10px rgba(0,0,0,0.2)',

            ':first-child': {
                animation: 'k1 1.15s cubic-bezier(0.645,0.045,0.355,1) infinite 0s'
            },
            ':nth-child(2)': {
                animation: 'k1 1.15s ease-in-out infinite -0.23s'
            },
            ':nth-child(3)': {
                animation: 'k1 1.15s ease-in-out infinite -0.46s'
            },
            ':nth-child(4)': {
                animation: 'k1 1.15s ease-in-out infinite -0.69s'
            },
            ':nth-child(5)': {
                animation: 'k1 1.15s ease-in-out infinite -0.97s'
            },
            ':nth-child(6)': {
                animation: 'k1 1.15s ease-in-out infinite -0.120s'
            }
        }
    }
}

export default connect(Style)(PreLoader);