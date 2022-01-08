// import
import React from "react";
import s from './LeftSideBar.module.css'

// imports icons
import profileIcon from '../../Assets/iconProfile.png'
import messagesIcon from '../../Assets/msg.png'
import musicIcon from '../../Assets/musicIcon.png'
import FriendsIcon from '../../Assets/people.png'
import SettingsIcon from '../../Assets/keypng.png'

// types

// assets

// components

export const LeftSideBar = function () {

    return (
        <div className={s.LeftSideBar}>
            <div className={s.menuItemACTIVE}>
                <img src={profileIcon} height='50px' width='50px' alt={'profileIcon'}/>
                Profile
                <div className={s.boxVerticalLineActive}>
                    <div className={s.verticalLineActive}/>
                </div>
            </div>
            <div className={s.menuItem}>
                <img src={messagesIcon} height='50px' width='50px' alt={'messagesIcon'}/>
                Messages
            </div>
            <div className={s.menuItem}>
                <img src={musicIcon} height='50px' width='50px' alt={'musicIcon'}/>
                Music
            </div>
            <div className={s.menuItem}>
                <img src={FriendsIcon} height='50px' width='50px' alt={'FriendsIcon'}/>
                Friends
            </div>
            <div className={s.menuItem}>
                <img src={SettingsIcon} height='50px' width='50px' alt={'SettingsIcon'}/>
                Settings
            </div>
        </div>
    )
}