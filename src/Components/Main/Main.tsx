// import
import React from "react";
import s from './Main.module.css'
import {Profile} from "./Profile/Profile";
import {Messages} from "./Messages/Messages";
import {Route, Routes} from "react-router-dom";
import {NotFound404} from "../404/NotFound404";
import {Settings} from "./Settings/Settings";
import {Music} from "./Music/Music";
import {Friends} from "./Friends/Friends";
import {AllMessagesType, PostType} from "../../Redux/store";


// types
type MainPropsType = {
    postsUser: Array<PostType>
    dispatch: any
    allMessages: AllMessagesType
}
// assets

// components

export const Main = function ({postsUser, dispatch, ...props}: MainPropsType) {

    return (
        <div className={s.Main}>

            <Routes>
                <Route path={'/'} element={<Profile postsUser={postsUser}
                                                    dispatch={dispatch}/>}/>
                <Route path={'/profile'} element={<Profile postsUser={postsUser}
                                                           dispatch={dispatch}/>}/>
                <Route path={'/messages'} element={<Messages allMessages={props.allMessages} dispatch={dispatch}/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/Music'} element={<Music/>}/>
                <Route path={'/friends'} element={<Friends/>}/>
                <Route path={'/*'} element={<NotFound404/>}/>
            </Routes>
        </div>
    )
}