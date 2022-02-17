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
import {itemsType} from "../../Redux/usersReducer";
import {AllMessagesType} from "../../Redux/dialogsReducer";
import FriendsContainer from "./Friends/FriendsContainer";


// types
type MainPropsType = {
    profile: ProfileType
    allUsers: itemsType
    allMessages: AllMessagesType
    dispatch: any
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
                <Route path={'/friends'} element={<FriendsContainer/>}/>
                <Route path={'/*'} element={<NotFound404/>}/>
            </Routes>
        </div>
    )
}