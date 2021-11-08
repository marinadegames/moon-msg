import React from "react";
import s from "./BtnShare.module.css";



let btnShare = s.btn + ' ' + s.btnShare;


const BtnShare = (props) => {
  return (
          <button className={btnShare}>
            Share
          </button>
  )
}

export default BtnShare;