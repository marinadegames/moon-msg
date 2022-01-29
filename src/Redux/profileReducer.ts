// imports
import {v1} from "uuid";
import {AllUsersType} from "./store";

// id
export const USER_ID_1 = v1()
export const USER_ID_2 = v1()

// const
const ADD_POST = 'ADD_POST'

// initialState
let initialState: AllUsersType = {
        [USER_ID_1]:
            {
                id: 'ID_1',
                name: 'Eugene Pashkevich',
                birthtime: '17.02.1997',
                city: 'Minsk',
                country: 'Belarus',
                email: 'marinadegames@gmail.com',
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
        [USER_ID_2]:
            {
                id: 'ID_2',
                name: 'Elina Malina',
                birthtime: '23.12.1998',
                city: 'Minsk',
                country: 'Belarus',
                email: 'elinamalina@gmail.com',
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
    }

// types
export type ActionType = {
    type: 'ADD_POST'
    newText: string
}

// reducer
export const profileReducer = (state = initialState, action: ActionType): AllUsersType => {
    if (action.type === ADD_POST) {

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

        return {...state, [USER_ID_1]: {...state[USER_ID_1], posts: [...state[USER_ID_1].posts, newPost]}}

    }
    return state
}

export const addPostActionCreator = (text: string) => {
    return {
        type: ADD_POST,
        newText: text
    }
}