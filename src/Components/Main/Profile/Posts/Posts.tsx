// import
import React, {useState, KeyboardEvent} from "react";
import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../../Redux/tempStore";

// types
type PostsPropsType = {
    postsUser: Array<PostType>
    addPost: (text:string) => void
}
// assets

// components

export const Posts = function ({postsUser, addPost, ...props}: PostsPropsType) {

    const [textarea, setTexArea] = useState<string>('')

    const changeTextArea = (text: string) => {
        setTexArea(text)
    }
    const onClickAddPostCallback = () => {
        if (textarea !== '') addPost(textarea);
        setTexArea('')
    }
    const enterHandler = (event: KeyboardEvent) => {
        if (event.charCode === 13 && textarea !== ''){
            addPost(textarea)
            setTexArea('')
        }
    }

    return (
        <div className={s.boxPosts}>
            <div className={s.boxPostsTitle}>


                <div className={s.createPostBox}>
                    <div className={s.createPostTitle}>Create post:</div>
                    <div className={s.createPost}>
                        <textarea placeholder={`What's news?`}
                                  value={textarea}
                                  onKeyPress={ (event) => enterHandler(event)}
                                  onChange={(event => changeTextArea(event.currentTarget.value))}
                                  className={s.textareaAddPost} maxLength={150}/>
                        <button className={s.addPostButton}
                                onClick={onClickAddPostCallback}>
                            Publish
                        </button>
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