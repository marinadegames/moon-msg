// import
import React from "react";
import s from './Main.module.css'

import {Profile} from "./Profile/Profile";
import {addPost, PostType} from "../../Redux/tempStore";

// types
type MainPropsType = {
    postsUser: Array<PostType>
    addPost: (text:string) => void
}
// assets

// components

export const Main = function ({postsUser, addPost, ...props}: MainPropsType) {

    return (
        <div className={s.Main}>

            <Profile postsUser={postsUser}
                     addPost={addPost}/>

        </div>
    )
}