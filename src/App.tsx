// imports
import React, {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LeftSideBar} from "./components/leftSideBar/LeftSideBar";
import {Main} from "./components/main/Main";
import s from './App.module.css'
import {getAuthUserDataTC} from "./redux/authReducer";
import {Header} from "./components/header/Header";
import {getMyStatusTC, setMeProfileTC} from "./redux/meProfileReducer";
import {rootReducerType} from "./redux/store";

export const App = memo(() => {

        const myId = useSelector<rootReducerType, number | null>(state => state.auth.id)
        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(getAuthUserDataTC())
            if (myId) {
                dispatch(setMeProfileTC(myId))
                dispatch(getMyStatusTC(Number(myId)))
            }
        }, [myId, dispatch])

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
