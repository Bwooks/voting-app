import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Winner extends React.PureComponent{


    render(){
        return (
            <div className="winner">
                <h1>Winner is {this.props.winner}</h1>
            </div>
        )
    }
}