// import
import React from "react";
import s from './Main.module.css'
import {Route, Routes} from "react-router-dom";
import {NotFound404} from "../404/NotFound404";
import {Settings} from "./Settings/Settings";
import {Music} from "./Music/Music";
import FriendsContainer from "./Friends/FriendsContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import {Login} from "../Login/Login";
import {Home} from "../Home/Home";
import MessagesContainer from "./Messages/MessagesContainer";


// components
export const Main = () => {

    return (
        <div className={s.Main}>

            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/profile'} element={<ProfileContainer/>}/>
                <Route path={'/friendprofile/:userId'} element={<ProfileContainer/>}/>
                <Route path={'/messages'} element={<MessagesContainer/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/Music'} element={<Music/>}/>
                <Route path={'/friends'} element={<FriendsContainer/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/*'} element={<NotFound404/>}/>
            </Routes>
        </div>
    )
}