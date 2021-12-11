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
        newPostElement.current.value = ''
    }

    return (
        <div className={s.myPosts}>
            <div className={s.headerPosts}>Send post:</div>

            <textarea
                ref={newPostElement}
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