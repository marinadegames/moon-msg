// imports
import React from 'react'
import s from './CardUser.module.css'
import {BigHead} from "@bigheads/core";

// types
type CardUserPropsType = {
    userName: string
    userPhrase: string
    locationUser: string
    id: string
}

// component


export const CardUser = (props: CardUserPropsType) => {

    const userLogo = () => (
        <BigHead />
    )
    return (
        <div className={s.cardUser} key={props.id}>
            <div className={s.userLogo}>{userLogo()}</div>
            <div className={s.userInformText}>
                <h3 className={s.userName}>{props.userName}</h3>
                <h5 className={s.userCountry}>{props.locationUser}</h5>

            </div>
            <div className={s.userInformText}>
                <p className={s.userPhrase}>{props.userPhrase}</p>
            </div>

        </div>
    )
}