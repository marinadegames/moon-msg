// imports
import {memo, useEffect} from "react";
import HeaderContainer from "./components/header/HeaderContainer";
import {useDispatch} from "react-redux";
import {LeftSideBar} from "./components/leftSideBar/LeftSideBar";
import {Main} from "./components/main/Main";
import s from './App.module.css'
import {getAuthUserDataTC} from "./redux/authReducer";

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
