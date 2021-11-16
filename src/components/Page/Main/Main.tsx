import React from "react";
import Posts from "./Posts/Posts";
import Profile from "./Profile/Profile";
import './Main.css'



const Main = () => {
    return (
        <main className='main'>
            <div className='divMain'>

                <Profile />
                <Posts />

            </div>
        </main>
    )
}

export default Main;