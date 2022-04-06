// import
import React from "react";
import s from './Settings.module.css'
import {useSelector} from "react-redux";
import {rootReducerType} from "../../redux/store";
import {Navigate} from "react-router-dom";
import {RouteNames} from "../../routes";

// types

// assets

// components

export const Settings = function () {

    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    if (!isAuth) {
        return <Navigate to={RouteNames.LOGIN}/>
    }
    return (
        <div>
            <div className={s.pageName}>Settings</div>
        </div>
    )
}