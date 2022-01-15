// imports
import {v1} from "uuid"
import {rerenderEntireTree} from "../index";

//types
export type AllPostsUserType = Array<PostType>
export type PostType = {
    id: string
    userName: string
    date: string
    likes: number
    comments: number
    shares: number
    text: string
}

// state

export let state = {
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

    state.posts.unshift(newPost)
    rerenderEntireTree()
}

