import {v1} from "uuid";
import {rerenderEntireTree} from "../index";

const ADD_POST = 'ADD_POST'

export const profileReducer = (state: any, action: any) => {

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

        state.posts.unshift(newPost)
        rerenderEntireTree()

    }
    return state
}

export const addPostActionCreator = (text: string) => {
    return {
        type: ADD_POST,
        newText: text
    }
}