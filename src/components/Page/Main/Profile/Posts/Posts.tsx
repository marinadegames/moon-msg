//imports:
import React from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";
import {addNoteActionCreator, updateNewPostTextActionCreator} from "../../../../../redux/state";


//component:
const Posts = (props: any) => {

    let newPostElement: any = React.createRef()

    let addNoteText = () => {
        props.dispatch(addNoteActionCreator())
        newPostElement.current.value = ''
    }

    let onPostChange = () => {
        let action = updateNewPostTextActionCreator(newPostElement.current.value)
        props.dispatch(action)
    }
    const onKeyEnterHandler = (e: string) => {
        if (e === 'Enter') {
            props.dispatch(addNoteActionCreator())
            newPostElement.current.value = ''
        }
    }

    return (
        <div className={s.myPosts}>
            <div className={s.headerPosts}>Send post:</div>

            <textarea
                ref={newPostElement}
                value={props.newNoteText}
                onChange={onPostChange}
                onKeyPress={(e) => onKeyEnterHandler(e.key)}
                maxLength={500}
                placeholder='Напишите что-нибудь...'
                className={s.textAreaSendPost}/>

            <div className={s.rightFlex}>

                <button className={s.btnSendPost}
                        onClick={addNoteText}>
                    Send
                </button>

            </div>

            <Post notesData={props.notesData}/>
        </div>
    )
}

export default Posts;