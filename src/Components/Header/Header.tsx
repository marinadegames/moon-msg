// import
import React from "react";
import s from './Header.module.css'
import { BigHead } from '@bigheads/core'
//imports icons
import moon from '../../Assets/moon.png'

// types

// assets
const sun = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="60px" height="60px">
    <linearGradient id="PtY0UrX1qJDQb5CcMCRpOa" x1="6.221" x2="37.408" y1="5.221" y2="36.408"
                    gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fed100"/>
        <stop offset="1" stopColor="#e36001"/>
    </linearGradient>
    <path fill="url(#PtY0UrX1qJDQb5CcMCRpOa)"
          d="M24,4C13.507,4,5,12.507,5,23s8.507,19,19,19s19-8.507,19-19S34.493,4,24,4z"/>
    <path
        d="M38.998,23.485c-2.403-4.882-11.494-4.479-13.366,2.137c-7.157,0.25-7.769,12.23-0.632,12.107	c0.857,0,6.558,0,10.995,0c3.923-3.199,6.525-7.935,6.927-13.289C42.198,23.776,40.326,23.219,38.998,23.485z"
        opacity=".05"/>
    <path
        d="M38.925,23.674c-2.594-4.861-11.378-4.165-13.075,2.081c-6.67,0.22-7.012,11.007-0.351,11.064	c0.89,0.008,7.525,0,11.405,0c3.362-3.048,5.591-7.334,5.999-12.14C42.057,23.948,40.297,23.425,38.925,23.674z"
        opacity=".07"/>
    <path
        d="M38.852,23.863c-2.786-4.841-11.263-3.852-12.783,2.025c-6.183,0.19-6.254,9.968-0.069,10.022	c0.923,0.008,8.491,0,11.815,0c2.802-2.897,4.657-6.733,5.071-10.99C41.916,24.121,40.267,23.631,38.852,23.863z"
        opacity=".07"/>
    <linearGradient id="PtY0UrX1qJDQb5CcMCRpOb" x1="29.373" x2="37.64" y1="20.668" y2="39.146"
                    gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fcfcfc"/>
        <stop offset="1" stopColor="#c3c9cd"/>
    </linearGradient>
    <path fill="url(#PtY0UrX1qJDQb5CcMCRpOb)"
          d="M39.5,24c-0.245,0-0.484,0.022-0.721,0.053C37.518,22.21,35.401,21,33,21	c-3.178,0-5.858,2.12-6.712,5.021C23.904,26.134,22,28.087,22,30.5c0,2.485,2.015,4.5,4.5,4.5c1.085,0,11.875,0,13,0	c3.038,0,5.5-2.462,5.5-5.5C45,26.462,42.538,24,39.5,24z"/>
</svg>


// components

export const Header = function () {


    const userLogo = () => (
        <BigHead
            accessory="roundGlasses"
            body="breasts"
            circleColor="blue"
            clothing="dressShirt"
            clothingColor="red"
            eyebrows="raised"
            eyes="normal"
            faceMask={false}
            faceMaskColor="black"
            facialHair="mediumBeard"
            graphic="vue"
            hair="balding"
            hairColor="brown"
            hat="none4"
            hatColor="white"
            lashes={false}
            lipColor="green"
            mask
            mouth="grin"
            skinTone="red"
        />
    )


    return (
        <div className={s.Header}>
            <div className={s.flexBoxHeaderLeft}>
                <div className={s.logotype}>
                    <img src={moon} alt="moon" width={'60px'} height={'60px'}/>
                </div>
                <div className={s.siteTitle}>
                    Moon!msg
                </div>
            </div>

            <div className={s.flexBoxHeaderCenter}>
                {sun}
                Good morning, Eugene!
            </div>

            <div className={s.flexBoxHeaderRight}>
                 <input placeholder={'Search'} type={'search'}/>
            </div>

            <div className={s.flexBoxHeaderUserLogo}>
                <div className={s.logoUser}>
                    {userLogo()}
                </div>
            </div>
        </div>
    )
}