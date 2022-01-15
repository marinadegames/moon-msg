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
import {PostType} from "../../Redux/state";


// types
type MainPropsType = {
    postsUser: Array<PostType>
    addPost: (text: string) => void
}
// assets

// components

export const Main = function ({postsUser, addPost, ...props}: MainPropsType) {

    return (
        <div className={s.Main}>

            <Routes>
                <Route path={'/'} element={<Profile postsUser={postsUser} addPost={addPost}/>}/>
                <Route path={'/profile'} element={<Profile postsUser={postsUser} addPost={addPost}/>}/>
                <Route path={'/messages'} element={<Messages/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/Music'} element={<Music/>}/>
                <Route path={'/friends'} element={<Friends/>}/>
                <Route path={'/*'} element={<NotFound404/>}/>
            </Routes>
        </div>
    )
}