// imports
import {combineReducers, createStore } from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";


let reducers = combineReducers({
    allUsers: profileReducer,
    allMessages: dialogsReducer
})

let store = createStore(reducers);
export type Dispatch = typeof store.dispatch
export default store;