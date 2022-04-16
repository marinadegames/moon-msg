// imports
import {authReducer, InitialStateAuthType, setAuthUserDataAC} from "./authReducer";

let startState: InitialStateAuthType
beforeEach(() => {
    startState = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
    }
})

// tests
test('AUTH', () => {
    let data = {
        id: 123,
        email: 'example@gmail.com',
        login: 'kolobok',
        isAuth: true
    }
    let action = setAuthUserDataAC(data.id, data.email, data.login, true)
    const endState = authReducer(startState, action)
    expect(endState.id).toBe(data.id)
    expect(endState.email).toBe(data.email)
    expect(endState.login).toBe(data.login)
    expect(endState.isAuth).toBe(true)
})
