// import

// start state
import {FollowAC, itemsType, SetCurrentPageAC, SetTotalUserCountAC, SetUsersAC, ToggleIsFetchingAC, UnfollowAC, usersReducer} from "./usersReducer";

let startState: itemsType

beforeEach(() => {
    startState = {
        users: [
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
        ],
        pageSize: 6,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }


})


test('SET USERS', () => {
    const action = SetUsersAC(startState.users)
    const endState = usersReducer(startState, action)
    expect(endState.users.length).toBe(2)
})
test('FOLLOW USER', () => {
    const action = FollowAC(startState.users[0].id)
    const endState = usersReducer(startState, action)
    expect(endState.users[0].followed).toBe(true)
})
test('UNFOLLOW USER', () => {
    const action = UnfollowAC(startState.users[1].id)
    const endState = usersReducer(startState, action)
    expect(endState.users[1].followed).toBe(false)
})
test('SET CURRENT PAGE', () => {
    const currentPage = 2
    const action = SetCurrentPageAC(currentPage)
    const endState = usersReducer(startState, action)
    expect(endState.currentPage).toBe(currentPage)
})
test('SET TOTAL USER COUNT', () => {
    const totalCount = 35
    const action = SetTotalUserCountAC(totalCount)
    const endState = usersReducer(startState, action)
    expect(endState.totalUsersCount).toBe(totalCount)
})
test('TOGGLE IS FETCHING', () => {
    const action = ToggleIsFetchingAC(false)
    const endState = usersReducer(startState, action)
    expect(endState.isFetching).toBe(false)
})
// test('TOGGLE FOLLOWING PROGRESS', () => {
//     const userId = 2
//     const action = ToggleIsFollowingIsProgressAC(true, userId )
//     const endState = usersReducer(startState, action)
//     expect
// })