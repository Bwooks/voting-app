/**
 * Created by Owner on 1/19/2017.
 */
export default function(socket){
    return function (store) {
        return function (next) {
            return function (action) {

                socket.emit("action",action);
                return next(action);
            }
        }
    }
}