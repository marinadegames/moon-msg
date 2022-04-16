// import
import React from "react";
import s from './Music.module.css'
import {Navigate} from "react-router-dom";
import {RouteNames} from "../../routes";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../Redux/store";

export const Music = function () {
    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    if (!isAuth) {
        return <Navigate to={RouteNames.LOGIN}/>
    }
    return (
        <div>
            <div className={s.pageName}>Music</div>
        </div>
    )
}