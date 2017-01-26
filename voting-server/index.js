/**
 * Created by Owner on 1/11/2017.
 */
import makeStore from "./src/store";
import startServer from "./src/server";
import axios from "axios";

export const store = makeStore();
startServer(store);

 let endpoint = "https://api.themoviedb.org/3/discover/movie?api_key=fc343979a38c148c7cd3440db5458ca5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
 axios.get(endpoint).then((data)=>{
 let entries = data.data.results.map((entry)=>{
     return entry.title;
 });
 console.log(entries);
 store.dispatch({
     type:"SET_ENTRIES",
     entries:entries
 });
 store.dispatch({type:"NEXT"});}).
 catch((error)=>{
 console.log(error);
 });
