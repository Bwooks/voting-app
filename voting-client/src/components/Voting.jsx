/**
 * Created by Owner on 1/13/2017.
 */
import React from "react";
import Winner from "./Winner";
import Vote from "./Vote";
import {connect} from "react-redux";
import * as actionCreators from "../action_creators";
import api from "./api.json";
import axios from "axios";

export class Voting extends React.PureComponent{
    constructor(props){
        super(props);
    }

    getPosters(pair){

        const {home,lang,key} = api.movApi;
        const votePair = pair.toJS();
        const movieInfo = {};
        const posters = votePair.map((entry)=>{
            const endpoint = `${home}/search/movie?${key}&${lang}&query=${entry}`;
            return axios.get(endpoint).then((response)=>{
                const path = response.data.results[0].poster_path;
                return `https://image.tmdb.org/t/p/w500${path}`;
            }).catch((error)=>{
                console.log("Error: ",error);
            });
        });

         return posters;
    }

    render(){
        if(this.props.pair){
            const posters = this.getPosters(this.props.pair);
            return (
                <div className="voting_wrapper">
                    {this.props.winner ? <Winner winner={this.props.winner} ref="winner"/> : <Vote {...this.props} posters={posters}/>}
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
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