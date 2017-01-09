/**
 * Created by Owner on 1/6/2017.
 */
import {List,Map} from 'immutable';

export function setEntries(state,entries){
    return state.set("entries",List(entries));
}

export function next(state){
    const entries = state.get("entries").concat(getWinners(state.get("vote")));
    let newState = state.merge({
        "vote":Map({"pair":entries.take(2)}),
        "entries":entries.skip(2)
    });
    return newState;
}

function getWinners(vote){
    if(!vote) return [];

    const [a,b] = vote.get("pair");
    const countA = vote.getIn(["tally",a],0);
    const countB = vote.getIn(["tally",b],0);
    return countB > countA ? b : (countA === countB ? [a,b] : a);
}

export function vote(state,vote){
    return state.updateIn(["vote","tally",vote],0,(value)=>value+1);
}