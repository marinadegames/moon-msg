// import
import React from "react";
import s from './Main.module.css'
import {Profile} from "./Profile/Profile";
import {Messages} from "./Messages/Messages";
import {Route, Routes} from "react-router-dom";
import {NotFound404} from "../404/NotFound404";
import {Settings} from "./Settings/Settings";
import {Music} from "./Music/Music";
import {ProfileType} from "../../Redux/profileReducer";
import {UserType} from "../../Redux/usersReducer";
import {AllMessagesType} from "../../Redux/dialogsReducer";
import {Dispatch} from "../../Redux/redux-store";
import FriendsClass from "./Friends/FriendsClass";


// types
type MainPropsType = {
    profile: ProfileType
    allUsers: Array<UserType>
    allMessages: AllMessagesType
    dispatch: Dispatch
}

// components

export const Main = function (props: MainPropsType) {

    return (
        <div className={s.Main}>

            <Routes>
                <Route path={'/'} element={<Profile profile={props.profile}
                                                    dispatch={props.dispatch}/>}/>
                <Route path={'/profile'} element={<Profile profile={props.profile}
                                                           dispatch={props.dispatch}/>}/>
                <Route path={'/messages'} element={<Messages allMessages={props.allMessages}
                                                             dispatch={props.dispatch}/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/Music'} element={<Music/>}/>
                <Route path={'/friends'} element={<FriendsClass allUsers={props.allUsers}
                                                           dispatch={props.dispatch}/>}/>
                <Route path={'/*'} element={<NotFound404/>}/>
            </Routes>
        </div>
    )
}