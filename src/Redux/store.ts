// imports
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer } from 'redux-form'
import { profileReducer } from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import {meProfileReducer} from "./meProfileReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    meProfilePage: meProfileReducer,
    allMessages: dialogsReducer,
    allUsers: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.store = store
