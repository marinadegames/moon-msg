import React from "react";
import BtnFavorite from "./BtnFavorite/BtnFavorite";
import BtnLike from "./BtnLike/BtnLike";
import BtnShare from "./BtnShare/BtnShare";
import s from "./ButtonsPost.module.css";



const ButtonsPost = (props) => {
  return (
    
        <div className={s.buttonsPost}>
          <BtnLike />
          <BtnShare />
          <BtnFavorite />
        </div>
  )
}

export default ButtonsPost;