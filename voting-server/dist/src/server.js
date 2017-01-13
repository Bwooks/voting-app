"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startServer;

var _socket = require("socket.io");

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startServer() {
  var io = new _socket2.default().attach(8090);
} /**
   * Created by Owner on 1/11/2017.
   */
//# sourceMappingURL=server.js.map