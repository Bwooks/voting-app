/**
 * Created by Owner on 1/13/2017.
 */
import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,hashHistory} from "react-router";
import {createStore} from "redux";

import Voting from "./components/Voting";
import App from "./components/App";
import Results from "./components/Results";
import reducer from "./reducer";
const routes = <Route component={App}>
        <Route path="/" component={Voting} />
        <Route path="/results" component={Results} />
    </Route>;


const store = createStore(reducer);
store.dispatch({
    type:"SET_STATE",
    vote:{
        pair:["Rush Hour","Rush Hour 2"],
        tally:{
            "Rush Hour":3,
            "Rush Hour 2":2
        }
    }
});
ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById("app")
);
