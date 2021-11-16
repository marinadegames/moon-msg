import React from "react";
import s from './Posts.module.css'
import Post from './Post/Post'

const Posts = () => {
    return (
        <div className={s.myPosts}>
            <div className={s.headerPosts}>Send post:</div>
            <textarea maxLength={100} placeholder='Напишите что-нибудь...'
                      className={s.textAreaSendPost}/>
            <div className={s.rightFlex}>
                <button className={s.btnSendPost}>Send</button>
            </div>


            <Post/>
        </div>
    )
}

export default Posts;