/**
 * Created by Owner on 1/13/2017.
 */
import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,hashHistory} from "react-router";
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import io from "socket.io-client";

import {VotingContainer} from "./components/Voting";
import App from "./components/App";
import {ResultsContainer} from "./components/Results";
import {setState} from "./action_creators";
import reducer from "./reducer";
import remoteActionMiddleware from "./remote_action_middleware";

const socket = io(`${location.protocol}//${location.hostname}:8090`);
const store = createStore(reducer,composeWithDevTools(
    applyMiddleware(remoteActionMiddleware(socket))
));
socket.on("state", (state) =>{
    return store.dispatch(setState(state));
});
const routes = (<Route component={App}>
        <Route path="/results" component={ResultsContainer} />
        <Route path="/" component={VotingContainer} />
    </Route>);
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById("app")
);

