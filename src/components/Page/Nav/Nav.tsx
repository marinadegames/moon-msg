import React from "react";

import s from './Nav.module.css'

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
                    <img src={linkIconProfile}/>
                    <a className={s.active} href='#'>Profile</a>
                </div>

                <div className={s.navLink}>
                    <img src={linkIconMessages}/>
                    <a href='#'>Messages</a>
                </div>


                <div className={s.navLink}>
                    <img src={linkIconNews}/>
                    <a href='#'>News</a>
                </div>

                <div className={s.navLink}>
                    <img src={linkIconMusic}/>
                    <a href='#'>Music</a>
                </div>

                <div className={s.navLink}>
                    <img src={linkIconSettings}/>
                    <a href='#'>Settings</a>
                </div>

            </div>
        </nav>
    )
}

export default Nav;