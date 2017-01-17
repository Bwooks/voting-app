import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin';

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
        console.log('here');
        return (
            <div className="voting">
                {this.getPair().map((entry)=>{
                    return (
                        <button key={entry}
                                disabled={this.isDisabled()}
                                onClick={()=>this.props.vote(entry)}>
                            <h1>{entry}</h1>
                            {this.hasVotedFor(entry) ? <div className="label"> Voted</div>:null}
                        </button>
                    )
                })}
            </div>
        )
    }
}
