// imports
import React from "react"
import {v1} from "uuid"

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
export const postsUser: AllPostsUserType = [
    {
        id: v1(),
        userName: 'Eugene Pashkevich',
        date: '08.01.2022 in 14:21',
        likes: 1923,
        comments: 123,
        shares: 34,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
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


// functional

export const addPost = (text: string) => {

}
