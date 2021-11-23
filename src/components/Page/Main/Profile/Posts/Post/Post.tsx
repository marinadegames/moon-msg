import React from "react";
import s from './Post.module.css'
import Note from "./Note/Note";


const Post = (props:any) => {

    let notesElements = props.notesData.map( (n:any) => <Note text={n.text} likes={n.likes}/>)

    return (
        <div className={s.postDiv}>
            <div className={s.headerPost}>My notes:</div>
            {notesElements}
        </div>
    )
}

export default Post;