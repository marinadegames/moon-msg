// imports
import React from "react";
import s from './MenuHeader.module.css'

//types

// assets


//components

export const MenuHeader = function () {
    return (
        <div className={s.headerMenu}>
            <div className={s.menuItem}>Profile</div>
            <div className={s.menuItem}>Message</div>
            <div className={s.menuItem}>Music</div>
            <div className={s.menuItem}>Friends</div>
            <div className={s.menuItem}>Settings</div>
        </div>
    )
}
