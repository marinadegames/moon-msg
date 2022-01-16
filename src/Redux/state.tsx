// imports
import {v1} from "uuid"
import {rerenderEntireTree} from "../index";
import {ElinaMalina, GlebTop4ipk, JamesonWood, MrGray, MrSmith} from "./BigHeadsFile";
import {ReactNode} from "react";

// assets


//types

export type PostType = {
    id: string
    userName: string
    date: string
    likes: number
    comments: number
    shares: number
    text: string
}
export type DialogsType = {
    id: string
    userName: string
    lastMessage: string
    selectedDialog: boolean
    avatar: () => ReactNode
    time: string
}
export type MessagesType = {
    id: string
    message: string
}
type ProfilePageType = {
    posts: PostType[]
}
type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

// state
export let state: StateType = {

    profilePage: {
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
    },

    dialogsPage: {
        dialogs: [
            {
                id: v1(),
                avatar: ElinaMalina,
                userName: 'Elina Malina',
                lastMessage: 'Hi, how are you?',
                selectedDialog: true,
                time: '18:34',
            },
            {
                id: v1(),
                avatar: GlebTop4ipk,
                userName: 'Gleb Top4ipk',
                lastMessage: 'Шо ты там, собака сутулая?)',
                selectedDialog: false,
                time: '14:32',
            },
            {
                id: v1(),
                avatar: MrSmith,
                userName: 'Mr. Smith',
                lastMessage: 'Why are you resisting?',
                selectedDialog: false,
                time: '15:56',
            },
            {
                id: v1(),
                avatar: MrGray,
                userName: 'Mr. Gray',
                lastMessage: 'Anastasia...',
                selectedDialog: false,
                time: '00:43',
            },
            {
                id: v1(),
                avatar: JamesonWood,
                userName: 'Jameson Wood',
                lastMessage: 'YEEEEEEESSSS!!!!',
                selectedDialog: false,
                time: '09:12',
            },
        ],
        messages: [
            {id: v1(), message: 'Hi, how are you?'},
            {id: v1(), message: 'yes'},
            {id: v1(), message: 'No< its crazy'},
            {id: v1(), message: 'GOOD! START!'},
            {id: v1(), message: 'holywaaaaaaaaaaar!'},
        ],
    }

}

// functional

export const addPost = (text: string) => {
    let newPost =
        {
            id: v1(),
            userName: 'Eugene Pashkevich',
            date: '08.01.2022 in 22:00',
            likes: 0,
            comments: 0,
            shares: 0,
            text: text,
        }

    state.profilePage.posts.unshift(newPost)
    rerenderEntireTree()
    console.log(state)
}
