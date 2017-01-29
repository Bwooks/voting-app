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
                        <div key={entry} className={divClass}
                                disabled={this.isDisabled()}
                                onClick={()=>this.props.vote(entry)}>
                            <span className="vote_title"><h1>{entry}</h1></span>
                            {this.hasVotedFor(entry) ? <div className="label"> Voted</div>:null}
                        </div>
                    )
                })}
            </div>
        )
    }
}
