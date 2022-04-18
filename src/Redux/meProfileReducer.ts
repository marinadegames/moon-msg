import {Dispatch} from "redux";
import {profileAPI} from "../api/API";

const initialState: InitStateType = {
    posts: [],
    newPostText: '',
    profile: null,
    status: '',
}

export const meProfileReducer = (state = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "ME_ADD_POST":
            return state
        case "ME_SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case 'ME_SET_STATUS':
            return {...state, status: action.status}
        case "ME_UPDATE_PHOTO":
            if (state.profile) {
                return {...state, profile: {...state.profile, photos: action.file}}
            }
            return state
        default:
            return state
    }
}

export const AddPostAC = (newText: string, userId: number): AddPostActionType => {
    return {type: ME_ADD_POST, newText, userId} as const
}
export const SetMeProfileAC = (profile: ProfileType): SetUserProfileActionType => {
    return {type: ME_SET_USER_PROFILE, profile} as const
}
export const SetMyStatusProfileAC = (status: string): SetStatusActionType => {
    return {type: ME_SET_STATUS, status}
}
export const UpdateProfilePhotoAC = (file: PhotosType): UpdatePhotoActionType => {
    return {type: ME_UPDATE_PHOTO, file}
}

export const setMeProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.getProfile(userId)
        dispatch(SetMeProfileAC(res))
    } catch {
        console.warn('ERROR setMeProfileTC')
    } finally {

    }
}
export const getMyStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.getStatus(userId)
        dispatch(SetMyStatusProfileAC(res.data))
    } catch {
        console.warn('ERROR')
    } finally {

    }
}
export const updateMyStatusTC = (status: string) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(SetMyStatusProfileAC(status))
            console.log(res.data)
        }
    } catch {
        console.warn('ERROR')
    } finally {

    }
}

export const savePhotoTC = (file: PhotosType) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.savePhoto(file)
        if (res.data.resultCode === 0) {
            dispatch(UpdateProfilePhotoAC(res.data.data.photos))
        }
    } catch {
        console.warn('ERROR')
    } finally {

    }
}

export const saveProfileTC = (profile: any) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.saveProfile(profile)
        if (res.data.resultCode === 0) {
            console.log(res)
        }
    } catch {
        console.warn('ERROR saveProfileTC')
    } finally {
    }
}

const ME_ADD_POST = 'ME_ADD_POST'
const ME_SET_USER_PROFILE = 'ME_SET_USER_PROFILE'
const ME_SET_STATUS = 'ME_SET_STATUS'
const ME_UPDATE_PHOTO = 'ME_UPDATE_PHOTO'
type ActionType =
    SetStatusActionType
    | AddPostActionType
    | FollowActionType
    | UnfollowActionType
    | SetUserProfileActionType
    | UpdatePhotoActionType

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
    type: 'ME_SET_STATUS',
    status: string
}
type AddPostActionType = {
    type: 'ME_ADD_POST'
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
    type: 'ME_SET_USER_PROFILE',
    profile: any
}
type UpdatePhotoActionType = {
    type: 'ME_UPDATE_PHOTO',
    file: PhotosType
}
