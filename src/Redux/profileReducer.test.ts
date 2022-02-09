// imports
import {v1} from "uuid";
import {AddPostAC, profileReducer, ProfileType,} from "./profileReducer";
import {UserLogo} from "./BigHeadsFile";



// start state
const startState: ProfileType =
    {
        id: v1(),
        name: 'Eugene Pashkevich',
        birthtime: '17.02.1997',
        city: 'Minsk',
        country: 'Belarus',
        email: 'marinadegames@gmail.com',
        userPhrase: 'I LIKE A PIZZA!!!',
        follow: true,
        avatar: UserLogo(),
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



// tests
test('ADD POST', () => {

    const userId = startState.id
    const newText = `I am captain Jack Sparrow`
    const action = AddPostAC(newText, userId)
    const endState = profileReducer(startState, action)

    expect(endState.posts[0].text).toBe(newText)
    expect(endState.posts.length).toBe(startState.posts.length + 1)


})

// test('FOLLOW USER', () => {
//
//     const userId = startState.id
//     const action = FollowAC(userId)
//
//     const endState = profileReducer(startState, action)
//
//     expect(endState.follow).toBe(!startState[0].follow)
//
// })
//
// test('UNFOLLOW USER', () => {
//
//     const userId = startState[0].id
//     const action = UnfollowAC(userId)
//
//     const endState = profileReducer(startState, action)
//
//     expect(endState.follow).toBe(!startState[0].follow)
//
// })