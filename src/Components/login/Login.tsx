// import
import React from "react";
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {rootReducerType} from "../../redux/store";
import {loginTC} from "../../redux/authReducer";

// form
const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}
              className={s.loginForm}>
            <div>
                <Field placeholder={'email'}
                       name={'email'}
                       className={s.inputLoginForm}
                       component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'}
                       name={'password'}
                       type='password'
                       className={s.inputLoginForm}
                       component={'input'}/>
            </div>
            <div>
                <Field placeholder={'remember me'}
                       name={'rememberMe'}
                       type={'checkbox'}
                       className={s.checkBoxLoginRememberMe}
                       component={'input'}/>
                <span>Remember me</span>
            </div>
            {props.error &&
                <h3 className={s.errorTitle}>
                    {props.error}
                </h3>
            }
            <div>
                <button className={s.btnLogin}>login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}
type FormDataPropsType = {
    email: string
    password: string
    rememberMe: boolean
}
const LoginComponent = (props: LoginType) => {

    const onSubmit = (formData: FormDataPropsType | any) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    // return
    if (!props.isAuth) {
        return (
            <div>
                <h1 className={s.pageName}>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        )
    }
    // else => redirect to profile
    return (<Navigate to={'/profile'}/>)


}

const mapStateToProps = (state: rootReducerType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {
    login: loginTC
})(LoginComponent)