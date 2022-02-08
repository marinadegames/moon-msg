// import
import React from "react";
import s from './Friends.module.css'
import {CardUser} from "./CardUser/CardUser";
import axios from "axios";
import {Dispatch} from "../../../Redux/redux-store";

// types
type FriendsPropsType = {
    allUsers: any
    dispatch: Dispatch
}

// assets

// components

export const Friends = function (props: FriendsPropsType) {



    if (props.allUsers.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        })
    }

    return (
        <div>
            <div className={s.pageName}>Friends</div>
            <div className={s.mainUsers}>

                {props.allUsers.map((user: any) => {
                    return (
                        <CardUser id={user.id}
                                  dispatch={props.dispatch}
                                  countryUser={user.country}
                                  cityUser={user.city}
                                  userName={user.name}
                                  userPhrase={user.userPhrase}
                                  follow={user.follow}
                                  userId={user.id}

                        />
                    )
                })}
            </div>

            <button className={s.showMoreButton}>show more...</button>
        </div>
    )
}