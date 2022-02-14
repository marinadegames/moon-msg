// import
import React from "react";
import s from "./Friends.module.css";
import {CardUser} from "./CardUser/CardUser";
import {BigHead} from "@bigheads/core";
import {itemsType, SetCurrentPageAC, setTotalUserCountAC, setUsersAC} from "../../../Redux/usersReducer";
import {Dispatch} from "../../../Redux/redux-store";
import axios from "axios";

// types
type FriendsPropsType = {
    allUsers: itemsType
    dispatch: Dispatch
}


class FriendsClass extends React.Component<FriendsPropsType, any> {


    TEMP_AVATAR = () => (
        <BigHead/>
    )

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.allUsers.currentPage}&count=${this.props.allUsers.pageSize}`).then(response => {
            this.props.dispatch(setUsersAC(response.data.items))
            this.props.dispatch(setTotalUserCountAC(response.data.totalCount))
        });
    }

    setCurrentPageHandler = (currentPage: number) => {
        this.props.dispatch(SetCurrentPageAC(currentPage))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.allUsers.pageSize}`).then(response => {
            this.props.dispatch(setUsersAC(response.data.items))
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.allUsers.totalUsersCount / this.props.allUsers.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (

            <div>
                <div className={s.pageName}>Friends</div>
                {pages.map(p => {
                    return (
                        <span
                            onClick={() => this.setCurrentPageHandler(p)}
                            className={this.props.allUsers.currentPage === p ? s.pageNumberButton_active : s.pageNumberButton}>{p}</span>
                    )
                })}
                <div className={s.mainUsers}>


                    {this.props.allUsers.users.map((user: any) => {
                        return (
                            <CardUser name={user.name}
                                      id={user.id}
                                      uniqueUrlName={user.uniqueUrlName}
                                      photos={user.photos}
                                      status={user.status}
                                      followed={user.followed}
                                      dispatch={this.props.dispatch}
                                      TEMP_AVATAR={this.TEMP_AVATAR}
                            />
                        )
                    })}
                </div>

                <button className={s.showMoreButton}>show more...</button>

            </div>
        )
    }
}


export default FriendsClass;
