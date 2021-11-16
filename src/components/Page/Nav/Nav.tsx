import React from "react";

import './Nav.css'

let linkIconProfile = 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/32/000000/external-profile-whatsapp-flatart-icons-outline-flatarticons.png'
let linkIconMessages = 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/32/000000/external-message-chat-flatart-icons-outline-flatarticons-5.png'
let linkIconSettings = 'https://img.icons8.com/ios/32/000000/settings--v1.png'
let linkIconMusic = 'https://img.icons8.com/ios/32/000000/music-record.png'
let linkIconNews = 'https://img.icons8.com/ios/32/000000/news.png'



const Nav = () => {
    return (
        <nav className='nav'>
            <div className='divNav'>
                <div className='navLink active'><img src={linkIconProfile}/>Profile</div>
                <div className='navLink'><img src={linkIconMessages}/>Messages</div>
                <div className='navLink'><img src={linkIconSettings}/>Settings</div>
                <div className='navLink'><img src={linkIconNews}/>News</div>
                <div className='navLink'><img src={linkIconMusic}/> Music</div>
            </div>
        </nav>
    )
}

export default Nav;