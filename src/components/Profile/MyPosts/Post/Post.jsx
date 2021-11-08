import React from "react";
import ButtonsPost from "./ButtonsPost";
import s from "./Post.module.css";



const Post = (props) => {
  return (
    
    <div className={s.postDiv}>
      <div>
        <div><small><a href='#' className={s.userLink}>Eugene Pashkevich</a> | <a href='#' className='linkDate'>07.11.2021</a> | <a href='#' className='linkTime'>12:27</a></small></div>
        <div className={s.textMyPost}>{props.message}</div>
        <ButtonsPost />
      </div>
    </div>
  )
}

export default Post;