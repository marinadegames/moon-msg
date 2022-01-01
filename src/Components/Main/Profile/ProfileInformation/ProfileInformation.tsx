// imports

import React from "react";
import s from './ProfileInformation.module.css'
import {BigHead} from "@bigheads/core";

// types

// assets
const shareIcon = <img alt={'1'}
                       src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/40/000000/external-share-seo-and-marketing-kmg-design-outline-color-kmg-design.png"/>
const editIcon = <img
    src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/55/000000/external-edit-miscellaneous-kiranshastry-lineal-color-kiranshastry.png"/>

// components

export const ProfileInformation = function (){

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
        <div className={s.boxProfile}>

            <div className={s.avatar}>
                {RandomHead()}
            </div>
            <div className={s.profileUserInformation}>
                <div className={s.nameProfile}>
                    <div>Eugene Pashkevich</div>
                </div>
                <div className={s.birthdayProfile}>
                    <b>Birthday:</b>
                    <div>17/02/97</div>
                </div>
                <div className={s.cityProfile}>
                    <b>City:</b>
                    <div>Minsk</div>
                </div>
                <div className={s.sexProfile}>
                    <b>Sex:</b>
                    <div>Man</div>
                </div>

                <div className={s.buttonsProfile}>
                    <button className={s.btnShare}>Share profile {shareIcon} </button>
                    <button className={s.btnEdit}> Edit information {editIcon}</button>
                </div>
            </div>
        </div>
    )
}