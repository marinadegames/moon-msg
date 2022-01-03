// import
import React from "react";
import s from "./Posts.module.css";
import {Post} from "./Post/Post";

// types

// assets

// components

export const Posts = function () {

    return (
        <div className={s.boxPosts}>
            <div className={s.boxPostsTitle}>
                <div className={s.createPostTitle}>Create post:</div>
                <div className={s.myPostsTitle}>My posts:</div>
            </div>
            <div className={s.posts}>
                <div className={s.createPost}>
                    <textarea placeholder={`What's news?`} className={s.textareaAddPost} maxLength={150}/>
                    <button className={s.addPostButton}> Publish </button>
                </div>
                <div className={s.myPosts}>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}