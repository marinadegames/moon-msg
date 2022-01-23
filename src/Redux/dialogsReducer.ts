// imports
import {v1} from "uuid";
import {rerenderEntireTree} from "../index";

// const
const SEND_MESSAGE = 'SEND_MESSAGE'

// initialState
// let initialState = {
//     LEFT: [
//         {
//             id: v1(),
//             message: 'Hi, how are you?',
//             time: '16:25'
//         },
//         {
//             id: v1(),
//             message: 'Where are you?!',
//             time: '16:25'
//         },
//     ],
//
//     RIGHT: [
//         {
//             id: v1(),
//             message: "I'm fine!!!",
//             time: '16:26'
//         },
//     ],
// }

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