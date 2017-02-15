/**
 * Created by Owner on 1/11/2017.
 */
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const path = require('path');
export default function startServer(store){

    const PORT = process.env.PORT || 8080;
    const INDEX = path.join(__dirname,"../..","voting-client","dist/index.html");
    const app = express();
    const server = http.createServer(app);
    const io = socketio.listen(server);
    server.listen(PORT);

    app.use(express.static(path.join(__dirname,"../..","voting-client/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(INDEX);
    });

    io.on("connection",(socket)=>{
        socket.emit("state",store.getState().toJS());
        socket.on("action",store.dispatch.bind(store));
    });

    store.subscribe(()=>{
        io.emit("state",store.getState().toJS());
    });
}