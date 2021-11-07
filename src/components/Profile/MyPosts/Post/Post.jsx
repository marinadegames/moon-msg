import React from "react";
import s from "./Post.module.css"

const Post = () => {
  return (
    <div className={s.postDiv}>
      <div>
        <div><small><a href='#' className={s.userLink}>Eugene Pashkevich</a> | <a href='#' className='linkDate'>07.11.2021</a> | <a href='#' className='linkTime'>12:27</a></small></div>
        <div className={s.textMyPost}>I want to know JavaScript and React!</div>
      </div>
    </div>
  )
}

export default Post;