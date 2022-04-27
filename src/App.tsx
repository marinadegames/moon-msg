import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {rootReducerType} from "./Redux/store";
import {getMyStatusTC, setMeProfileTC} from "./Redux/meProfileReducer";
import {Header} from "./Components/header/Header";
import {LeftSideBar} from "./Components/leftSideBar/LeftSideBar";
import {getAuthUserDataTC} from "./Redux/authReducer";
import {Main} from "./Components/main/Main";
import s from './App.module.css'

export const App = () => {
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
        </div>
    );
}

