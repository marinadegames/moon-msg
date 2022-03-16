// import
import React from "react";
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";

// form
export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}
              className={s.loginForm}>
            <div>
                <Field placeholder={'login'}
                       name={'login'}
                       className={s.inputLoginForm}
                       component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'}
                       name={'password'}
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
            <div>
                <button className={s.btnLogin}>login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export const Login = function (props: any) {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return (
        <div>
            <h1 className={s.pageName}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}