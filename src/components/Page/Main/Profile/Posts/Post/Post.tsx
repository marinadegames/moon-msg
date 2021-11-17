import React from "react";
import s from './Post.module.css'
import Note from "./Note/Note";

const Post = () => {
    return (
        <div className={s.postDiv}>
            <div className={s.headerPost}>My notes:</div>
            <Note text='Hi! How are you?' likes='10'/>
            <Note text='this is my first post' likes='123'/>
            <Note text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." likes='357'/>
        </div>
    )
}

export default Post;