import React from "react";
import Main from "./Main/Main";
import Nav from "./Nav/Nav";
import './Page.module.css'
import s from './Page.module.css'

const Page = () => {
    return (
        <div className={s.page}>
            <Nav />
            <Main />
        </div>
    )
}

export default Page;