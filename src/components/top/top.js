import React, {Component} from 'react';
import {connect} from "react-fela";
import {Typography} from "../../blocks/typography/index";
import {Column} from '../../blocks/column/index';
import BCgraphicelement from '../../assets/BCgraphicelement-3-min.jpg';

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
                <img className={styles.bgImage} src={BCgraphicelement}
                     alt=""/>
                <Column styles={{

                    position: 'relative',
                    zIndex: '2',
                }} grid={[
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

const style = ({theme, marginBottom, paddingBottom, wrapperStyles}) => {
    return {
        wrapper: {
            paddingTop: '1px',
            verticalAlign: 'top',
            textAlign: 'center',
            position: 'relative',
            maxWeight: '1200px',
            overflow: 'hidden',
            ...(theme ? {...theme.top} : null),
            ...(marginBottom ? {marginBottom: marginBottom} : null),
            ...(paddingBottom ? {paddingBottom: paddingBottom} : {paddingBottom: '1px'}),
            ...wrapperStyles,
        },
        bgImage: {
            position: 'absolute',
            width: '200%',
            top: '50%',
            left: '50%',
            zIndex: '1',
            transform: 'translate(-50%,-50%)',
            '@media(min-width:768px)':{
                width: '150%',
            },
            '@media(min-width:1024px)':{
                width: '100%',
            }
        }
    }
};

export default connect(style)(Top)