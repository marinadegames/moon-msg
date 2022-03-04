// imports
import {Dispatch} from "redux";
import {profileAPI} from "../Components/API/API";

// const
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

// ============= types

// Action types
type ActionType =
    SetStatusActionType
    | AddPostActionType
    | FollowActionType
    | UnfollowActionType
    | SetUserProfileActionType

type SetStatusActionType = {
    type: 'SET_STATUS',
    status: string
}
type AddPostActionType = {
    type: 'ADD_POST'
    newText: string
    userId: number
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

// State types
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
    status?: string
}


// initialState
const initialState: InitStateType = {
    posts: [],
    newPostText: '',
    profile: null,
    status: '',
}


// reducer
export const profileReducer = (state = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "ADD_POST":
            return state
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case 'SET_STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}


// Action Creators
export const AddPostAC = (newText: string, userId: number): AddPostActionType => {
    return {type: ADD_POST, newText, userId} as const
}
export const SetUserProfileAC = (profile: ProfileType): SetUserProfileActionType => {
    return {type: SET_USER_PROFILE, profile} as const
}
export const SetStatusProfileAC = (status: string): SetStatusActionType => {
    return {type: SET_STATUS, status}
}

// thunks creators
export const setUserProfileThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(resp => {
                dispatch(SetUserProfileAC(resp))
            })
    }
}
export const getStatusThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(resp => {
                dispatch(SetStatusProfileAC(resp.data))
            })
    }
}
export const updateStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    dispatch(SetStatusProfileAC(resp.data))
                }

            })
    }
}