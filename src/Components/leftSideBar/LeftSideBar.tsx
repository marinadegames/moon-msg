// import
import React, {useState} from "react";
import s from './LeftSideBar.module.css'
import {NavLink} from "react-router-dom";

// imports icons
import profileIcon from '../../assets/iconProfile.png'
import messagesIcon from '../../assets/msg.png'
import musicIcon from '../../assets/musicIcon.png'
import FriendsIcon from '../../assets/people.png'
import SettingsIcon from '../../assets/keypng.png'
import HomeIcon from '../../assets/home.png'
import {RouteNames} from "../../routes";


// types
type statusPageActiveType = 'PROFILE' | 'MESSAGES' | 'MUSIC' | 'FRIENDS' | 'SETTINGS' | 'HOME' | 'ME'


// components

export const LeftSideBar = ()  => {

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

            <NavLink className={(params) => params.isActive ? s.menuItemACTIVE : s.menuItem}
                     onClick={() => changeStatusItemMenu('HOME')}
                     to={'/'}>
                <img src={HomeIcon} height='50px' width='50px' alt={'HomeIcon'}/>
                Home
                {activeItemMenu === 'HOME' ?
                    <div className={s.boxVerticalLineActive}>
                        <div className={s.verticalLineActive}/>
                    </div> : <div/>
                }
            </NavLink>

            <NavLink className={(params) => params.isActive ? s.menuItemACTIVE : s.menuItem}
                     onClick={() => changeStatusItemMenu('ME')}
                     to={RouteNames.ME}>
                <img src={profileIcon} height='50px' width='50px' alt={'profileIcon'}/>
                Profile
                {activeItemMenu === 'ME' ?
                    <div className={s.boxVerticalLineActive}>
                        <div className={s.verticalLineActive}/>
                    </div> : <div/>
                }
            </NavLink>


            <NavLink className={(params) => params.isActive ? s.menuItemACTIVE : s.menuItem}
                     onClick={() => changeStatusItemMenu('MESSAGES')}
                     to={'/messages'}>
                <img src={messagesIcon} height='50px' width='50px' alt={'messagesIcon'}/>
                Messages
                {activeItemMenu === 'MESSAGES' ?
                    <div className={s.boxVerticalLineActive}>
                        <div className={s.verticalLineActive}/>
                    </div> : <div/>
                }
            </NavLink>

            <NavLink className={(params) => params.isActive ? s.menuItemACTIVE : s.menuItem}
                     onClick={() => changeStatusItemMenu('MUSIC')}
                     to={'/music'}>
                <img src={musicIcon} height='50px' width='50px' alt={'musicIcon'}/>
                Music
                {activeItemMenu === 'MUSIC'
                    ? <div className={s.boxVerticalLineActive}>
                        <div className={s.verticalLineActive}/>
                    </div>
                    : <div/>
                }
            </NavLink>

            <NavLink className={(params) => params.isActive ? s.menuItemACTIVE : s.menuItem}
                     onClick={() => changeStatusItemMenu('FRIENDS')}
                     to={'/friends'}>
                <img src={FriendsIcon} height='50px' width='50px' alt={'FriendsIcon'}/>
                Friends
                {activeItemMenu === 'FRIENDS'
                    ? <div className={s.boxVerticalLineActive}>
                        <div className={s.verticalLineActive}/>
                    </div>
                    : <div/>
                }
            </NavLink>

            <NavLink className={(params) => params.isActive ? s.menuItemACTIVE : s.menuItem}
                     onClick={() => changeStatusItemMenu('SETTINGS')}
                     to={'/settings'}>
                <img src={SettingsIcon} height='50px' width='50px' alt={'SettingsIcon'}/>
                Settings
                {activeItemMenu === 'SETTINGS'
                    ? <div className={s.boxVerticalLineActive}>
                        <div className={s.verticalLineActive}/>
                    </div>
                    : <div/>
                }
            </NavLink>


        </div>
    )
}