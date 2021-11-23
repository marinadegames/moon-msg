import React from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";



const Posts = (props:any) => {



    return (
        <div className={s.myPosts}>
            <div className={s.headerPosts}>Send post:</div>
            <textarea maxLength={500} placeholder='Напишите что-нибудь...'
                      className={s.textAreaSendPost}/>
            <div className={s.rightFlex}>
                <button className={s.btnSendPost}>Send</button>
            </div>

            <Post notesData={props.notesData}/>
        </div>
    )
}

export default Posts;