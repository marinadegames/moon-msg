// imports
import React from 'react'
import s from './CardUser.module.css'
import {FollowAC} from "../../../../Redux/profileReducer";
import {Dispatch} from "../../../../Redux/redux-store";

// types
type CardUserPropsType = {
    userName: string
    userPhrase: string
    countryUser: string
    cityUser: string
    id: string
    follow: boolean
    userId: string
    dispatch: Dispatch
    avatar: any
}

// component


export const CardUser = (props: CardUserPropsType) => {






    const onClickFollowHandler = () => {
        props.dispatch(FollowAC(props.userId))
    }
    const onClickUnfollowHandler = () => {
        props.dispatch(FollowAC(props.userId))
    }

    return (
        <div className={s.cardUser} key={props.id}>
            <div className={s.userLogo}>{props.avatar}</div>
            <div className={s.userInformText}>
                <h3 className={s.userName}>{props.userName}</h3>
                <h5 className={s.userCountry}>{props.countryUser}, {props.cityUser}</h5>
            </div>
            <div className={s.userInformText2}>
                <p className={s.userPhrase}>{props.userPhrase}</p>
            </div>


            {props.follow
                ? <button className={s.followButton_TRUE} onClick={onClickFollowHandler}>+</button>
                : <button className={s.followButton_FALSE} onClick={onClickUnfollowHandler}>&#10004;</button>}
        </div>
    )
}