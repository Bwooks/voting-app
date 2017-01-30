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

    getMeta(pair){
        const {home,lang,key} = api.movApi;
        const titlesPair = pair.toJS();
        const imagesPair = pair.toJS();
        const meta = {};
        const titles = titlesPair.map((entry)=>{
            const endpoint = `${home}/${entry}?${key}&${lang}`;
            return axios.get(endpoint).then((response)=>{
                return response.data.title;
            }).catch((error)=>{
                console.log(error);
            });
        });
        const images = imagesPair.map((entry)=>{
            const endpoint = `${home}/${entry}?${key}&${lang}`;
            return axios.get(endpoint).then((response)=>{
                const path = response.data.poster_path;
                return `https://image.tmdb.org/t/p/w500${path}`;
            }).catch((error)=>{
                console.log("Error: ",error);
            });
        });
        meta["titles"] = titles;
        meta["images"] = images;
        return meta;
    }

    render(){
        if(this.props.pair){
            const {titles,images} = this.getMeta(this.props.pair)
            return (
                <div className="vote_container">
                    {this.props.winner ? <Winner winner={this.props.winner} ref="winner"/> : <Vote {...this.props} titles={titles} images={images}/>}
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