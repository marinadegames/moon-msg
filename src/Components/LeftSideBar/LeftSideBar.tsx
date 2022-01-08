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

            <NavLink to={'/profile'} style={{textDecoration: 'none'}}>
                <div className={activeItemMenu === 'PROFILE' ? s.menuItemACTIVE : s.menuItem}
                     onClick={() => changeStatusItemMenu('PROFILE')}>
                    <img src={profileIcon} height='50px' width='50px' alt={'profileIcon'}/>
                    Profile
                    {activeItemMenu === 'PROFILE' ?
                        <div className={s.boxVerticalLineActive}>
                            <div className={s.verticalLineActive}/>
                        </div> : <div/>
                    }

                </div>
            </NavLink>

            <NavLink to={'/messages'} style={{textDecoration: 'none'}}>
                <div className={activeItemMenu === 'MESSAGES' ? s.menuItemACTIVE : s.menuItem}
                     onClick={() => changeStatusItemMenu('MESSAGES')}>
                    <img src={messagesIcon} height='50px' width='50px' alt={'messagesIcon'}/>
                    Messages
                    {activeItemMenu === 'MESSAGES' ?
                        <div className={s.boxVerticalLineActive}>
                            <div className={s.verticalLineActive}/>
                        </div> : <div/>
                    }
                </div>
            </NavLink>

            <NavLink to={'/music'} style={{textDecoration: 'none'}}>
                <div className={activeItemMenu === 'MUSIC' ? s.menuItemACTIVE : s.menuItem}
                     onClick={() => changeStatusItemMenu('MUSIC')}>
                    <img src={musicIcon} height='50px' width='50px' alt={'musicIcon'}/>
                    Music
                    {activeItemMenu === 'MUSIC' ?
                        <div className={s.boxVerticalLineActive}>
                            <div className={s.verticalLineActive}/>
                        </div> : <div/>
                    }
                </div>
            </NavLink>

            <NavLink to={'/friends'} style={{textDecoration: 'none'}}>
                <div className={activeItemMenu === 'FRIENDS' ? s.menuItemACTIVE : s.menuItem}
                     onClick={() => changeStatusItemMenu('FRIENDS')}>
                    <img src={FriendsIcon} height='50px' width='50px' alt={'FriendsIcon'}/>
                    Friends
                    {activeItemMenu === 'FRIENDS' ?
                        <div className={s.boxVerticalLineActive}>
                            <div className={s.verticalLineActive}/>
                        </div> : <div/>
                    }
                </div>
            </NavLink>

            <NavLink to={'/settings'} style={{textDecoration: 'none'}}>
                <div className={activeItemMenu === 'SETTINGS' ? s.menuItemACTIVE : s.menuItem}
                     onClick={() => changeStatusItemMenu('SETTINGS')}>
                    <img src={SettingsIcon} height='50px' width='50px' alt={'SettingsIcon'}/>
                    Settings
                    {activeItemMenu === 'SETTINGS' ?
                        <div className={s.boxVerticalLineActive}>
                            <div className={s.verticalLineActive}/>
                        </div> : <div/>
                    }
                </div>
            </NavLink>

        </div>
    )
}