import React from "react";
import s from "./BtnFavorite.module.css";

let btnFavorite = s.btn + ' ' + s.btnFavorite;

const BtnFavorite = (props) => {
  return (
          <button className={btnFavorite}>
            Favorite
          </button>
  )
}

export default BtnFavorite;