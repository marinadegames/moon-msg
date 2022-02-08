// imports
import {v1} from "uuid";
import {AndrewWater, ElinaMalina, JohnSmith, KotVasya, MrNikto, UserLogo} from "./BigHeadsFile";

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
export type AllUsersType = Array<UserType>
export type UserType = {
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
const initialState: AllUsersType = [
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
        ]
    },
    {
        id: v1(),
        name: 'Elina Malina',
        birthtime: '23.12.1998',
        city: 'Minsk',
        country: 'Belarus',
        email: 'elinamalina@gmail.com',
        userPhrase: 'I LIKE A MUSIC!!!',
        follow: true,
        avatar: ElinaMalina(),
        posts: [
            {
                id: v1(),
                userName: 'Elina Malina',
                date: '08.01.2022 in 14:21',
                likes: 1923,
                comments: 123,
                shares: 34,
                text: 'WHAT YOU SAY BUT MY MOM?!',
            },
            {
                id: v1(),
                userName: 'Elina Malina',
                date: '08.01.2022 in 15:67',
                likes: 234,
                comments: 34,
                shares: 2,
                text: 'Hi, friends! How ary you?)))',
            },
            {
                id: v1(),
                userName: 'Elina Malina',
                date: '09.01.2022 in 09:02',
                likes: 123,
                comments: 1,
                shares: 0,
                text: 'I love IT-INCUBATOR',
            },
        ]
    },
    {
        id: v1(),
        name: 'Andrew Water',
        birthtime: '18.12.21',
        city: 'Minsk',
        country: 'Belarus',
        email: 'adkreyJudkiy@gmail.com',
        userPhrase: 'I LIKE A WATER!!!',
        follow: false,
        avatar: AndrewWater(),
        posts: []
    },
    {
        id: v1(),
        name: 'Kot Vasya',
        birthtime: '01.02.2012',
        city: 'Minsk',
        country: 'Belarus',
        email: 'kotVasya@gmail.com',
        userPhrase: 'I LIKE A WATER!!!',
        follow: false,
        avatar: KotVasya(),
        posts: []
    },
    {
        id: v1(),
        name: 'John Smith',
        birthtime: 'xx.xx.xxxx',
        city: 'xxxx',
        country: '????',
        email: '??????',
        userPhrase: 'xwxwexwexwe',
        follow: false,
        avatar: JohnSmith(),
        posts: []
    },
    {
        id: v1(),
        name: 'Mr. Nikto',
        birthtime: 'xx.xx.xxxx',
        city: 'xxxx',
        country: '????',
        email: '??????',
        userPhrase: 'eryrth5t5',
        follow: true,
        avatar: MrNikto(),
        posts: []
    },
]


// reducer
export const profileReducer = (state = initialState, action: ActionType): AllUsersType => {
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
            let copyState = [...state]
            return copyState.map( user => user.id === action.userId ? {...user, posts: [newPost ,...user.posts]} : user)
        case "FOLLOW":
            const copyStateFollow = [...state]
            return copyStateFollow.map( user => user.id === action.userId ? {...user, follow: !user.follow} : user)
        case "UNFOLLOW":
            const copyStateUnfollow = [...state]
            return copyStateUnfollow.map( user => user.id === action.userId ? {...user, follow: !user.follow} : user)
        default:
            return state
    }

}


// Action Creators
export const AddPostAC = (newText: string, userId: string): AddPostActionType => {
    return {type: ADD_POST, newText, userId} as const
}
export const FollowAC = (userId: string): FollowActionType => {
    return {type: 'FOLLOW', userId} as const
}
export const UnfollowAC = (userId: string): UnfollowActionType => {
    return {type: "UNFOLLOW", userId} as const
}
