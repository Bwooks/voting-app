import React from "react";
import {connect} from "react-redux";

import Winner from "./Winner";
import Tally from "./Tally";
import * as actionCreators from "../action_creators";

export class Results extends React.PureComponent{

    render(){
            return (
                this.props.winner ? <Winner winner={this.getMeta(this.props.winner)} ref="winner"/> : <Tally {...this.props}/>
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

export const ResultsContainer = connect(mapStateToProps,actionCreators)(Results);