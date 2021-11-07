import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.postsBox}>
      <div className={s.sendPost}>
        <div className={s.postsTitle}><h2>Send post:</h2><small>Max symbols: 200</small></div>
        <div className={s.sendPostDiv}>
          <textarea maxlength='200' className={s.textArea}></textarea>
          <div className={s.btnSend}>SEND</div>
        </div>
      </div>
      <div className={s.myPostDiv}>
        <div className={s.postsTitle}><h2>My posts:</h2></div>

        <div>

          <Post />
          <Post />

        </div>

      </div>
    </div>
  )
}

export default MyPosts;