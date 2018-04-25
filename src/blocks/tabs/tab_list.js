import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TabList extends Component {

    static propTypes = {
        children: PropTypes.any.isRequired,
        className: PropTypes.string
    };
    static defaultProps = {
        className: "tab_list"
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        const {children, className, style} = this.props;
        return (
            <ol className={className} style={style} role="tablist">
                {children}
            </ol>
        )
    }
}