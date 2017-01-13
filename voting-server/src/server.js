/**
 * Created by Owner on 1/11/2017.
 */
import Server from "socket.io";

export default function startServer(){
    const io = new Server().attach(8090);
}