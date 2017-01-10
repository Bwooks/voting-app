/**
 * Created by Owner on 1/9/2017.
 */
import {setEntries,next,vote} from '../src/core';
export default function reducer(state,action){
    switch(action.type){
        case "SET_ENTRIES":
            return setEntries(state,action.entries);
        case "NEXT":
            return next(state);
        case "VOTE":
            return vote(state,action.vote);
        default:
            return state;
    }
}