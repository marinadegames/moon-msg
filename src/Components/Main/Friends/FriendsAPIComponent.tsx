// import
import React from "react";
import {Friends} from "./Friends";
import {FriendsAPIComponentType} from "./FriendsContainer";
import {requestsAPI} from "../../API/API";

class FriendsAPIComponent extends React.Component<FriendsAPIComponentType> {

    componentDidMount() {
        requestsAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
            });
    }

    setCurrentPageHandler = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        requestsAPI.getUsers(currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {

        return (
            <div>
                <Friends users={this.props.users}
                         isFetching={this.props.isFetching}
                         toggleIsFetching={this.props.toggleIsFetching}
                         setCurrentPageHandler={this.setCurrentPageHandler}
                         currentPage={this.props.currentPage}
                         pageSize={this.props.pageSize}
                         onClickFollowHandler={this.props.onClickFollowHandler}
                         setTotalUserCount={this.props.setTotalUserCount}
                         onClickUnfollowHandler={this.props.onClickUnfollowHandler}
                         totalUsersCount={this.props.totalUsersCount}
                         followingInProgress={this.props.followingInProgress}
                         toggleIsFollowingIsProgress={this.props.toggleIsFollowingIsProgress}
                />
            </div>
        )
    }
}


export default FriendsAPIComponent;
