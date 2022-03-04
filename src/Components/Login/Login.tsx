// import
import React from "react";
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";


export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'}
                       name={'login'}
                       component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'}
                       name={'password'}
                       component={'input'}/>
            </div>
            <div>
                <Field placeholder={'remember me'}
                       name={'rememberMe'}
                       type={'checkbox'}
                       component={'input'}/>
                Remember me
            </div>
            <div>
                <button>login</button>
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
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}