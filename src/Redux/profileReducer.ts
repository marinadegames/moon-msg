// imports
import {v1} from "uuid";
import {AllUsersType} from "./store";

// id
export const USER_ID_1 = v1()
export const USER_ID_2 = v1()
export const USER_ID_3 = v1()
export const USER_ID_4 = v1()
export const USER_ID_5 = v1()
export const USER_ID_6 = v1()

// const
const ADD_POST = 'ADD_POST'

// initialState
const initialState: AllUsersType = {
    [USER_ID_1]: {
        id: USER_ID_1,
        name: 'Eugene Pashkevich',
        birthtime: '17.02.1997',
        city: 'Minsk',
        country: 'Belarus',
        email: 'marinadegames@gmail.com',
        userPhrase: 'I LIKE A PIZZA!!!',
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
    [USER_ID_2]: {
        id: USER_ID_2,
        name: 'Elina Malina',
        birthtime: '23.12.1998',
        city: 'Minsk',
        country: 'Belarus',
        email: 'elinamalina@gmail.com',
        userPhrase: 'I LIKE A MUSIC!!!',
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
    [USER_ID_3]: {
        id: USER_ID_3,
        name: 'Andrew Water',
        birthtime: '18.12.21',
        city: 'Minsk',
        country: 'Belarus',
        email: 'adkreyJudkiy@gmail.com',
        userPhrase: 'I LIKE A WATER!!!',
        posts: []
    },
    [USER_ID_4]: {
        id: USER_ID_4,
        name: 'Kot Vasya',
        birthtime: '01.02.2012',
        city: 'Minsk',
        country: 'Belarus',
        email: 'kotVasya@gmail.com',
        userPhrase: 'I LIKE A WATER!!!',
        posts: []
    },
    [USER_ID_5]: {
        id: USER_ID_5,
        name: 'John Smith',
        birthtime: 'xx.xx.xxxx',
        city: 'xxxx',
        country: '????',
        email: '??????',
        userPhrase: 'xwxwexwexwe',
        posts: []
    },
    [USER_ID_6]: {
        id: USER_ID_6,
        name: 'Mr. Nikto',
        birthtime: 'xx.xx.xxxx',
        city: 'xxxx',
        country: '????',
        email: '??????',
        userPhrase: 'eryrth5t5',
        posts: []
    },
}

// types
export type ActionType = AddPostActionType
type AddPostActionType = {
    type: 'ADD_POST'
    newText: string
}

// reducer
export const profileReducer = (state = initialState, action: ActionType): AllUsersType => {
    switch (action.type) {
        case "ADD_POST":
            let newPost =
                {
                    id: v1(),
                    userName: 'Eugene Pashkevich',
                    date: '08.01.2022 in 22:00',
                    likes: 0,
                    comments: 0,
                    shares: 0,
                    text: action.newText,
                }

            return {...state, [USER_ID_1]: {...state[USER_ID_1], posts: [newPost, ...state[USER_ID_1].posts]}}
        default:
            return state
    }

}


// Action Creators
export const AddPostAC = (newText: string):AddPostActionType => {
    return {type: ADD_POST, newText: newText} as const
}