import React from "react";
export default class Vote extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            titles : [],
            images :[]
        }
    }

    componentWillMount(){
        let newTitles = [];
        let newImages = [];
        //Titles
        this.props.titles.map((promise)=>{
            promise.then((result)=>{
                newTitles.push(result);
                this.setState({
                    titles:newTitles
                });
            });

        });

        //Images
        this.props.images.map((promise)=>{
            promise.then((result)=>{
                newImages.push(result);
                this.setState({
                    images:newImages
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


    render(){
        return (
            <div className="vote_flex">
                <div className="votes">
                {this.getPair().map((entry,index)=>{
                    const divClass = `vote_${index} vote`;
                    const buttonClass = `vote_${index}`;
                    return (
                        <div key={entry} className={divClass}>
                            <img src = {this.state.images[index]} className={`Img_${index}`}/>
                            <button
                             className={buttonClass}
                                disabled={this.isDisabled()}
                                onClick={()=>this.props.vote(entry)}>
                            <h1>{this.state.titles[index]}</h1>
                            </button>
                            {this.hasVotedFor(entry) ? <div className="label"> Voted</div>:null}

                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}
