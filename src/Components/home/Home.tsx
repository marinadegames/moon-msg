// imports
import React, {useEffect} from 'react'
import s from './Home.module.css'
import keyIcon from '../../assets/keypng.png'
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {RouteNames} from "../../routes";
import {rootReducerType} from "../../Redux/store";
import {getStatusTC, setUserProfileTC} from "../../Redux/profileReducer";

// component
export const Home = () => {
    const id = useSelector<rootReducerType, number | null>(state => state.auth.id)
    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) {
            dispatch(setUserProfileTC(id))
            dispatch(getStatusTC(Number(id)))
        }
    }, [id, dispatch])

    if (!isAuth) {
        return <Navigate to={RouteNames.LOGIN}/>
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