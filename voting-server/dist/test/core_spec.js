'use strict';

var _chai = require('chai');

var _immutable = require('immutable');

var _core = require('../src/core');

describe("app logic", function () {
    describe("set entries", function () {
        it("adds a new entry to the most recent state", function () {
            var state = (0, _immutable.Map)();
            var entries = ["Requiem for a Dream", "Gangs of NY"];
            var nextState = (0, _core.setEntries)(state, entries);
            (0, _chai.expect)(nextState).to.equal((0, _immutable.Map)({
                entries: _immutable.List.of("Requiem for a Dream", "Gangs of NY")
            }));
        });
    });

    describe("next state", function () {
        it("produces the next state with a voting pair from entries", function () {
            var state = (0, _immutable.Map)({
                "entries": _immutable.List.of("Sunshine", "The Dark Knight", "There Will Be Blood")
            });
            var votingState = (0, _core.next)(state);
            (0, _chai.expect)(votingState).to.equal((0, _immutable.Map)({
                "entries": _immutable.List.of("There Will Be Blood"),
                "vote": (0, _immutable.Map)({ "pair": _immutable.List.of("Sunshine", "The Dark Knight") })
            }));
        });

        it("it adds winner of vote back into entries", function () {});
    });

    describe("tally votes for a pair of entries", function () {
        it("creates the first vote for a vote pair", function () {
            var state = (0, _immutable.Map)({
                "vote": (0, _immutable.Map)({ "pair": _immutable.List.of("King Kong", "No Country for Old Men") }),
                "entries": (0, _immutable.List)()
            });
            var voteCast = (0, _core.vote)(state, "No Country for Old Men");
            (0, _chai.expect)(voteCast).to.equal((0, _immutable.Map)({
                "vote": (0, _immutable.Map)({
                    "pair": _immutable.List.of("King Kong", "No Country for Old Men"),
                    "tally": (0, _immutable.Map)({
                        "No Country for Old Men": 1
                    })
                }),
                "entries": (0, _immutable.List)()
            }));
        });

        it("adds a vote", function () {
            var state = (0, _immutable.Map)({
                "vote": (0, _immutable.Map)({
                    "pair": _immutable.List.of("The Wire", "Fargo"),
                    "tally": (0, _immutable.Map)({
                        "The Wire": 4,
                        "Fargo": 2
                    })
                })
            });

            var next = (0, _core.vote)(state, "Fargo");
            (0, _chai.expect)(next).to.equal((0, _immutable.Map)({
                "vote": (0, _immutable.Map)({
                    "pair": _immutable.List.of("The Wire", "Fargo"),
                    "tally": (0, _immutable.Map)({
                        "The Wire": 4,
                        "Fargo": 3
                    })
                })
            }));
        });
    });
}); /**
     * Created by Owner on 1/6/2017.
     */
//# sourceMappingURL=core_spec.js.map