import React from "react";
import s from './Posts.module.css'

const Posts = () => {
    return (
        <div className={s.myPosts}>
            <div className={s.headerPosts}>My Posts:</div>
            <textarea maxLength={100} placeholder='Напишите что-нибудь...'
                      className={s.textAreaSendPost}/>
            <button className={s.btnSendPost}>Send</button>
        </div>
    )
}

export default Posts;