import React from "react";
import Posts from "./Posts/Posts";
import Profile from "./Profile/Profile";
import s from './Main.module.css'



const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.divMain}>

                <Profile />
                <Posts />

            </div>
        </main>
    )
}

export default Main;