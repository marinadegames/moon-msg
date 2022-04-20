import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {meProfileReducer} from "./meProfileReducer";
import {profileReducer} from "./profileReducer";
import { authReducer } from "./authReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    meProfilePage: meProfileReducer,
    allMessages: dialogsReducer,
    allUsers: usersReducer,
    auth: authReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// @ts-ignore
window.store = store
