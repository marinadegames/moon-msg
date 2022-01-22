import {v1} from "uuid";
import {rerenderEntireTree} from "../index";


const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state: any, action: any) => {

    if (action.type === SEND_MESSAGE) {
        let newMessage =
            {
                id: v1(),
                message: action.newMessage,
                time: '16:25'
            }

        state.RIGHT.push(newMessage)
        rerenderEntireTree()
    }

    return state
}

export const sendMessageActionCreator = (text: string) => {
    return {
        type: SEND_MESSAGE,
        newMessage: text
    }
}