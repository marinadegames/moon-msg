import React from "react";
import Main from "./Main/Main";
import Nav from "./Nav/Nav";
import './Page.css'

const Page = () => {
    return (
        <div className='page'>
            <Nav />
            <Main />
        </div>
    )
}

export default Page;