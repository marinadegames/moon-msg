// imports
import {
    FollowAC,
    SetCurrentPageAC, SetTotalUserCountAC,
    SetUsersAC, ToggleIsFetchingAC, ToggleIsFollowingIsProgressAC,
    UnfollowAC,
    UserType
} from "../../../Redux/usersReducer";
import FriendsAPIComponent from "./FriendsAPIComponent";
import {connect} from "react-redux";
import {rootReducerType} from "../../../Redux/store";


type MapDispatchPropsType = {
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    onClickFollowHandler: (id: number) => void
    onClickUnfollowHandler: (id: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingIsProgress: (isFetch: boolean, userId: number) => void
}
type MapStatePropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type FriendsAPIComponentType = MapDispatchPropsType & MapStatePropsType

// container component
const mapStateToProps = (state: rootReducerType) => {
    return {
        users: state.allUsers.users,
        totalUsersCount: state.allUsers.totalUsersCount,
        pageSize: state.allUsers.pageSize,
        currentPage: state.allUsers.currentPage,
        isFetching: state.allUsers.isFetching,
        followingInProgress: state.allUsers.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    setUsers: SetUsersAC,
    setCurrentPage: SetCurrentPageAC,
    setTotalUserCount: SetTotalUserCountAC,
    onClickFollowHandler: FollowAC,
    onClickUnfollowHandler: UnfollowAC,
    toggleIsFetching: ToggleIsFetchingAC,
    toggleIsFollowingIsProgress: ToggleIsFollowingIsProgressAC,

})(FriendsAPIComponent)
