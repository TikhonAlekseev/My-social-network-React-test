import React, {useState} from "react"
import './auth.css'
import {Field, reduxForm} from "redux-form";

 let LoginFormCustom=(props) =>{

    return(
        <form className="auth-form" onSubmit={props.handleSubmit}>
            <Field component={'input'} name="login" type="email" className="auth-form__input" placeholder={"Введите email"}/>
            <Field  component={'input'} name="password" type="password" className="auth-form__input" placeholder={"Введите пароль"}/>
            {props.select?
                <Field  component={'input'} name="name" type="text" className="auth-form__input" placeholder={"Ваше Имя"}/>
                : null
            }
                {!props.select?
                    <>
                        <button className="auth-form__button">Войти</button>
                        <div className="auth-form-registration ">
                            <span className="auth-form-registration__text-content">Нет аккаунта?</span>
                            <a href="#" onClick={props.registration} className="auth-form-registration__link">Зарегистрироваться</a>
                        </div>
                    </>
                        :
                    <>
                        <button className="form__button">Зарегистрироваться</button>
                        <div className="auth-form-registration">
                            <span className="auth-form-registration__text-content">У вас уже есть аккаунт?</span>
                            <a href="#" onClick={props.authOn} className="auth-form-registration__link">Можете войти.</a>
                        </div>
                    </>
                }



        </form>
    )
}
export let LoginFormRedux = reduxForm({form:'login'})(LoginFormCustom)
