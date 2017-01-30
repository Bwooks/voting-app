import React from "react";
import axios from "axios";
import api from "./api.json";
export default class Vote extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props)
    }

    getPair(){
        return this.props.pair || [];
    }

    isDisabled(){
        return !!this.props.hasVoted;
    }

    hasVotedFor(entry){
        return entry === this.props.hasVoted;
    }


    getImage(){

    }

    getTitle(entry){
        const {home,lang,key} = api.movApi;
        const endpoint = `${home}/${entry}?${key}&${lang}`;

        axios.get(endpoint).then((response)=>{
            this.setState({
                [entry]:{
                    title:response.data.title
                }
            });
        }).catch((error)=>{
            console.log(error,"error")
        })


    }

    render(){
        return (
            <div className="vote_wrapper">
                {this.getPair().map((entry,index)=>{
                    const divClass = `vote_${index} vote`;
                    const buttonClass = `vote_${index}`;
                    if(!this.state || !this.state[entry]){
                        this.getTitle(entry);
                        this.getImage(entry);
                    }
                    const entryObj = this.state[entry];
                    return (
                        <div key={entry} className={divClass}>
                            <button
                             className={buttonClass}
                                disabled={this.isDisabled()}
                                onClick={()=>this.props.vote(entry)}>
                            <h1>{entryObj.title}</h1>
                            {this.hasVotedFor(entry) ? <div className="label"> Voted</div>:null}
                            </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
