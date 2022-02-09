// imports
import {v1} from "uuid";
import {UserLogo} from "./BigHeadsFile";

// types


// ============= types

// Action types
type ActionType = AddPostActionType | FollowActionType | UnfollowActionType
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

// State types
export type PostType = {
    id: string
    userName: string
    date: string
    likes: number
    comments: number
    shares: number
    text: string
}
export type ProfileType = {
    id: string
    birthtime: string
    name: string
    city: string
    country: string
    email: string
    userPhrase: string
    follow?: boolean
    avatar: any
    posts: Array<PostType>
}


// export const USER_ID_6 = v1()

// const
const ADD_POST = 'ADD_POST'

// initialState
const initialState: ProfileType =
    {
        id: v1(),
        name: 'Eugene Pashkevich',
        birthtime: '17.02.1997',
        city: 'Minsk',
        country: 'Belarus',
        email: 'marinadegames@gmail.com',
        userPhrase: 'I LIKE A PIZZA!!!',
        follow: false,
        avatar: UserLogo(),
        posts: [
            {
                id: v1(),
                userName: 'Eugene Pashkevich',
                date: '08.01.2022 in 14:21',
                likes: 1923,
                comments: 123,
                shares: 34,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labod minim veniam, quis nostrud exercitation ullamco',
            },
            {
                id: v1(),
                userName: 'Eugene Pashkevich',
                date: '08.01.2022 in 15:67',
                likes: 234,
                comments: 34,
                shares: 2,
                text: 'Hi, friends! How ary you?)))',
            },
            {
                id: v1(),
                userName: 'Eugene Pashkevich',
                date: '09.01.2022 in 09:02',
                likes: 123,
                comments: 1,
                shares: 0,
                text: 'I love IT-INCUBATOR',
            },
        ],
    }



// reducer
export const profileReducer = (state = initialState, action: ActionType): ProfileType => {
    switch (action.type) {
        case "ADD_POST":
            const newPost =
                {
                    id: v1(),
                    userName: 'Eugene Pashkevich',
                    date: '08.01.2022 in 22:00',
                    likes: 0,
                    comments: 0,
                    shares: 0,
                    text: action.newText,
                }
            return {...state, posts: [newPost, ...state.posts] }

        default:
            return state
    }

}


// Action Creators
export const AddPostAC = (newText: string, userId: string): AddPostActionType => {
    return {type: ADD_POST, newText, userId} as const
}
