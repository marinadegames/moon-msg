// imports
import {v1} from "uuid"
import {rerenderEntireTree} from "../index";

// const
const ADD_POST = 'ADD_POST'
const SEND_MESSAGE = 'SEND_MESSAGE'
//types
export type StoreType = {
    _state: StateType
    dispatch: (action: AddPostActionType) => void
}
export type StateType = {
    allUsers: AllUsersType
    allMessages: AllMessagesType
}
export type AllMessagesType = {
    LEFT: Array<MessageType>
    RIGHT: Array<MessageType>
}
export type PostType = {
    id: string
    userName: string
    date: string
    likes: number
    comments: number
    shares: number
    text: string
}
export type AddPostActionType = {
    type:  'ADD_POST',
    newText: string
}
export type SendMessageActionType = {
    type: 'SEND_MESSAGE',
    newMessage: string
}
export type MessageType = {
    id: string
    message: string
    time: string
}
export type AllUsersType = Array<UserType>
export type UserType = {
    id: string
    birthtime: string
    name: string
    city: string
    country: string
    email: string
    posts: Array<PostType>
}

export type ActionType = SendMessageActionType | AddPostActionType


// id
// const userId_1 = v1()
// const userId_2 = v1()


let store: StoreType = {
    _state: {
        allUsers: [
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
        ],
        allMessages: {
            LEFT: [
                {
                    id: v1(),
                    message: 'Hi, how are you?',
                    time: '16:25'
                },
                {
                    id: v1(),
                    message: 'Where are you?!',
                    time: '16:25'
                },
            ],

            RIGHT: [
                {
                    id: v1(),
                    message: "I'm fine!!!",
                    time: '16:26'
                },
            ],
        }

    },
    dispatch(action: ActionType) {   // { type: 'ADD_POST' }
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

            // state.allUsers[userId_1].posts.unshift(newPost)
            this._state.allUsers[0].posts.unshift(newPost)
            rerenderEntireTree()
        }
        if (action.type === SEND_MESSAGE) {
            let newMessage =
                {
                    id: v1(),
                    message: action.newMessage,
                    time: '16:25'
                }

            // state.allUsers[userId_1].posts.unshift(newPost)
            this._state.allMessages.RIGHT.push(newMessage)
            rerenderEntireTree()
        }
        // if (action.type === SEND_MESSAGE) {
        //
        // }
    }
}

export const addPostActionCreator = (text: string) => {
    return {
        type: ADD_POST,
        newText: text
    }
}
export const sendMessageActionCreator = (text: string) => {
    return {
        type: SEND_MESSAGE,
        newMessage: text
    }
}


export default store

// functional





