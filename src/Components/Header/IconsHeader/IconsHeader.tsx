// imports
import React from "react";
import s from './IconsHeader.module.css'
import {BigHead} from "@bigheads/core";

//types

// assets
let heart = <img src="https://img.icons8.com/ios/30/000000/like--v1.png" alt='heart'/>
let note = <img src="https://img.icons8.com/windows/32/000000/itunes-note.png" alt='music'/>
let setting = <img src="https://img.icons8.com/fluency-systems-regular/30/000000/settings.png" alt='settings'/>
//components

export const IconsHeader = function () {

    const RandomHead = () => (
        <BigHead
            accessory="shades"
            body="breasts"
            circleColor="blue"
            clothing="dress"
            clothingColor="blue"
            eyebrows="angry"
            eyes="dizzy"
            faceMask={false}
            faceMaskColor="black"
            facialHair="mediumBeard"
            graphic="redwood"
            hair="bob"
            hairColor="brown"
            hat="none2"
            hatColor="red"
            lashes
            lipColor="pink"
            mask
            mouth="serious"
            skinTone="light"
        />
    )

    return (
        <div className={s.iconsHeader}>
            <div className={s.iconsHeaderItem}>{heart}</div>
            <div className={s.iconsHeaderItem}>{note}</div>
            <div className={s.iconsHeaderItem}>{setting}</div>
            <div className={s.verticalLine}/>
            <div className={s.ProfileLogoHeader}>
                {RandomHead()}
            </div>
        </div>
    )
}
