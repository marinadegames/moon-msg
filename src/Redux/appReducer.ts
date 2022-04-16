let initialState: InitialStateAuthType = {
    initialized: false,
}
export const authReducer = (state = initialState, action: ActionType): InitialStateAuthType => {
    switch (action.type) {
        case "INITIALIZED_APP":
            return {...state, initialized: true}
        default:
            return state
    }
}
export const InitializedAC = () => ({type: 'INITIALIZED_APP'} as const)

type ActionType = ReturnType<typeof InitializedAC>
export type InitialStateAuthType = {
    initialized: boolean
}