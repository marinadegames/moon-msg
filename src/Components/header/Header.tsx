// import
import React, {memo} from "react";
import s from './Header.module.css'
import moon from '../../assets/moon.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../Redux/store";
import {logoutTC} from "../../Redux/authReducer";
import {Anonymous} from "../../Utils/BigHeadsFile";
import {GreetingDay} from "../greetingDay/GreetingDay";


// components
export const Header = memo(() => {

    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    const avatar = useSelector<rootReducerType, any>(state => state.meProfilePage.profile?.photos.small)
    const login = useSelector<rootReducerType, string | null>(state => state.auth.login)
    const dispatch = useDispatch()

    const onClickLogout = () => {
        dispatch(logoutTC())
    }

    console.log(isAuth, login)

    // return
    return (
        <div className={s.Header}>
            <div className={s.flexBoxHeaderLeft}>
                <div className={s.logotype}>
                    <img src={moon} alt="moon" width={'60px'} height={'60px'}/>
                </div>

                <NavLink className={s.siteTitle} to={'/'}>
                    Moon!msg
                </NavLink>
            </div>
            <div className={s.flexBoxHeaderCenter}>
                <GreetingDay isAuth={isAuth} login={login}/>
            </div>


            <div className={s.flexBoxHeaderUserLogo}>
                {isAuth
                    ?
                    <div className={s.boxHeaderAvatarAndExit}>
                        <button className={s.buttonExit} onClick={() => onClickLogout()}>exit</button>
                        {avatar !== null
                            ? <NavLink to={'/me'}><img className={s.logoUser} src={avatar} alt={'avatar'}/></NavLink>
                            : <div className={s.logoUser}>{Anonymous()}</div>}
                    </div>
                    :
                    <NavLink to={'/login'} className={s.login_btn}>Login</NavLink>}
            </div>
        </div>
    )
})