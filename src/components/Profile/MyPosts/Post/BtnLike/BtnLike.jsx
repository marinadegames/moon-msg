import React from "react";
import s from "./BtnLike.module.css";


let btnLike = s.btn + ' ' + s.btnLike;


const BtnLike = (props) => {
  return (
          <button className={btnLike}>
            Like {props.likesCount}
          </button>
  )
}

export default BtnLike;