import React, {Component} from 'react';

class GetPageTitle extends Component {

// ghbybvftn ghjgc rkfcc
// gthtlftn ghjgc rkfcc
//gthtpfgbcdftn cnfnbr rjyntrcn
//ршыещкн elfkbnm дшыеутук lj,fdbnm дшыеутук

    constructor(props){
        super(props);
        this.shouldComponentUpdate = React.addons.PureRenderMixin.shouldComponentUpdate.bind(this);
      }

    render (){
        return this.props.children
    }
}

export default GetPageTitle;