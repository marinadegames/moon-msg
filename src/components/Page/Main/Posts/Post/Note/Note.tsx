import React from "react";
import s from './Note.module.css'

const Note = () => {
    return (
    <div className={s.note}>
        <div>ipsum dolarLorem ipsum dolarLorem ipsum dolar</div>
        <div className={s.buttonsNote}>
            <button className={s.btnLike}>like</button>
            <button className={s.btnShare}>share</button>
            <button className={s.btnFav}>favorite</button>
        </div>
    </div>
)
}

export default Note;