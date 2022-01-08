// import
import React from "react";
import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../../Redux/tempStore";

// types
type PostsPropsType = {
    postsUser: Array<PostType>
}
// assets

// components

export const Posts = function ({postsUser, ...props}: PostsPropsType) {

    return (
        <div className={s.boxPosts}>
            <div className={s.boxPostsTitle}>


                <div className={s.createPostBox}>
                    <div className={s.createPostTitle}>Create post:</div>
                    <div className={s.createPost}>
                        <textarea placeholder={`What's news?`} className={s.textareaAddPost} maxLength={150}/>
                        <button className={s.addPostButton}> Publish</button>
                    </div>
                </div>


                <div className={s.myPostsBox}>
                    <div className={s.myPostsTitle}>My posts:</div>
                    <div className={s.myPosts}>
                        {postsUser.map((p) => {
                            return (
                                <Post key={p.id}
                                      shares={p.shares}
                                      likes={p.likes}
                                      date={p.date}
                                      text={p.text}
                                      comments={p.comments}
                                      userName={p.userName}/>
                            )

                        })}
                    </div>
                </div>


            </div>
        </div>
    )
}