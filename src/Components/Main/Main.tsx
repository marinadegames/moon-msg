// imports
import React from "react";
import s from './Main.module.css'
import {Profile} from "./Profile/Profile";

//types


// assets

//components

export const Main = function () {
    return (
        <main className={s.main}>
            <Profile/>
        </main>
    )
}
