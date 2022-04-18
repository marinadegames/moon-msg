import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {authAPI, requestsAPI, securityAPI} from "../api/API";

let initialState: InitialStateAuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
}

export const authReducer = (state = initialState, action: ActionType): InitialStateAuthType => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return {...state, ...action.data}
        case "GET_CAPTCHA_URL_SUCCESS":
            return {...state, captcha: action.url}
        default:
            return state
    }
}

export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean, captcha: string | null): SetUserDataActionType => {
    return {
        type: "SET_AUTH_USER_DATA",
        data: {
            id,
            email,
            login,
            isAuth,
            captcha
        }
    }
}
export const getCaptchaUrlSuccessAC = (url: string): GetCaptchaUrlSuccessActionType => {
    return {type: 'GET_CAPTCHA_URL_SUCCESS', url}
}

export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await requestsAPI.setAuth()
        if (res.resultCode === 0) {
            let {id, email, login} = res.data
            dispatch(setAuthUserDataAC(id, email, login, true, null))
        }
    } catch {
        console.warn('ERROR')
    } finally {

    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string | null) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await authAPI.login(email, password, rememberMe, captcha)
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(res.data.id, email, res.data.login, true, captcha))
            localStorage.setItem('isLogin', JSON.stringify(true))
        } else {
            if (res.data.resultCode === 10) {
                dispatch(getCaptchaUrlTC())
            }
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
            dispatch(setAuthUserDataAC(null, null, null, false, null))
            localStorage.setItem('isLogin', JSON.stringify(false))
        }
    } catch {
        console.warn('ERROR')
    } finally {

    }
}
export const getCaptchaUrlTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await securityAPI.getCaptcha()
        const captcha = res.data.url
        dispatch(getCaptchaUrlSuccessAC(captcha))
    } catch (e) {
        console.warn(e)
    }
}

export type InitialStateAuthType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    captcha: string | null
}
type ActionType = SetUserDataActionType | GetCaptchaUrlSuccessActionType
type SetUserDataActionType = {
    type: 'SET_AUTH_USER_DATA'
    data: DataType
}
type GetCaptchaUrlSuccessActionType = {
    type: 'GET_CAPTCHA_URL_SUCCESS'
    url: string
}
type DataType = {
    id: any
    email: string | null
    login: string | null
    isAuth: boolean
    captcha: string | null
}
