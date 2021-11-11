import React from "react";
import s from "./Nav.module.css";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <a href='/profile'><div className={s.navLink} active>Profile</div></a>
            <a href='/dialogs'><div className={s.navLink}>Message</div></a>
            <a href='#'><div className={s.navLink}>News</div></a>
            <a href='#'><div className={s.navLink}>Music</div></a>
            <div className={s.delimiter}></div>
            <a href='#'><div className={s.navLink}>Settings</div></a>
        </nav>
    )
}

export default Navbar;