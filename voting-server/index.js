/**
 * Created by Owner on 1/11/2017.
 */
import makeStore from "./src/store";
import startServer from "./src/server";

export const store = makeStore();
startServer();