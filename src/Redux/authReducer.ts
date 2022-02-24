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
    id: number | null
    email: string | null
    login: string | null
}

// initial state
let initialState: InitialStateAuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: true,
}

// reducer
export const authReducer = (state = initialState, action: ActionType): InitialStateAuthType => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

// ACTION CREATORS
export const setAuthUserDataAC = (id: number, email: string, login: string): SetUserDataActionType => {
    return {
        type: "SET_AUTH_USER_DATA",
        data: {
            id,
            email,
            login,

        }
    }
}