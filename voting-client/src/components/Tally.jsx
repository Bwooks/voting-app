import React from "react";
import {Map,List} from "immutable";

export default class Tally extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            titles : []
        }
    }

    getPair(){
        return this.props.pair || [];
    }

    getVotes(entry){
        if(this.props.tally && this.props.tally.has(entry)){
            return this.props.tally.get(entry);
        }
        return 0;
    }
    checking(){
        console.log(window.opener,window.opener.location,window.opener.location.reload(true),this.refs);
        this.props.next();
    }
    render(){
        return (
            <div className="results">

                <div className="tally">
                    {this.getPair().map((entry,index)=>
                        <div className="entry" key={entry}>
                            <h1>{entry}</h1>
                            <div className="voteCount">{this.getVotes(entry)}</div>
                        </div>
                    )}
                </div>
                <div className="management">
                    <button className="next" ref="next" onClick={this.checking.bind(this)}>Next</button>
                </div>
            </div>
        );
    }
};