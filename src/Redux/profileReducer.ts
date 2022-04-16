import {Dispatch} from "redux";
import {profileAPI} from "../api/API";

const initialState: InitStateType = {
    posts: [],
    newPostText: '',
    profile: null,
    status: '',
}

export const profileReducer = (state = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case 'SET_STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}


export const SetUserProfileAC = (profile: ProfileType): SetUserProfileActionType => {
    return {type: SET_USER_PROFILE, profile} as const
}
export const SetStatusProfileAC = (status: string): SetStatusActionType => {
    return {type: SET_STATUS, status}
}

export const setUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.getProfile(userId)
        dispatch(SetUserProfileAC(res))
    } catch {
        console.warn('ERROR')
    } finally {

    }
}
export const getStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.getStatus(userId)
        dispatch(SetStatusProfileAC(res.data))
    } catch {
        console.warn('ERROR')
    } finally {

    }
}
export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.updateStatus(status)
        console.log(res)
        if (res.data.resultCode === 0) {
            dispatch(SetStatusProfileAC(status))
            console.log(res.data)
        }
    } catch {
        console.warn('ERROR')
    } finally {

    }
}

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
type ActionType =
    SetStatusActionType
    | FollowActionType
    | UnfollowActionType
    | SetUserProfileActionType
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
type PhotosType = {
    small: string | null
    large: string | null
}
export type InitStateType = {
    posts: Array<any> | null
    newPostText: string
    profile: ProfileType | null
    status: string
}
type SetStatusActionType = {
    type: 'SET_STATUS',
    status: string
}
type FollowActionType = {
    type: 'FOLLOW'
    userId: string
}
type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: string
}
type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE',
    profile: any
}
