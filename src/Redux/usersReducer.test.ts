// import
import {FollowAC, setUsersAC, UnfollowAC, usersReducer, UserType} from "./usersReducer";

// start state
let startState: Array<UserType>

beforeEach( () => {
    startState = [
        {
            name: "Dmitrena",
            id: 22348,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null,
            },
            status: null,
            followed: false,
        },
        {
            name: "kanpo",
            id: 22347,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null,
            },
            status: null,
            followed: true,
        },
    ]


})



test('SET USERS', () => {
    const action = setUsersAC(startState)
    const endState = usersReducer(startState, action)
    expect(endState.length).toBe(2)
})
test( 'FOLLOW USER', () => {
    const action = FollowAC(startState[0].id)
    const endState = usersReducer(startState, action)
    expect(endState[0].followed).toBe(true)
})
test('UNFOLLOW USER', () => {
    const action = UnfollowAC(startState[1].id)
    const endState = usersReducer(startState, action)
    expect(endState[1].followed).toBe(false)
})