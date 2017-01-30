/**
 * Created by Owner on 1/11/2017.
 */
import makeStore from "./src/store";
import startServer from "./src/server";
import axios from "axios";

export const store = makeStore();
startServer(store);

 let endpoint = require("./entry").movApi;

 axios.get(endpoint).then((data)=>{
 let entries = data.data.results.map((entry)=>{
     return entry.id
 });
 store.dispatch({
     type:"SET_ENTRIES",
     entries:entries
 });
 store.dispatch({type:"NEXT"});
 }).
 catch((error)=>{
 console.log("Error encountered:",error);
 });
