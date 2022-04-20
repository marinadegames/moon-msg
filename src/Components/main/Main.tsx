// import
import React from "react";
import {Route, Routes} from "react-router-dom";
import s from './Main.module.css'
import MessagesContainer from "../messages/MessagesContainer";
import {Music} from "../music/Music";
import {Friends} from "../friends/Friends";
import {NotFound404} from "../404/NotFound404";
import {Home} from "../home/Home";
import {RouteNames} from "../../routes";
import {Profile} from "../profile/Profile";
import {Settings} from "../settings/Settings";
import {Me} from "../me/me";
import {Login} from "../login/Login";

export const Main = () => {
    return (
        <div className={s.Main}>
            <Routes>
                <Route path={'/*'} element={<NotFound404/>}/>
                <Route path={'/'} element={<Home/>}/>
                <Route path={`profile/:userId`} element={<Profile/>}/>
                <Route path={RouteNames.ME} element={<Me/>}/>
                <Route path={'/messages'} element={<MessagesContainer/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/music'} element={<Music/>}/>
                <Route path={RouteNames.FRIENDS} element={<Friends/>}/>
                <Route path={RouteNames.LOGIN} element={<Login/>}/>
            </Routes>
        </div>
    )
}