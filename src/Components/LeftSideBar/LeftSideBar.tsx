// import
import React, {useState} from "react";
import s from './LeftSideBar.module.css'

// imports icons
import profileIcon from '../../Assets/iconProfile.png'
import messagesIcon from '../../Assets/msg.png'
import musicIcon from '../../Assets/musicIcon.png'
import FriendsIcon from '../../Assets/people.png'
import SettingsIcon from '../../Assets/keypng.png'
import {NavLink} from "react-router-dom";

// types
type statusPageActiveType = 'PROFILE' | 'MESSAGES' | 'MUSIC' | 'FRIENDS' | 'SETTINGS'
// assets

// components

export const LeftSideBar = function () {

    const [activeItemMenu, setActiveItemMenu] = useState('PROFILE')

    const changeStatusItemMenu = (pageActive: statusPageActiveType) => {
        if (pageActive === 'PROFILE') setActiveItemMenu('PROFILE')
        else if (pageActive === 'MESSAGES') setActiveItemMenu('MESSAGES')
        else if (pageActive === 'MUSIC') setActiveItemMenu('MUSIC')
        else if (pageActive === 'FRIENDS') setActiveItemMenu('FRIENDS')
        else if (pageActive === 'SETTINGS') setActiveItemMenu('SETTINGS')
    }

    return (
        <div className={s.LeftSideBar}>
            <NavLink className={(params) => params.isActive ? s.menuItemACTIVE : s.menuItem}
                     onClick={() => changeStatusItemMenu('PROFILE')}
                     to={'/profile'}>
                <img src={profileIcon} height='50px' width='50px' alt={'profileIcon'}/>
                Profile
                {activeItemMenu === 'PROFILE' ?
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