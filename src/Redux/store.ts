// imports
import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
    profilePage: profileReducer,
    allMessages: dialogsReducer,
    allUsers: usersReducer,
    auth: authReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store
