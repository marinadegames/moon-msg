// imports
import React, {useCallback} from 'react'
import s from './CardUser.module.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {followTC, unfollowTC} from "../../../redux/usersReducer";
import {Anonymous} from "../../../utils/BigHeadsFile";

// types
type CardUserPropsType = {
    // api
    name: string
    id: number
    uniqueUrlName: string | null
    photos: photoType
    status: string | null
    followed: boolean
    followingInProgress: Array<number>
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
    const unfollowHandler = useCallback(() => {
        dispatch(unfollowTC(props.id))
    }, [dispatch, props.id])
    const followHandler = useCallback(() => {
        dispatch(followTC(props.id))
    }, [dispatch, props.id])

    return (
        <div className={s.cardUser} key={props.id}>
            <div className={s.userLogo}>
                <Link to={'/profile/' + props.id}>
                    {props.photos.small === null ? Anonymous() :
                        <img alt={'logo'} className={s.userLogoAvatar} src={props.photos.small}/>}
                </Link>
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