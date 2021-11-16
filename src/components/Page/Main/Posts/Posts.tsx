import React from "react";
import './Posts.css'

const Posts = () => {
    return (
        <div className='myPosts'>
            <div className='headerPosts'>My Posts:</div>
            <textarea maxLength={100} placeholder='Напишите что-нибудь...'
                      className='textAreaSendPost'/>
            <button className='btnSendPost'>Send</button>
        </div>
    )
}

export default Posts;