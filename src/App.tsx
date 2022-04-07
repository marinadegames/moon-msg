// imports
import React, {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LeftSideBar} from "./components/leftSideBar/LeftSideBar";
import {Main} from "./components/main/Main";
import s from './App.module.css'
import {getAuthUserDataTC} from "./redux/authReducer";
import {getStatusTC, setUserProfileTC} from "./redux/profileReducer";
import {rootReducerType} from "./redux/store";
import {Header} from "./components/header/Header";

// components
export const App = memo(() => {

        const id = useSelector<rootReducerType, number | null>(state => state.auth.id)

        const dispatch = useDispatch()

        useEffect(() => {
            if (id) {
                dispatch(setUserProfileTC(id))
                dispatch(getStatusTC(Number(id)))
            }
        }, [id, dispatch])

        useEffect(() => {
            dispatch(getAuthUserDataTC())
        }, [dispatch])

        // return
        return (
            <div className={s.App}>
                <Header/>
                <div className={s.flexMain}>
                    <LeftSideBar/>
                    <Main/>
                </div>
                {/*<Footer />*/}
            </div>
        );
    }
)
