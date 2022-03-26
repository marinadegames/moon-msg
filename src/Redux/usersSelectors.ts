// import
import {rootReducerType} from "./store";
// import {createSelector} from "reselect";

// selector
// export const getUserSuper = createSelector( () => {state.allUsers.users})

// selectors
export const getUsers = (state: rootReducerType) => state.allUsers.users
export const getTotalUsersCount = (state: rootReducerType) => state.allUsers.totalUsersCount
export const getPageSize = (state: rootReducerType) => state.allUsers.pageSize
export const getCurrentPage = (state: rootReducerType) => state.allUsers.currentPage
export const getIsFetching = (state: rootReducerType) => state.allUsers.isFetching
export const getFollowingInProgress = (state: rootReducerType) => state.allUsers.followingInProgress
