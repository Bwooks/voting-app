import React from "react";
export default class Vote extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            posters :[]
        }
    }

    componentWillMount(){
        let newPosters = [];
        //Posters
        this.props.posters.map((promise)=>{
            promise.then((result)=>{
                newPosters.push(result);
                this.setState({
                    posters:newPosters
                });
            });

        });
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

    openResults(){
        window.open("#results");
    }

    render(){
        return (
            <div className="vote_flex">
                <div className="votes">
                {this.getPair().map((entry,index)=>{
                    const divClass = `vote_${index} vote`;
                    const buttonClass = `vote_${index}`;
                    return (
                        <div key={entry} className={divClass}>
                            <img src = {this.state.posters[index]} className={`Img_${index}`}/>
                            <button
                             className={buttonClass}
                                disabled={this.isDisabled()}
                                onClick={()=> this.props.vote(entry)}
                            >
                            <h1>{entry}</h1>
                            </button>
                            {this.hasVotedFor(entry) ? <div className="label"><a onClick={this.openResults}>Results</a></div>:null}
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}
