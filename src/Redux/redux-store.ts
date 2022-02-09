// imports
import {combineReducers, createStore } from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";


let reducers = combineReducers({
    profile: profileReducer,
    allMessages: dialogsReducer,
    allUsers: usersReducer
})

let store = createStore(reducers);
export type Dispatch = typeof store.dispatch
export default store;