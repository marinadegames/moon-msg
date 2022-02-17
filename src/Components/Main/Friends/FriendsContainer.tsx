// imports
import {
    FollowAC,
    SetCurrentPageAC, SetTotalUserCountAC,
    SetUsersAC,
    UnfollowAC,
    UserType
} from "../../../Redux/usersReducer";
import FriendsAPIComponent from "./FriendsAPIComponent";
import {connect} from "react-redux";
import { Dispatch } from "redux";
import {rootReducerType} from "../../../Redux/store";



type MapDispatchPropsType = {
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    onClickFollowHandler: (id: number) => void
    onClickUnfollowHandler: (id: number) => void

}
type MapStatePropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

export type FriendsAPIComponentType = MapDispatchPropsType & MapStatePropsType
// container component

const mapStateToProps = (state: rootReducerType) => {

    return {
        users: state.allUsers.users,
        totalUsersCount: state.allUsers.totalUsersCount,
        pageSize: state.allUsers.pageSize,
        currentPage: state.allUsers.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsers: (users: Array<UserType>) => {
            dispatch(SetUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(SetTotalUserCountAC(totalCount))
        },
        onClickFollowHandler: (id: number) => {
            dispatch(FollowAC(id))
        },
        onClickUnfollowHandler: (id: number) => {
            dispatch(UnfollowAC(id))
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsAPIComponent)
