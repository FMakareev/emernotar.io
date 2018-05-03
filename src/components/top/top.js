import React, {Component} from 'react';
import {connect} from "react-fela";
import {Typography} from "../../blocks/typography/index";
import {Column} from '../../blocks/column/index';

class Top extends Component {

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
        const {styles, children} = this.props;
        if (!styles) return null;
        return (
            <div className={styles.wrapper}>
                <Column grid={[
                    [425, 80, '%'],
                    [768, 60, '%'],
                ]}>
                    <Typography styles={{margin: '3.125rem 0 5.625rem', fontSize: '2rem'}} as={"h1"} size={'medium'}
                                textAlign={'center'}>
                        {children}
                    </Typography>
                </Column>
            </div>
        )
    }
}

const style = ({theme, marginBottom, paddingBottom}) => {
    return {
        wrapper: {
            paddingTop: '1px',
            verticalAlign: 'top',
            textAlign: 'center',
            position: 'relative',
            maxWeight: '1200px',
            ...(theme ? {...theme.top} : null),
            ...(marginBottom ? {marginBottom: marginBottom} : null),
            ...(paddingBottom ? {paddingBottom: paddingBottom} : {paddingBottom: '1px'})
        },

    }
};

export default connect(style)(Top)