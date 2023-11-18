import React, { useState } from "react";
import { MyInput } from "../components/inputBox";
import { MySwitcher } from "../components/switcher";
import './register.scss'

export const Register = () => {
    const [debounce, setDebounce] = useState()
    const [trottle, setTrottle] = useState()

    const [passWord, setPassword] = useState('')

    const [Mailerror, setMailError] = useState(false)
    const [descriptionError, setDescError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [validPasswordError, setValidPasswordError] = useState(false)

    const [consistsDeb, setDeb] = useState(false)
    const [consistsTrottle, setConsistsTrottle] = useState(false)
    const [consistsEmail, setConsistsEmail] = useState(false)
    const [consistsDescription, setConsistsDescription] = useState(false)
    const [consistsPassword, setConsistsPassword] = useState(false)
    const [consistsValidPasssword, setConsistsValidPasssword] = useState(false)

    const [errorMessage, setErrorMessage] = useState('')
    const [errorDesMessage, seterrorDesMessage] = useState('')
    const [errorPassMessage, setErrorPassMEssage] = useState('')
    const [errorValidPassword, setErrorValidPassword] = useState('')

    const sDebounce = (val) => {
        setDebounce(val)
        setDeb(val.length !== 0)
    }

    const sTrottle = (val) => {
        setTrottle(val)
        setConsistsTrottle(val.length !== 0)
    }
    const mail = (val) => {
        setConsistsEmail(val.length !== 0)
        if(val.length == 0){
            setErrorMessage('Почта обязательна!')
            setMailError(true)
        } else if(!val.includes('@')){
            setErrorMessage('Введите почту правильно!')
            setMailError(true)
        }else {
            setErrorMessage('')
            setMailError(false)
        }
    }
    const description = (val) => {
        setConsistsDescription(val.length !== 0)
        if(val.length == 0){
            setDescError(true)
            seterrorDesMessage('Описание обязательно!')
        }else{
            setDescError(false)
            seterrorDesMessage('')
        }
    }
    const password = (val) => {
        setPassword(val)
        setConsistsPassword(val.length !== 0)
        if(val.length == 0){
            setPasswordError(true)
            setErrorPassMEssage('Минимальная длина пароля 6 символов!')
        }else{
            setPasswordError(false)
            setErrorPassMEssage('')
        }
    }
    const validPassword = (val) => {
        setConsistsValidPasssword(val.length !== 0)
        setValidPasswordError(val.length == 0)
        if(passWord !== val) {
            setValidPasswordError(true)
            setErrorValidPassword('Пароли не совпадают!')
        }else{
            setValidPasswordError(false)
            setErrorValidPassword('')
        }
    }

    return (
        <>
            <form className='form'>
                <MyInput label={consistsDeb ? debounce : 'Debounce тест'} labelConsists={consistsDeb} changer={sDebounce}  type='text'/>
                <MyInput label='Trottle тест' changer={sTrottle} labelConsists={consistsTrottle} type='text'/>
                <p>Debounce: {debounce}</p>
                <p>Trottle: {trottle}</p>
            </form>
            
            <form className='form'>
                <MyInput 
                    label={errorMessage.length !== 0 ? errorMessage : 'Эл. почта'} 
                    labelConsists={consistsEmail} 
                    changer={mail} 
                    type='email' 
                    error={Mailerror}
                />
                <MyInput 
                    label={errorDesMessage.length !== 0 ? errorDesMessage : 'Описание'}  
                    labelConsists={consistsDescription} 
                    changer={description} 
                    type='textarea'
                    error={descriptionError}
                />
                <MyInput 
                    label={errorPassMessage.length !== 0 ? errorPassMessage : 'Пароль'}  
                    labelConsists={consistsPassword} 
                    changer={password} 
                    type='password'
                    error={passwordError}
                />
                <MyInput 
                    label={errorValidPassword.length !== 0 ? errorValidPassword : 'Подтвердите пароль'}  
                    labelConsists={consistsValidPasssword} 
                    changer={validPassword} 
                    type='password'
                    error={validPasswordError}
                />
                <MySwitcher/> 
                <button className="btn">  
                    Подтвердить
                </button>
            </form>
        </>
    )
}