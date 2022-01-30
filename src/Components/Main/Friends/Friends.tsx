// import
import React from "react";
import s from './Friends.module.css'
import {CardUser} from "./CardUser/CardUser";

// types
type FriendsPropsType = {
    allUsers: any
}

// assets

// components

export const Friends = function (props: FriendsPropsType) {

    return (
        <div>
            <div className={s.pageName}>Friends</div>
            <div className={s.mainUsers}>
                {Object.values(props.allUsers).map ( (user: any) => {
                    return (
                        <CardUser id={user.id}
                                  countryUser={user.country}
                                  cityUser={user.city}
                                  userName={user.name}
                                  userPhrase={user.userPhrase}/>
                    )
                })}
            </div>

            <button className={s.showMoreButton} >show more...</button>
        </div>
    )
}