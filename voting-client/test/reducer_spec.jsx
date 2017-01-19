import {Map,List,fromJS} from "immutable";
import chai,{expect} from "chai";
import reducer from "../src/reducer";
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

describe("Reducer",()=>{
    it('handles SET_STATE', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                vote: Map({
                    pair: List.of('Trainspotting', '28 Days Later'),
                    tally: Map({Trainspotting: 1})
                })
            })
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Trainspotting', '28 Days Later'],
                tally: {"Trainspotting": 1}
            }
        }));
    });

    it("handles SET_STATE when a state isn't provided",()=>{
        const initialState = undefined;
        const action = Map({
            type: "SET_STATE",
            state: Map({
                vote: Map({
                    pair: ["Ender's Game", "Dune"],
                    tally: Map({
                        "Ender's Game": 2,
                        "Dune": 4
                    })
                })
            })
        });

        const nextState = reducer(initialState,action);
        expect(nextState).to.equal(fromJS({
           vote:{
               pair:["Ender's Game","Dune"],
               tally:{
                   "Ender's Game":2,
                   "Dune":4
               }
           }
        }));
    });

    it("handles SET_STATE when a plain JS object is the action payload",()=>{
       const initialState = Map();
       const action = {
           type:"SET_STATE",
           state:{
               vote:{
                   pair:["Band of Brothers","Zero Dark Thirty"],
                   tally:{
                       "Band of Brothers":8,
                       "Zero Dark Thirty":3
                   }
               }
           }
       };
       const nextState = reducer(initialState,action);
       expect(nextState).to.equal(fromJS({
           vote:Map({
               pair:["Band of Brothers","Zero Dark Thirty"],
               tally:Map({
                   "Band of Brothers":8,
                   "Zero Dark Thirty":3
               })
           })
       }));
    });

    it("handles VOTE by setting hasVoted",()=>{
       const state = fromJS({
           vote:{
               pair:["The Mask","Bruce Almighty"],
               tally:{
                   "The Mask":3,
                   "Bruce Almighty":1
               }
           }
       });

       const action = {type:"VOTE", entry:"Bruce Almigthy"};
       const nextState = (state,action);
       expect(nextState).to.equal(fromJS({
           vote:{
               pair:["The Mask","Bruce Almighty"],
               tally:{
                   "The Mask":3,
                   "Bruce Almighty":1
               }
           },
           hasVoted:"Bruce Almigthy"
       }));

    });

    it("does not set hasVoted if VOTE is for an invalid entry",()=>{
        const state = fromJS({
            vote:{
                pair:["The Mask","Bruce Almighty"],
                tally:{
                    "The Mask":3,
                    "Bruce Almighty":1
                }
            }
        });

        const action = {type:"VOTE",entry:"Moon"};
        const nextState = reducer(state,action);
        expect(nextState).to.equal(fromJS({
            vote:{
                pair:["The Mask","Bruce Almighty"],
                tally:{
                    "The Mask":3,
                    "Bruce Almighty":1
                }
            }
        }));
    });

    it("resets hasVoted when the voting pair changes",()=>{
        const initState = fromJS({
            vote:{
                pair:["Dumb and Dumber","Ace Ventura"],
                tally:{
                    "Dumb and Dumber":1
                }
            },
            hasVoted:"Dumb and Dumber"
        });
        const action = {
            type:"SET_STATE",
            state:{
                vote:{
                    pair:["Restrepo","Generation Kill"]
                }
            }
        };
        const nextState = reducer(state,action);
        expect(nextState).to.equal(fromJS({
            vote:{
                pair:["Restrepo","Generation Kill"]
            }
        }));
    });



});