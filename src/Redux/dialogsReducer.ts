// imports
import {v1} from "uuid";
import {AllMessagesType} from "./store";

// const
const SEND_MESSAGE = 'SEND_MESSAGE'

// initialState
let initialState: AllMessagesType  = {
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

// types
type ActionType = {
    type: 'SEND_MESSAGE'
    newMessage: string
}


// reducer
export const dialogsReducer = (state = initialState, action: ActionType): AllMessagesType => {

    if (action.type === SEND_MESSAGE) {
        let newMessage =
            {
                id: v1(),
                message: action.newMessage,
                time: '16:25'
            }
        return {...state, RIGHT: [...state.RIGHT, newMessage] }
    }

    return state
}

export const sendMessageActionCreator = (text: string) => {
    return {
        type: SEND_MESSAGE,
        newMessage: text
    }
}