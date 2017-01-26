/**
 * Created by Owner on 1/13/2017.
 */
import React from "react";
import Winner from "./Winner";
import Vote from "./Vote";
import {connect} from "react-redux";
import * as actionCreators from "../action_creators";


export class Voting extends React.PureComponent{
    render(){
        return (
            <div className="vote_container">
                {this.props.winner ? <Winner winner={this.props.winner} ref="winner"/> : <Vote {...this.props}/>}
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
    return {
        pair:state.getIn(["vote","pair"]),
        winner:state.get("winner"),
        hasVoted:state.get("hasVoted")
    }
}
export const VotingContainer = connect(mapStateToProps,actionCreators)(Voting);