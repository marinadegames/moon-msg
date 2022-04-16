// imports
import {v1} from "uuid";
import {AllMessagesType, dialogsReducer, SendMessageAC} from "./dialogsReducer";


// start state
const startState: AllMessagesType = {
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


// tests
test('SEND MESSAGE', () => {
    const newTextMessage = "IT'S MY CAR!!!"
    const action = SendMessageAC(newTextMessage)
    const endState = dialogsReducer(startState, action)
    expect(endState.RIGHT[1].message).toBe(newTextMessage)
})