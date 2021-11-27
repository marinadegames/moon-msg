import React from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";



const Posts = (props:any) => {

    let newPostElement:any = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.myPosts}>
            <div className={s.headerPosts}>Send post:</div>
            <textarea ref={newPostElement} maxLength={500} placeholder='Напишите что-нибудь...' className={s.textAreaSendPost}/>
            <div className={s.rightFlex}>
                <button className={s.btnSendPost} onClick={ addPost }>Send</button>
            </div>

            <Post notesData={props.notesData}/>
        </div>
    )
}

export default Posts;