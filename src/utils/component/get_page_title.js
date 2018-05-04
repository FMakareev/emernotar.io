import React, {Component} from 'react';

class GetPageTitle extends Component {

    constructor(props){
        super(props);
        this.shouldComponentUpdate = React.addons.PureRenderMixin.shouldComponentUpdate.bind(this);
      }

      if (staticContext) {
        staticContext.pageTitle = this.props.route.name;
      }

    render (){
        return this.props.children
    }
}

export default GetPageTitle;