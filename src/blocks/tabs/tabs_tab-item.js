import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TabItem extends Component {

    static propTypes = {
        children: PropTypes.any.isRequired,
        isActive: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
        index: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
        toggleTab: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        classNameWrap: PropTypes.string,
        classNameBtn: PropTypes.string,
    };
    static defaultProps = {
        classNameWrap: 'tab_item',
        classNameBtn: 'tab_button',
    };


    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }


    render() {
        const {
            children,
            isActive,
            index,
            toggleTab,
            disabled,
            classNameWrap = 'tab_item',
            classNameBtn = 'tab_button',
        } = this.props;
        return (
            <li className={classNameWrap} role="tab">
                <button
                    onClick={() => {
                        toggleTab(index)
                    }}
                    disabled={disabled ? disabled : false}
                    data-tab-index={index}
                    className={`${classNameBtn}` + (isActive === index ? ` ${classNameBtn}--active` : '')}
                >
                    {children}
                </button>
            </li>
        )
    }
}