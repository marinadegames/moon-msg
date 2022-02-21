// import
import React from "react";
import s from './Main.module.css'
import {Messages} from "./Messages/Messages";
import {Route, Routes} from "react-router-dom";
import {NotFound404} from "../404/NotFound404";
import {Settings} from "./Settings/Settings";
import {Music} from "./Music/Music";
import {itemsType} from "../../Redux/usersReducer";
import {AllMessagesType} from "../../Redux/dialogsReducer";
import FriendsContainer from "./Friends/FriendsContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import {Login} from "../Login/Login";


// types
type MainPropsType = {
    allUsers: itemsType
    allMessages: AllMessagesType
    dispatch: any
}

// components

export const Main = function (props: MainPropsType) {

    return (
        <div className={s.Main}>

            <Routes>
                {/*<Route path={'/'} element={<ProfileContainer/>}/>*/}
                <Route path={'/profile/:userId'} element={<ProfileContainer/>}/>

                <Route path={'/messages'} element={<Messages allMessages={props.allMessages}
                                                             dispatch={props.dispatch}/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/Music'} element={<Music/>}/>
                <Route path={'/friends'} element={<FriendsContainer/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/*'} element={<NotFound404/>}/>
            </Routes>
        </div>
    )
}