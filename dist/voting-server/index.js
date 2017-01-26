"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.store = undefined;

var _store = require("./src/store");

var _store2 = _interopRequireDefault(_store);

var _server = require("./src/server");

var _server2 = _interopRequireDefault(_server);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = exports.store = (0, _store2.default)(); /**
                                                     * Created by Owner on 1/11/2017.
                                                     */

(0, _server2.default)(store);

var endpoint = "https://api.themoviedb.org/3/discover/movie?api_key=fc343979a38c148c7cd3440db5458ca5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
_axios2.default.get(endpoint).then(function (data) {
    var entries = data.data.results.map(function (entry) {
        return entry.title;
    });
    console.log(entries);
    store.dispatch({
        type: "SET_ENTRIES",
        entries: entries
    });
    store.dispatch({ type: "NEXT" });
}).catch(function (error) {
    console.log(error);
});
//# sourceMappingURL=index.js.map