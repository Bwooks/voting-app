import React from "react";
import {connect} from "react-redux";

import Winner from "./Winner";
import Tally from "./Tally";

export class Results extends React.PureComponent{

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

let mapStateToProps = (state)=>{
    return {
        tally:state.getIn(["vote","tally"]),
        pair:state.getIn(["vote","pair"]),
        winner:state.get("winner")
    }
};

export const ResultsContainer = connect(mapStateToProps)(Results);