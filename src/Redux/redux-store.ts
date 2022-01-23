// imports
import {combineReducers, createStore } from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";



let reducers = combineReducers({
    allUsers: profileReducer,
    allMessages: dialogsReducer
})

let store = createStore(reducers);
console.log(store)
export default store;