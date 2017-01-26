import React from "react";
import "style!css!../../styles/main.css";

export default class App extends React.Component{
    render(){
       return this.props.children;
    }
};