import React from "react";
import {List} from "immutable";

const pair = List.of("Inside Man","The Social Network");
const tally = Map({
    "Inside Man":4,
    "The Social Network":2
});
export default class App extends React.Component{
    render(){
       return React.cloneElement(this.props.children,{
           pair:pair,
           tally:tally
       });
    }
}