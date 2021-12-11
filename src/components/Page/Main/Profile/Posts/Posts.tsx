//imports:
import React from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";


//component:
const Posts = (props:any) => {

    let newPostElement:any = React.createRef()

    let addNoteText = () => {
        let text = newPostElement.current.value
        props.addNote(text)
        props.updateNewPostText('')
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.myPosts}>
            <div className={s.headerPosts}>Send post:</div>

            <textarea
                ref={newPostElement}
                value={props.newNoteText}
                onChange={onPostChange}
                maxLength={500}
                placeholder='Напишите что-нибудь...'
                className={s.textAreaSendPost}/>

            <div className={s.rightFlex}>

                <button className={s.btnSendPost}
                        onClick={addNoteText} >
                    Send
                </button>

            </div>

            <Post notesData={props.notesData} />
        </div>
    )
}

export default Posts;