// imports
import {authReducer, getCaptchaUrlSuccessAC, InitialStateAuthType, setAuthUserDataAC} from "./authReducer";
import exp from "constants";

let startState: InitialStateAuthType
beforeEach(() => {
    startState = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        captcha: null
    }
})

// tests
test('AUTH', () => {
    let data = {
        id: 123,
        email: 'example@gmail.com',
        login: 'kolobok',
        isAuth: true,
        captcha: null
    }
    let action = setAuthUserDataAC(data.id, data.email, data.login, true, null)
    const endState = authReducer(startState, action)
    expect(endState.id).toBe(data.id)
    expect(endState.email).toBe(data.email)
    expect(endState.login).toBe(data.login)
    expect(endState.isAuth).toBe(true)
})
test('CAPTCHA', () => {
    const captcha = 'wpqekfnwofwkjefwkef'
    let action = getCaptchaUrlSuccessAC(captcha)
    let endState = authReducer(startState, action)
    expect(endState.captcha).toBe(captcha)

})
