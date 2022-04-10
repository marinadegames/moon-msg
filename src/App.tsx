// imports
import React, {memo, useEffect} from "react";
import {useDispatch} from "react-redux";
import {LeftSideBar} from "./components/leftSideBar/LeftSideBar";
import {Main} from "./components/main/Main";
import s from './App.module.css'
import {getAuthUserDataTC} from "./redux/authReducer";
import {Header} from "./components/header/Header";

export const App = memo(() => {

        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(getAuthUserDataTC())
        }, [dispatch])

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
