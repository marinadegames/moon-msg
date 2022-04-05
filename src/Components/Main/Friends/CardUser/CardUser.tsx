// imports
import React, {useCallback} from 'react'
import s from './CardUser.module.css'
import {BigHead} from "@bigheads/core";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {followThunkCreator, unfollowThunkCreator} from "../../../../Redux/usersReducer";

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
    // onClickFollowHandler: (id: number) => void
    // onClickUnfollowHandler: (id: number) => void
    followingInProgress: Array<number>

    // maybe not
    countryUser?: string | null
    cityUser?: string | null
}
type photoType = {
    small: string | null
    large: string | null
}
// component


export const CardUser = React.memo((props: CardUserPropsType) => {
    const dispatch = useDispatch()

    // functions
    const TEMP_AVATAR = useCallback(() => {
        return <BigHead/>
    }, [])

    const unfollowHandler = useCallback(() => {
        dispatch(unfollowThunkCreator(props.id))
        // dispatch(ToggleIsFollowingIsProgressAC(true, props.id))
    }, [dispatch, props.id])

    const followHandler = useCallback(() => {
        dispatch(followThunkCreator(props.id))
        // dispatch(ToggleIsFollowingIsProgressAC(false, props.id))
    }, [dispatch, props.id])

    // return
    return (
        <div className={s.cardUser} key={props.id}>
            <div className={s.userLogo}>

                <NavLink to={'/profile/' + props.id}>
                    {props.photos.small === null ? TEMP_AVATAR() :
                        <img alt={'logo'} className={s.userLogoAvatar} src={props.photos.small}/>}
                </NavLink>

            </div>
            <div className={s.userInformText}>
                <h3 className={s.userName}>{props.name}</h3>
                <h5 className={s.userCountry}>{props.countryUser} {props.cityUser}</h5>
            </div>
            <div className={s.userInformText2}>
                <p className={s.userPhrase}>{props.status}</p>
            </div>
            {!props.followed
                ?
                <button className={s.followButton_TRUE}
                        disabled={props.followingInProgress.some(id => id === props.id)}
                        onClick={followHandler}>+</button>
                :
                <button className={s.followButton_FALSE}
                        disabled={props.followingInProgress.some(id => id === props.id)}
                        onClick={unfollowHandler}>&#10004;</button>
            }
        </div>
    )
})