// imports
import {v1} from "uuid";

// types
// ACTION types
type SendMessageActionType = {
    type: 'SEND_MESSAGE'
    newMessage: string
}
type ActionType = SendMessageActionType

// state types
export type AllMessagesType = {
    LEFT: Array<MessageType>
    RIGHT: Array<MessageType>
}
export type MessageType = {
    id: string
    message: string
    time: string
}


// initialState
let initialState: AllMessagesType = {
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


// reducer
export const dialogsReducer = (state = initialState, action: ActionType): AllMessagesType => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            let newMessage =
                {
                    id: v1(),
                    message: action.newMessage,
                    time: '16:25'
                }
            return {...state, RIGHT: [...state.RIGHT, newMessage]}
        default:
            return state
    }
}

export const SendMessageAC = (text: string): SendMessageActionType => {
    return {type: 'SEND_MESSAGE', newMessage: text} as const
}