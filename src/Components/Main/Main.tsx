// import
import React from "react";
import s from './Main.module.css'

import {Profile} from "./Profile/Profile";
import {PostType} from "../../Redux/tempStore";

// types
type MainPropsType = {
    postsUser: Array<PostType>
}
// assets

// components

export const Main = function ({postsUser, ...props}: MainPropsType) {

    return (
        <div className={s.Main}>

            <Profile postsUser={postsUser}/>

        </div>
    )
}