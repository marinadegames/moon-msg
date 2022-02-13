// import
import React from "react";
import s from "./Friends.module.css";
import {CardUser} from "./CardUser/CardUser";
import {BigHead} from "@bigheads/core";
import {setUsersAC, UserType} from "../../../Redux/usersReducer";
import {Dispatch} from "../../../Redux/redux-store";
import axios from "axios";

// types
type FriendsPropsType = {
    allUsers: Array<UserType>
    dispatch: Dispatch
}

class FriendsClass extends React.Component<FriendsPropsType, any> {


    TEMP_AVATAR = () => (
        <BigHead/>
    )

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.dispatch(setUsersAC(response.data.items))
        });
    }

    render() {
        return (
            <div>
                <div className={s.pageName}>Friends</div>
                <div className={s.mainUsers}>

                    {this.props.allUsers.map((user: any) => {
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
