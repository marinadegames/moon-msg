// imports
import {Dispatch} from "redux";
import {authAPI, requestsAPI} from "../Components/API/API";
import {stopSubmit} from "redux-form";

// types
export type InitialStateAuthType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type ActionType = SetUserDataActionType
type SetUserDataActionType = {
    type: 'SET_AUTH_USER_DATA'
    data: DataType
}
type DataType = {
    id: any
    email: string | null
    login: string | null
    isAuth: boolean
}

// initial state
let initialState: InitialStateAuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

// reducer
export const authReducer = (state = initialState, action: ActionType): InitialStateAuthType => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return {...state, ...action.data}
        default:
            return state
    }
}

// ACTION CREATORS
export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => {
    return {
        type: "SET_AUTH_USER_DATA",
        data: {
            id,
            email,
            login,
            isAuth,
        }
    }
}
export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    requestsAPI.setAuth()
        .then(resp => {
            if (resp.resultCode === 0) {
                let {id, email, login} = resp.data
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        });
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(resp.data.id, email, resp.data.login, true))
                localStorage.setItem('isLogin', JSON.stringify(true))
            } else {

                let message = resp.data.messages.length > 0 ? resp.data.messages[0] : 'SOME ERROR'
                dispatch(stopSubmit('login', {_error: message}))
            }
        });
}

export const logoutTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, null, null, false))
                    localStorage.setItem('isLogin', JSON.stringify(false))
                }
            });
    }
}