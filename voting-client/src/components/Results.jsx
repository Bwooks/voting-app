import React from "react";
import Winner from "./Winner";
import Tally from "./Tally";
export default class Results extends React.PureComponent{

    render(){
        return (
            <div className="results">
                {this.props.winner ? <Winner winner={this.props.winner} ref="winner"/> : <Tally {...this.props} />}
                <div className="management">
                    <button className="next" ref="next" onClick={this.props.next}>Next</button>
                </div>
            </div>
        );
    }
};