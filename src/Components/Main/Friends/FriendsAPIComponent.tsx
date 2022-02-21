// import
import React from "react";
import axios from "axios";
import {Friends} from "./Friends";
import {FriendsAPIComponentType} from "./FriendsContainer";

class FriendsAPIComponent extends React.Component<FriendsAPIComponentType> {

    componentDidMount() {
        // console.log('CURRENT PAGE: ' + this.props.currentPage)
        // console.log('TOTAL USERS COUNT: ' + this.props.totalUsersCount)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            });
    }

    setCurrentPageHandler = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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
                         totalUsersCount={this.props.totalUsersCount}/>
            </div>
        )
    }
}


export default FriendsAPIComponent;
