import React from "react";
import {List} from "immutable";

const pair = List.of("Inside Man","The Social Network")
export default class App extends React.Component{
    render(){
       return React.cloneElement(this.props.children,pair);
    }
}