import React from "react";
import s from './Post.module.css'
import Note from "./Note/Note";

const Post = () => {
    return (
        <div className={s.postDiv}>
            <div className={s.headerPost}>My notes:</div>
            <Note />
            <Note />
            <Note />
        </div>
    )
}

export default Post;