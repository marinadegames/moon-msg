import React from 'react';
import './App.css';

let linkIconProfile = 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/32/000000/external-profile-whatsapp-flatart-icons-outline-flatarticons.png'
let linkIconMessages = 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/32/000000/external-message-chat-flatart-icons-outline-flatarticons-5.png'
let linkIconSettings = 'https://img.icons8.com/ios/32/000000/settings--v1.png'
let linkIconMusic = 'https://img.icons8.com/ios/32/000000/music-record.png'
let linkIconNews = 'https://img.icons8.com/ios/32/000000/news.png'
let avatarLogo = 'http://cdn.onlinewebfonts.com/svg/img_568656.png'


function App() {
    return (
        <div className="App">

            <header className='header'>
                <div className='divHeader'>
                    <b>Hi, samurai!</b>
                </div>
            </header>

            <div className='page'>

                <nav className='nav'>
                    <div className='divNav'>
                        <div className='navLink active'><img src={linkIconProfile}/>Profile</div>
                        <div className='navLink'><img src={linkIconMessages}/>Messages</div>
                        <div className='navLink'><img src={linkIconSettings}/>Settings</div>
                        <div className='navLink'><img src={linkIconNews}/>News</div>
                        <div className='navLink'><img src={linkIconMusic}/> Music</div>
                    </div>
                </nav>

                <main className='main'>
                    <div className='divMain'>
                        <div className='profile'>
                            <img id='avatarLogo' src={avatarLogo}/>
                            <div className='profileData'>
                                <div className='nameUser'>Eugene Pashkevich</div>
                                <div className=''><b>Name of birth:</b> 17.02.1997</div>
                                <div className=''><b>City:</b> Minsk</div>
                                <div className=''><b>Country:</b> Belarus</div>
                                <div className=''><b>Web-site:</b> <a href='#'>marinadegames.ru</a></div>
                            </div>
                        </div>
                        <div className='myPosts'>
                            <div className='headerPosts'>My Posts:</div>
                            <textarea maxLength={100} placeholder='Напишите что-нибудь...' className='textAreaSendPost'/>
                            <button className='btnSendPost'>Send</button>
                        </div>
                    </div>
                </main>

            </div>

            <footer className='footer'>
                <div className='divFooter'>
                    footer
                </div>
            </footer>
        </div>
    );
}

export default App;
