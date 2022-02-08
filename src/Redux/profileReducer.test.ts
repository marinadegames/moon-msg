// imports
import {v1} from "uuid";
import {AllUsersType} from "./store";
import {AddPostAC, profileReducer, USER_ID_1} from "./profileReducer";


// start state
const startState: AllUsersType = {
    [USER_ID_1]: {
        id: USER_ID_1,
        name: 'Eugene Pashkevich',
        birthtime: '17.02.1997',
        city: 'Minsk',
        country: 'Belarus',
        email: 'marinadegames@gmail.com',
        userPhrase: 'I LIKE A PIZZA!!!',
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
}


// tests
test('ADD POST', () => {

    const newText = `I am captain Jack Sparrow`
    const action = AddPostAC(newText)
    const endState = profileReducer(startState, action)

    expect(endState[USER_ID_1].posts[0].text).toBe(newText)
    expect(endState[USER_ID_1].posts.length).toBe(startState[USER_ID_1].posts.length + 1)


})