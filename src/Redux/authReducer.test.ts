// imports
import {authReducer, InitialStateAuthType, setAuthUserDataAC} from "./authReducer";


// tests
// test('AUTH', () => {
//     const initialState: InitialStateAuthType = {
//         id: null,
//         email: null,
//         login: null,
//         isAuth: false,
//     }
//     let data = {
//         id: 123,
//         email: 'example@gmail.com',
//         login: 'kolobok',
//     }
//     let action = setAuthUserDataAC(data.id, data.email, data.login)
//     const endState = authReducer(initialState, action)
//     expect(endState.id).toBe(data.id)
//     expect(endState.email).toBe(data.email)
//     expect(endState.login).toBe(data.login)
//     expect(endState.isAuth).toBe(true)
// })