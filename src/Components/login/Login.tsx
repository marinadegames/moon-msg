// import
import React, {useCallback, useState} from "react";
import s from './Login.module.css'
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../Redux/authReducer";
import {rootReducerType} from "../../Redux/store";
import {Navigate} from "react-router-dom";
import {RouteNames} from "../../routes";

export const Login = () => {
    console.log('render login')
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const isLogged = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [rememberMeValue, setRememberMeValue] = useState<boolean>(false)
    const [errorEmail, setErrorEmail] = useState<boolean>(false)
    const dispatch = useDispatch()

    const onChangeEmail = useCallback((e: string) => {
        setErrorEmail(false)
        setEmailValue(e)
    }, [])

    const onChangePassword = useCallback((e: string) => {
        setErrorEmail(false)
        setPasswordValue(e)
    }, [])

    const onChangeRememberMe = useCallback((e: boolean) => {
        setErrorEmail(false)
        setRememberMeValue(e)
    }, [])

    const enterSend = (e: string) => {
        if (e === 'Enter') {
            sendLogin()
        }
    }

    const sendLogin = () => {
        if (regexEmail.test(emailValue)) {
            dispatch(loginTC(emailValue, passwordValue, rememberMeValue))
        }
        if (!regexEmail.test(emailValue)) {
            setErrorEmail(true)
        }
    }

    if (isLogged) {
        return <Navigate to={RouteNames.HOME}/>
    }

    return (
        <div>
            <h1 className={s.pageName}>Login</h1>
            <div className={s.loginForm}>
                <input onChange={e => onChangeEmail(e.currentTarget.value)}
                       className={errorEmail ? s.inputLoginFormError : s.inputLoginForm}
                       type={'email'}
                       value={emailValue}
                       placeholder={'Email'}/>

                <input onChange={e => onChangePassword(e.currentTarget.value)}
                       className={s.inputLoginForm}
                       value={passwordValue}
                       type={'password'}
                       placeholder={'Password'}
                       onKeyPress={e => enterSend(e.key)}
                />
                <div>
                    <input onChange={e => onChangeRememberMe(e.currentTarget.checked)}
                           className={s.checkBoxLoginRememberMe}
                           type={'checkbox'}
                           checked={rememberMeValue}
                           placeholder={'Remember me'}/>
                    <span>Remember me</span>
                </div>
                {errorEmail && <h1 style={{color: 'red'}}> Incorrect email! </h1>}
            </div>
            <div>
                <button onClick={sendLogin}
                        className={s.btnLogin}>
                    login
                </button>
            </div>
        </div>

    )
}
