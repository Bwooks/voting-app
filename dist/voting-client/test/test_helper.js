"use strict";

var _jsdom = require("jsdom");

var _jsdom2 = _interopRequireDefault(_jsdom);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiImmutable = require("chai-immutable");

var _chaiImmutable2 = _interopRequireDefault(_chaiImmutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doc = _jsdom2.default.jsdom("<!doctype html><html><body></body></html>"); /**
                                                                               * Created by Owner on 1/13/2017.
                                                                               */

var win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach(function (key) {
    if (!(key in global)) {
        global[key] = window[key];
    }
});
//# sourceMappingURL=test_helper.js.map