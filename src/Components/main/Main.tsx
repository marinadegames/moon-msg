// import
import React from "react";
import {Route, Routes} from "react-router-dom";
import s from './Main.module.css'
import MessagesContainer from "../messages/MessagesContainer";
import {Music} from "../music/Music";
import {Friends} from "../friends/Friends";
import Login from "../login/Login";
import {NotFound404} from "../404/NotFound404";
import {Home} from "../home/Home";
import {RouteNames} from "../../routes";
import {Profile} from "../profile/Profile";
import {Settings} from "../settings/Settings";


// components
export const Main = () => {
    return (
        <div className={s.Main}>

            <Routes>
                <Route path={RouteNames.HOME} element={<Home/>}/>
                <Route path={RouteNames.PROFILE} element={<Profile/>}/>
                <Route path={'/messages'} element={<MessagesContainer/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/music'} element={<Music/>}/>
                <Route path={RouteNames.FRIENDS} element={<Friends/>}/>
                <Route path={RouteNames.LOGIN} element={<Login/>}/>
                <Route path={'/*'} element={<NotFound404/>}/>
            </Routes>

        </div>
    )
}