import React from "react";

export default class Winner extends React.PureComponent{
    render(){
        return (
            <div className="winner">
                <h1>Winner is {this.props.winner}</h1>
            </div>
        )
    }
}