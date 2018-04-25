import React, {Component} from 'react';

export class DynamicImport extends Component {
    state = {
        component: null
    };
    componentWillMount () {
        this.props.load()
            .then((component) => {
                console.log(component);
                Object.entries(component).map(([key, value]) => {
                    console.log(key, value);
                    this.setState({
                        component: value
                    })
                })

            })
    }
    render() {
        return this.props.children(this.state.component)
    }
}