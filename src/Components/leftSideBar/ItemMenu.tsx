import s from "./LeftSideBar.module.css";
import React from "react";
import {statusPageActiveType} from "./LeftSideBar";
import {Link} from "react-router-dom";

type PropsType = {
    changeStatusItemMenu: (value: statusPageActiveType) => void
    img: string
    name: statusPageActiveType
    activeItemMenu: string
    link: string
    title: string
}

export const ItemMenu = ({title, name, changeStatusItemMenu, activeItemMenu, img, link}: PropsType) => {
    return (
        <Link className={activeItemMenu === name ? s.menuItemACTIVE : s.menuItem}
              onClick={() => changeStatusItemMenu(name)}
              to={link}>
            <img src={img} height='50px' width='50px' alt={'itemMenu'}/>
            {title}
            {activeItemMenu === name ?
                <div className={s.boxVerticalLineActive}>
                    <div className={s.verticalLineActive}/>
                </div> : <div/>
            }
        </Link>
    )
}