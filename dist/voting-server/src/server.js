'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = startServer;
/**
 * Created by Owner on 1/11/2017.
 */
var http = require('http');
var express = require('express');
var socketio = require('socket.io');
var path = require('path');
function startServer(store) {

    var PORT = process.env.PORT || 8080;
    var INDEX = path.join(__dirname, "../..", "voting-client", "dist/index.html");
    var app = express();
    var server = http.createServer(app);
    var io = socketio.listen(server);
    server.listen(PORT);

    app.use(express.static(path.join(__dirname, "../..", "voting-client/dist")));
    app.get("*", function (req, res) {
        res.sendFile(INDEX);
    });

    io.on("connection", function (socket) {
        socket.emit("state", store.getState().toJS());
        socket.on("action", store.dispatch.bind(store));
    });

    store.subscribe(function () {
        io.emit("state", store.getState().toJS());
    });
}
//# sourceMappingURL=server.js.map