// imports
import React from "react";
import s from './Header.module.css'
import {LogoHeader} from "./LogoHeader/LogoHeader";
import {MenuHeader} from "./MenuHeader/MenuHeader";
import {IconsHeader} from "./IconsHeader/IconsHeader";

//types

// assets


//components

export const Header = function () {
    return (
        <header className={s.header}>
            <LogoHeader/>
            <MenuHeader />
            <IconsHeader/>
        </header>
    )
}
