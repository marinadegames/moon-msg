// imports


// types
export type InitialStateAuthType = {
    initialized: boolean
}
type ActionType = ReturnType<typeof InitializedAC>


// initial state
let initialState: InitialStateAuthType = {
    initialized: false,
}


// reducer
export const authReducer = (state = initialState, action: ActionType): InitialStateAuthType => {
    switch (action.type) {
        case "INITIALIZED_APP":
            return {...state, initialized: true}
        default:
            return state
    }
}


// ACTION CREATORS
export const InitializedAC = () => ({type: 'INITIALIZED_APP'} as const)


// TC