// import
import React from "react";
import s from "./Posts.module.css";
import {ProfileType} from "../../../../Redux/profileReducer";
import {Field, reduxForm} from "redux-form";

// types
type PostsPropsType = {
    profile: ProfileType | null
}


// components
export const AddPostForm = function (props: any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.createPost}>
                <Field placeholder={`What's news?`}
                       name={'text'}
                       component={'textarea'}
                       className={s.textareaAddPost} maxLength={150}
                    // onKeyPress={(event) => enterHandler(event)}
                    // onChange={(event => changeTextArea(event.currentTarget.value))}
                />
                <button className={s.addPostButton}>
                    Publish
                </button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'text'})(AddPostForm)

export const Posts = function (props: PostsPropsType) {

    const onSubmit = (formData: any) => {
        debugger
        console.log(formData)
    }

    return (
        <div className={s.boxPosts}>
            <div className={s.boxPostsTitle}>

                <div className={s.createPostBox}>
                    <div className={s.createPostTitle}>Create post:</div>
                    <div className={s.createPost}>
                        <AddPostReduxForm onSubmit={onSubmit}/>
                    </div>
                </div>

                <div className={s.myPostsBox}>
                    <div className={s.myPostsTitle}>My posts:</div>
                    {/*<div className={s.myPosts}>*/}
                    {/*    {props.profile.postsUser.map((p) => {*/}
                    {/*        return (*/}
                    {/*            <Post key={p.id}*/}
                    {/*                  shares={p.shares}*/}
                    {/*                  likes={p.likes}*/}
                    {/*                  date={p.date}*/}
                    {/*                  text={p.text}*/}
                    {/*                  comments={p.comments}*/}
                    {/*                  userName={p.userName}/>*/}
                    {/*        )*/}

                    {/*    })}*/}
                    {/*</div>*/}
                </div>


            </div>
        </div>
    )
}


