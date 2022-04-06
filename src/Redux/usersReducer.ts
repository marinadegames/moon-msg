import {Dispatch} from "redux";
import {requestsAPI} from "../components/api/API";

const items: itemsType = {
    users: [],
    pageSize: 16,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

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
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state
    }
}

export const SetUsersAC = (items: Array<UserType>): SetUserActionType => {
    return {type: 'SET_USERS', items}
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
export const ToggleIsFollowingIsProgressAC = (isFetching: boolean, userId: number): ToggleIsFollowingProgressActionType => {
    return {type: "TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId} as const
}

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(ToggleIsFetchingAC(true))
        const res = await requestsAPI.getUsers(currentPage, pageSize)
        dispatch(SetUsersAC(res.items))
        dispatch(SetCurrentPageAC(currentPage))
        dispatch(SetTotalUserCountAC(res.totalCount))
        dispatch(ToggleIsFetchingAC(false))
    } catch {
        console.warn('ERROR')
    } finally {
        dispatch(ToggleIsFetchingAC(false))
    }
}
export const followTC = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(ToggleIsFollowingIsProgressAC(true, id))
        const res = await requestsAPI.followFriend(id)
        if (res.data.resultCode === 0) {
            dispatch(FollowAC(id))
            dispatch(ToggleIsFollowingIsProgressAC(false, id))
        }
    } catch {
        console.warn('ERROR')
    } finally {
        dispatch(ToggleIsFollowingIsProgressAC(false, id))
    }
}
export const unfollowTC = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(ToggleIsFollowingIsProgressAC(true, id))
        const res = await requestsAPI.unfollowFriend(id)
        if (res.data.resultCode === 0) {
            dispatch(UnfollowAC(id))
            dispatch(ToggleIsFollowingIsProgressAC(false, id))
        }
    } catch {
        console.warn('ERROR')
    } finally {
        dispatch(ToggleIsFollowingIsProgressAC(false, id))
    }
}


type ActionType =
    FollowActionType
    | UnfollowActionType
    | SetUserActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | ToggleIsFollowingProgressActionType

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
type ToggleIsFollowingProgressActionType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean
    userId: number
}

// State types
export type itemsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
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