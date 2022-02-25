// imports
import {Dispatch} from "redux";
import {requestsAPI} from "../Components/API/API";

// const
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


// ============= types

// Action types
type ActionType = AddPostActionType | FollowActionType | UnfollowActionType | SetUserProfileActionType
type AddPostActionType = {
    type: 'ADD_POST'
    newText: string
    userId: string
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
}


// initialState
const initialState: InitStateType = {
    posts: [],
    newPostText: '',
    profile: null,
}


// reducer
export const profileReducer = (state = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "ADD_POST":
            return state
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}


// Action Creators
export const AddPostAC = (newText: string, userId: string): AddPostActionType => {
    return {type: ADD_POST, newText, userId} as const
}
export const SetUserProfileAC = (profile: ProfileType): SetUserProfileActionType => {
    return {type: SET_USER_PROFILE, profile} as const
}

// thunks creators
export const setUserProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        requestsAPI.setProfile(userId)
            .then(resp => {
                dispatch(SetUserProfileAC(resp))
            })
    }
}