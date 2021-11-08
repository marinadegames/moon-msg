import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div><h1>Hi, samurai {props.name}!</h1></div>
        </header>
    )
}

export default Header;