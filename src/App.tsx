// imports
import React, {memo, useEffect} from 'react';
import './App.module.css';
import s from './App.module.css'
import {LeftSideBar} from "./Components/LeftSideBar/LeftSideBar";
import {Main} from "./Components/Main/Main";
import HeaderContainer from './Components/Header/HeaderContainer';
import {useDispatch} from "react-redux";
import {getAuthUserDataTC} from "./Redux/authReducer";


// components
export const App = memo(() => {

        const dispatch = useDispatch()

        // is login?
        useEffect(() => {
            dispatch(getAuthUserDataTC())
        }, [dispatch])

        // return
        return (
            <div className={s.App}>
                <HeaderContainer/>
                <div className={s.flexMain}>
                    <LeftSideBar/>
                    <Main/>
                </div>
                {/*<Footer />*/}
            </div>
        );
    }
)
