// imports

// initialState

const items: itemsType = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}


// ============= types

// Action types
type ActionType = FollowActionType | UnfollowActionType | SetUserActionType | SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType
type SetUserActionType = {
    type: 'SET_USERS'
    items: Array<UserType>
}
type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}
type SetCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
type SetTotalUsersCountActionType = {
    type: 'SET_TOTAL_USER_COUNT'
    totalCount: number
}
type ToggleIsFetchingActionType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}


// State types

export type itemsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


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
            return {...state, users: [...newUsers]}
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USER_COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }


}


// Action Creators
export const SetUsersAC = (items: Array<UserType>): SetUserActionType => {
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
export const SetCurrentPageAC = (currentPage: number): SetCurrentPageActionType => {
    return {type: "SET_CURRENT_PAGE", currentPage}
}
export const SetTotalUserCountAC = (totalCount: number): SetTotalUsersCountActionType => {
    return {type: "SET_TOTAL_USER_COUNT", totalCount}
}
export const ToggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {type: 'TOGGLE_IS_FETCHING', isFetching} as const
}