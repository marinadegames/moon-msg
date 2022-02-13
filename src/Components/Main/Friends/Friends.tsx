// import
import React, {useEffect} from "react";
import s from './Friends.module.css'
import {CardUser} from "./CardUser/CardUser";
import {Dispatch} from "../../../Redux/redux-store";
import axios from "axios";
import {setUsersAC, UserType} from "../../../Redux/usersReducer";
import {BigHead} from "@bigheads/core";


// types
type FriendsPropsType = {
    allUsers: Array<UserType>
    dispatch: Dispatch
}

// components

export const Friends = function (props: FriendsPropsType) {

    useEffect( () => {
        if (props.allUsers.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.dispatch(setUsersAC(response.data.items))
            })
        }
    }, [props.allUsers])


    const TEMP_AVATAR = () => (
        <BigHead/>
    )

    return (
        <div>
            <div className={s.pageName}>Friends</div>
            <div className={s.mainUsers}>

                {props.allUsers.map((user: any) => {
                    return (
                        <CardUser name={user.name}
                                  id={user.id}
                                  uniqueUrlName={user.uniqueUrlName}
                                  photos={user.photos}
                                  status={user.status}
                                  followed={user.followed}
                                  dispatch={props.dispatch}
                                  TEMP_AVATAR={TEMP_AVATAR}
                        />
                    )
                })}
            </div>

            <button className={s.showMoreButton}>show more...</button>

        </div>
    )
}

