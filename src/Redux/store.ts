// imports
import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    allMessages: dialogsReducer,
    allUsers: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppDispatch = typeof store.dispatch
// @ts-ignore
window.store = store
