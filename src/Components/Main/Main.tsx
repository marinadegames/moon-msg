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
import {DialogsType, PostType} from "../../Redux/state";


// types
type MainPropsType = {
    posts: Array<PostType>
    addPost: (text: string) => void
    dialogs: DialogsType[]
}

// assets

// components
export const Main = function ({posts, addPost, dialogs, ...props}: MainPropsType) {
    return (
        <div className={s.Main}>
            <Routes>
                <Route path={'/'} element={<Profile posts={posts} addPost={addPost}/>}/>
                <Route path={'/profile'} element={<Profile posts={posts} addPost={addPost}/>}/>
                <Route path={'/messages'} element={<Messages dialogs={dialogs}/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/Music'} element={<Music/>}/>
                <Route path={'/friends'} element={<Friends/>}/>
                <Route path={'/*'} element={<NotFound404/>}/>
            </Routes>
        </div>
    )
}