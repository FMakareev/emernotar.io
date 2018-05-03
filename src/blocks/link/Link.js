import React from 'react';
import PropTypes from 'prop-types';
// import {history} from '../../routes/history';
// import {createComponentWithProxy} from "react-fela";

// const LinkStyle = ({
//                 padding = '8px 16px',
//                 textAlign = 'center',
//                 maxWidth='inherit',
//                 center = false,
//                 right = false,
//                 }) => ({
    

// })

function isLeftClickEvent(event) {
    return event.button === 0;
}

function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

export class Link extends React.Component {
    static propTypes = {
        to: PropTypes.string,
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        onClick: null,
    };

    handleClick = event => {
        if (this.props.onClick) {
            this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
            return;
        }

        if (event.defaultPrevented === true) {
            return;
        }

        event.preventDefault();
        // history.push(this.props.to);
    };

    render() {
        const {to, children, className, ...props} = this.props;
        return (
            <a href={to} {...props} className={className} onClick={this.handleClick}>
                {children}
            </a>
        );
    }
}
