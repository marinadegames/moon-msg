// imports
import React from 'react'
import s from './Home.module.css'
import keyIcon from '../../Assets/keypng.png'

// component

export const Home = () => {
    return (
        <>
            <div className={s.pageName}>HOME</div>
            <div className={s.homeMain}>
                <img alt={'keyImg'} src={keyIcon}/>
                <h1>Page under construction...</h1>
            </div>
        </>

    )
}