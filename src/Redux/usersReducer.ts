// imports


/// initialState

const items: itemsType = []


// ============= types

// Action types
type ActionType = FollowActionType | UnfollowActionType | SetUserActionType
type SetUserActionType = {
    type: 'SET_USERS'
    items: itemsType
}
type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}

// State types

export type itemsType = Array<UserType>


type photosType = {
    small: string | null,
    large: string | null
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null,
    photos: photosType,
    status: string | null,
    followed: boolean
}


// reducer
export const usersReducer = (state = items, action: ActionType): itemsType => {
    switch (action.type) {
        case "SET_USERS":
            let newUsers = action.items
            return [...newUsers];
        case "FOLLOW":
            return state.map( u => u.id === action.userId ? {...u, followed: true} : u)
        case "UNFOLLOW":
            return state.map( u => u.id === action.userId ? {...u, followed: false} : u)
        default:
            return state
    }
}


// Action Creators
export const setUsersAC = (items: Array<UserType>): SetUserActionType => {
    return {
        type: 'SET_USERS',
        items
    }
}

export const FollowAC = (userId: number): FollowActionType => {
    return {type: 'FOLLOW', userId} as const
}
export const UnfollowAC = (userId: number): UnfollowActionType => {
    return {type: "UNFOLLOW", userId} as const
}
