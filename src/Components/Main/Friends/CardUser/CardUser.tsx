// imports
import React from 'react'
import s from './CardUser.module.css'
import {Dispatch} from "../../../../Redux/redux-store";
import {FollowAC, UnfollowAC} from "../../../../Redux/usersReducer";

// types
type CardUserPropsType = {
    // API
    name: string
    id: number
    uniqueUrlName: string | null
    photos: photoType
    status: string | null
    followed: boolean

    // my
    dispatch: Dispatch
    TEMP_AVATAR: any
    // maybe not
    countryUser?: string | null
    cityUser?: string | null
}
type photoType = {
    small: string | null
    large: string | null
}
// component


export const CardUser = (props: CardUserPropsType) => {

    const onClickFollowHandler = () => {
        props.dispatch(FollowAC(props.id))
    }
    const onClickUnfollowHandler = () => {
        props.dispatch(UnfollowAC(props.id))
    }


    return (
        <div className={s.cardUser} key={props.id}>
            <div className={s.userLogo}>

                {props.photos.small === null ? props.TEMP_AVATAR() : <img alt={'logo'} className={s.userLogoAvatar} src={props.photos.small}/>}

            </div>
            <div className={s.userInformText}>
                <h3 className={s.userName}>{props.name}</h3>
                <h5 className={s.userCountry}>{props.countryUser} {props.cityUser}</h5>
            </div>
            <div className={s.userInformText2}>
                <p className={s.userPhrase}>{props.status}</p>
            </div>
            {!props.followed
                ? <button className={s.followButton_TRUE} onClick={onClickFollowHandler}>+</button>
                : <button className={s.followButton_FALSE} onClick={onClickUnfollowHandler}>&#10004;</button>}
        </div>
    )
}