import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

let linkIconProfile = 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/32/000000/external-profile-whatsapp-flatart-icons-outline-flatarticons.png'
let linkIconMessages = 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/32/000000/external-message-chat-flatart-icons-outline-flatarticons-5.png'
let linkIconSettings = 'https://img.icons8.com/ios/32/000000/settings--v1.png'
let linkIconMusic = 'https://img.icons8.com/ios/32/000000/music-record.png'
let linkIconNews = 'https://img.icons8.com/ios/32/000000/news.png'


const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.divNav}>

                <div className={s.navLink}>
                    <img src={linkIconProfile} alt='profile'/>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </div>

                <div className={s.navLink}>
                    <img src={linkIconMessages} alt='dialogs'/>
                    <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                </div>


                <div className={s.navLink}>
                    <img src={linkIconNews} alt='news'/>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </div>

                <div className={s.navLink}>
                    <img src={linkIconMusic} alt='music'/>
                    <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                </div>

                <div className={s.navLink}>
                    <img src={linkIconSettings} alt='settings'/>
                    <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                </div>

            </div>
        </nav>
    )
}

export default Nav;