// import
import React, {useState} from "react";
import s from './LeftSideBar.module.css'

// imports icons
import profileIcon from '../../assets/iconProfile.png'
import messagesIcon from '../../assets/msg.png'
import musicIcon from '../../assets/musicIcon.png'
import FriendsIcon from '../../assets/people.png'
import SettingsIcon from '../../assets/keypng.png'
import HomeIcon from '../../assets/home.png'
import {RouteNames} from "../../routes";
import {ItemMenu} from "./ItemMenu";


// types
export type statusPageActiveType = 'PROFILE' | 'MESSAGES' | 'MUSIC' | 'FRIENDS' | 'SETTINGS' | 'HOME' | 'ME'


// components

export const LeftSideBar = () => {

    const [activeItemMenu, setActiveItemMenu] = useState('HOME')

    const changeStatusItemMenu = (pageActive: statusPageActiveType) => {
        if (pageActive === 'PROFILE') setActiveItemMenu('PROFILE')
        else if (pageActive === 'MESSAGES') setActiveItemMenu('MESSAGES')
        else if (pageActive === 'MUSIC') setActiveItemMenu('MUSIC')
        else if (pageActive === 'FRIENDS') setActiveItemMenu('FRIENDS')
        else if (pageActive === 'SETTINGS') setActiveItemMenu('SETTINGS')
        else if (pageActive === 'HOME') setActiveItemMenu('HOME')
        else if (pageActive === 'ME') setActiveItemMenu('ME')
    }

    return (
        <div className={s.LeftSideBar}>
            <ItemMenu name={'HOME'}
                      changeStatusItemMenu={changeStatusItemMenu}
                      img={HomeIcon}
                      activeItemMenu={activeItemMenu}
                      link={'/'}
                      title={'Home'}/>
            <ItemMenu name={'ME'}
                      title={'My profile'}
                      changeStatusItemMenu={changeStatusItemMenu}
                      img={profileIcon}
                      activeItemMenu={activeItemMenu}
                      link={RouteNames.ME}/>
            <ItemMenu name={'MESSAGES'}
                      title={'Messages'}
                      changeStatusItemMenu={changeStatusItemMenu}
                      img={messagesIcon}
                      activeItemMenu={activeItemMenu}
                      link={RouteNames.MESSAGES}/>
            <ItemMenu name={'MUSIC'}
                      title={'Music'}
                      changeStatusItemMenu={changeStatusItemMenu}
                      img={musicIcon}
                      activeItemMenu={activeItemMenu}
                      link={RouteNames.MUSIC}/>
            <ItemMenu name={'FRIENDS'}
                      title={'Friends'}
                      changeStatusItemMenu={changeStatusItemMenu}
                      img={FriendsIcon}
                      activeItemMenu={activeItemMenu}
                      link={RouteNames.FRIENDS}/>
            <ItemMenu name={'SETTINGS'}
                      title={'Settings'}
                      changeStatusItemMenu={changeStatusItemMenu}
                      img={SettingsIcon}
                      activeItemMenu={activeItemMenu}
                      link={RouteNames.SETTINGS}/>
        </div>
    )
}