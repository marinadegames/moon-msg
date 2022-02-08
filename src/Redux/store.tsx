// imports
import {v1} from "uuid"

// const


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
    type: 'ADD_POST',
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
export type AllUsersType = KeyUserType
export type UserType = {
    id: string
    birthtime: string
    name: string
    city: string
    country: string
    email: string
    userPhrase: string
    posts: Array<PostType>
}
export type ActionType = SendMessageActionType | AddPostActionType

// id
export const USER_ID_1 = v1()
export const USER_ID_2 = v1()


// types
export type KeyUserType = {
    [key: string]: UserType
}


// store
let store: any = {
    _state: {
        allUsers: {
            [USER_ID_1]:
                {
                    id: USER_ID_1,
                    name: 'Eugene Pashkevich',
                    birthtime: '17.02.1997',
                    city: 'Minsk',
                    country: 'Belarus',
                    email: 'marinadegames@gmail.com',
                    userPhrase: 'w212',
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
                    id: USER_ID_2,
                    name: 'Elina Malina',
                    birthtime: '23.12.1998',
                    city: 'Minsk',
                    country: 'Belarus',
                    email: 'elinamalina@gmail.com',
                    userPhrase: '123124',
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
        },
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
        },
    },

}


// export

export default store






