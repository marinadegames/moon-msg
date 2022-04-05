// imports
import React from 'react'
import s from './Home.module.css'
import keyIcon from '../../assets/keypng.png'
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {RouteNames} from "../../routes";
import {rootReducerType} from "../../redux/store";

// component

export const Home = () => {

    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    if (!isAuth){
        return <Navigate to={RouteNames.LOGIN} />
    }

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