/**
 * Created by Owner on 1/13/2017.
 */
import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,hashHistory} from "react-router";
import {createStore} from "redux";
import {Provider,connect} from "react-redux";
import io from "socket.io-client";

import {VotingContainer} from "./components/Voting";
import App from "./components/App";
import {ResultsContainer} from "./components/Results";
import reducer from "./reducer";

const routes = <Route component={App}>
        <Route path="/" component={VotingContainer} />
        <Route path="/results" component={ResultsContainer} />
    </Route>;

const socket = io(`${location.protocol}//${location.hostname}:8090`);
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
    <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById("app")
);

