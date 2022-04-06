// imports
import {InitStateType, profileReducer, ProfileType, SetUserProfileAC} from "./profileReducer";


// start state
let startState: InitStateType
beforeEach(() => {
    startState = {
        posts: [],
        newPostText: '',
        profile: null,
        status: ''
    }
})

// tests
// test('ADD POST', () => {
//     const newPost = 'new post'
//     const action =
// })

test( 'SET USER PROFILE', () => {
    const newUser: ProfileType = {
        aboutMe: 'я крутой чувак 1001%',
        contacts: {
            facebook: null,
            website: null,
            vk:  null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink:  null,
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: 'samurai dimych',
        userId: 1,
        photos: {
            small: null,
            large: null,
        }
    }

    const action = SetUserProfileAC(newUser)
    const endState = profileReducer(startState, action)
    expect(endState.profile).toBe(newUser)
})

