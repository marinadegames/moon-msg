// imports
import React, {useCallback} from 'react'
import s from './CardUser.module.css'
import {BigHead} from "@bigheads/core";
import {NavLink} from "react-router-dom";
import axios from "axios";


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
    onClickFollowHandler: (id: number) => void
    onClickUnfollowHandler: (id: number) => void


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


    const TEMP_AVATAR = useCallback(() => {
        return <BigHead/>
    }, [])

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
                        onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                                null,
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'bb507bdb-8e96-4353-8e86-10a14bdf8963'
                                    },
                                }
                            )
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.onClickFollowHandler(props.id)
                                        console.log('Follow!!!')
                                    }
                                })
                                .catch(error => {
                                    console.warn(error)
                                })

                        }}>+</button>
                :
                <button className={s.followButton_FALSE}
                        onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'bb507bdb-8e96-4353-8e86-10a14bdf8963'
                                    },
                                }
                            )
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.onClickUnfollowHandler(props.id)
                                        console.log('UNFOLLOW!')
                                    }
                                })
                                .catch(error => {
                                    console.warn(error)
                                })

                        }}>&#10004;</button>
            }
        </div>
    )
})