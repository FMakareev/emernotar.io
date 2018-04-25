import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TabPanel extends Component {
    static propTypes = {
        children: PropTypes.any,
        isActive: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        className: PropTypes.string,
    };
    static defaultProps = {
        className: 'tab_panel'
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        const {children, isActive, className} = this.props;
        return (
            <div className={className} role="tabpanel" aria-labelledby="ch1Tab">
                {
                    children[isActive]
                }
            </div>
        )
    }
}