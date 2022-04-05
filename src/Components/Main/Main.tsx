// import
import React from "react";
import {Route, Routes} from "react-router-dom";
import s from './Main.module.css'
import {Home} from "../Home/Home";
import MessagesContainer from "./Messages/MessagesContainer";
import {Settings} from "./Settings/Settings";
import {Music} from "./Music/Music";
import Login from "../Login/Login";
import {NotFound404} from "../404/NotFound404";
import {Profile} from "./Profile/Profile";
import {RouteNames} from "../../routes";
import {Friends} from "./Friends/Friends";


// components
export const Main = () => {
    return (
        <div className={s.Main}>

            <Routes>
                <Route path={RouteNames.HOME} element={<Home/>}/>
                <Route path={RouteNames.PROFILE} element={<Profile/>}/>
                <Route path={'/messages'} element={<MessagesContainer/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/Music'} element={<Music/>}/>
                <Route path={RouteNames.FRIENDS} element={<Friends/>}/>
                <Route path={RouteNames.LOGIN} element={<Login/>}/>
                <Route path={'/*'} element={<NotFound404/>}/>
            </Routes>

        </div>
    )
}