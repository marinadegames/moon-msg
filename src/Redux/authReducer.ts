import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {authAPI, requestsAPI} from "../components/api/API";

let initialState: InitialStateAuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action: ActionType): InitialStateAuthType => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return {...state, ...action.data}
        default:
            return state
    }
}

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

export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await requestsAPI.setAuth()
        if (res.resultCode === 0) {
            let {id, email, login} = res.data
            dispatch(setAuthUserDataAC(id, email, login, true))
        }
    } catch {
        console.warn('ERROR')
    }
    finally {

    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.login(email, password, rememberMe)
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(res.data.id, email, res.data.login, true))
            localStorage.setItem('isLogin', JSON.stringify(true))
        } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : 'SOME ERROR'
            dispatch(stopSubmit('login', {_error: message}))
        }
    } catch {
        console.warn('ERROR')
    } finally {

    }
}
export const logoutTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
            localStorage.setItem('isLogin', JSON.stringify(false))
        }
    } catch {
        console.warn('ERROR')
    } finally {

    }
}

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
