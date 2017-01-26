import React from "react";

export default class Vote extends React.PureComponent{


    getPair(){
        return this.props.pair || [];
    }

    isDisabled(){
        return !!this.props.hasVoted;
    }

    hasVotedFor(entry){
        return entry === this.props.hasVoted;
    }

    render(){

        return (
            <div className="vote_wrapper">
                {this.getPair().map((entry,index)=>{
                    const divClass = `vote_${index} vote`;
                    return (
                        <div className={divClass}>
                        <button key={entry}
                                disabled={this.isDisabled()}
                                onClick={()=>this.props.vote(entry)}>
                            <h1>{entry}</h1>
                            {this.hasVotedFor(entry) ? <div className="label"> Voted</div>:null}
                        </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
