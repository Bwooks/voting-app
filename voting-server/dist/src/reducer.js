"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reducer;

var _core = require("../src/core");

function reducer(state, action) {
    switch (action.type) {
        case "SET_ENTRIES":
            return (0, _core.setEntries)(state, action.entries);
        case "NEXT":
            return (0, _core.next)(state);
        case "VOTE":
            return (0, _core.vote)(state, action.vote);
        default:
            return state;
    }
} /**
   * Created by Owner on 1/9/2017.
   */
//# sourceMappingURL=reducer.js.map