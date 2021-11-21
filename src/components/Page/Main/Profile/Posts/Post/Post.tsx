import React from "react";
import s from './Post.module.css'
import Note from "./Note/Note";

const Post = () => {

    let postsData = [
        { id: 1, text: 'Hi! How are you?', likes: 10},
        { id: 2, text: "this is my first post", likes: 123 },
        { id: 3, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", likes: 356},
    ]

    return (
        <div className={s.postDiv}>
            <div className={s.headerPost}>My notes:</div>
            <Note text={postsData[0].text} likes={postsData[0].likes}/>
            <Note text={postsData[1].text} likes={postsData[1].likes}/>
            <Note text={postsData[2].text} likes={postsData[2].likes}/>
        </div>
    )
}

export default Post;