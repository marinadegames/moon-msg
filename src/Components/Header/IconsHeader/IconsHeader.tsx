// imports
import React from "react";
import s from './IconsHeader.module.css'

//types

// assets
let heart = <img src="https://img.icons8.com/ios/30/000000/like--v1.png"/>
let note = <img src="https://img.icons8.com/windows/32/000000/itunes-note.png"/>
let setting = <img src="https://img.icons8.com/fluency-systems-regular/30/000000/settings.png"/>
//components

export const IconsHeader = function () {
    return (
        <div className={s.iconsHeader}>
            <div className={s.iconsHeaderItem}>{heart}</div>
            <div className={s.iconsHeaderItem}>{note}</div>
            <div className={s.iconsHeaderItem}>{setting}</div>
            <div className={s.verticalLine}/>
            <div className={s.ProfileLogoHeader}/>
        </div>
    )
}
