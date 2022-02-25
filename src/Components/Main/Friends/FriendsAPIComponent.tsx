// import
import React from "react";
import {Friends} from "./Friends";
import {FriendsAPIComponentType} from "./FriendsContainer";

class FriendsAPIComponent extends React.Component<FriendsAPIComponentType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPageHandler = (currentPage: number) => {
        this.props.getUsersThunkCreator(currentPage, this.props.pageSize)
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
                         followThunkCreator={this.props.followThunkCreator}
                         unfollowThunkCreator={this.props.unfollowThunkCreator}
                />
            </div>
        )
    }
}


export default FriendsAPIComponent;
