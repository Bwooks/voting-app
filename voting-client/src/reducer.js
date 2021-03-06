import {List,Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function vote(state,action){
    const currentPair = state.getIn(["vote","pair"]);
    if(currentPair && currentPair.includes(action)){
        return state.set("hasVoted",action);
    }else{
        return state;
    }
}

function resetVote(state){
    const hasVoted = state.get("hasVoted");
    const pairProp = state.getIn(["vote","pair"],List());
    if(hasVoted && !pairProp.includes(hasVoted)){
        return state.remove("hasVoted");
    }else{
        return state;
    }
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return resetVote(setState(state, action.state));
        case "VOTE":
            return vote(state,action.entry);
        default:
            return state;
    }
}