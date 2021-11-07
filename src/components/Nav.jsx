import React from "react";

const Navbar = () => {
    return (
        <nav className='nav'>
            <a href='#'><div className='navLink'>Profile</div></a>
            <a href='#'><div className='navLink'>Message</div></a>
            <a href='#'><div className='navLink'>News</div></a>
            <a href='#'><div className='navLink'>Music</div></a>
            <div className='delimiter'></div>
            <a href='#'><div className='navLink'>Settings</div></a>
        </nav>
    )
}

export default Navbar;