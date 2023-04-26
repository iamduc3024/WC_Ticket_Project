import clsx from 'clsx';
import style from './Register.module.scss'
import { useEffect, useState } from 'react';

import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


function Register() {

    const [passHide, setPassHide] = useState(false)

    const [passCheckHide, setPassCheckHide] = useState(false)
    
    const [inputs, setInputs] = useState({
        name: "",
        phone: "",
        password: "",
    });

    const [err, setError] = useState(null);

    let userInp = document.querySelector('.' + style.userInput)
    let phoneInp = document.querySelector('.' + style.phoneInput)
    let passInp = document.querySelector('.' + style.passInput)
    let passCheckInp = document.querySelector('.' + style.passInputCheck)
    const [isUser, setIsUser] = useState(true)
    const [isPhone, setIsPhone] = useState(true)
    const [isPass, setIsPass] = useState(true)
    const [isPassCheck, setIsPassCheck] = useState(true)
    
    
    function handleUserBlur() {
        
        if(userInp) {
            if(userInp.value) {
                setIsUser(true)
            }
            else {
                setIsUser(false)
            }
        }
        else {
            userInp = document.querySelector('.' + style.userInput)
            handleUserBlur();
        }
    }

    function handlePhoneBlur() {
        if(phoneInp) {

            var phoneno = /^\d{10}$/;
            if(phoneInp.value.match(phoneno)) {
                setIsPhone(true)
            }
            else {
                setIsPhone(false)
            }
        }
        else {
            phoneInp = document.querySelector('.' + style.phoneInput)
            handlePhoneBlur()
        }
    }

    function handlePassBlur() {
        if(passInp) {

            if(passInp.value.length >= 6) {
                setIsPass(true)
            }
            else {
                setIsPass(false)
            }
        }
        else {
            passInp = document.querySelector('.' + style.passInput)
            handlePassBlur()
        }
    }

    function handlePassCheckBlur() {
        
        if(passCheckInp) {
            let passInput = document.querySelector('.' + style.passInput)
            if(isPass && passCheckInp.value.match(passInput.value) && passCheckInp.value) {
                setIsPassCheck(true)
            }
            else {
                setIsPassCheck(false)
            }

        }
        else {
            passCheckInp = document.querySelector('.' + style.passInputCheck)
            handlePassCheckBlur()
        }
    }

    function handlePassHide() {
        
        //console.log(passInp);
        
        setPassHide(!passHide);
        if(!passHide)
        {
            passInp.type = "text"
        }
        else {
            passInp.type = "password"
        }
    }

    const handleChange = (e) => {
        setInputs((prev) => {
                if (e.target.name === 'passCheck') {
                    return {...prev};
                }
                return { ...prev, [e.target.name]: e.target.value }
            }
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(inputs);
            await axios.post("http://localhost:8080/customer/create", inputs);
        } catch (err) {
            setError(err.response.data);
        }
    };

    function handlePassReplicationPassCheck() {
        if (isUser && isPhone && isPassCheck) {
            handleSubmit();
        }
    }

    function handlePassCheckHide() {
        
        //console.log(passInp);
        
        setPassCheckHide(!passCheckHide);
        if(!passCheckHide)
        {
            passCheckInp.type = "text"
        }
        else {
            passCheckInp.type = "password"
        }
    }



    return (
        <div className= {style.container}>

        <div className= {style.loginContainer}>
            <div className= {style.loginContent}>
                <h1>Register</h1>

                <section className= {style.userInputContainer}>
                    <label htmlFor="userInput" >Your Name</label>
                    <input className= {clsx(style.userInput, {[style.invalidBorder] : !isUser})} 
                    type="text" placeholder="Enter your name." 
                    name='name'
                    onBlur={handleUserBlur}
                    onFocus={() => {
                        setIsUser(true)
                    }}
                    onClick={() => {
                        console.log(isUser)
                        setIsUser(true);
                    }}
                    onChange={handleChange}/>
                    <div className= {style.errContainer}>
                        <p className= {clsx({[style.errMessage] : isUser} )}>Username is already existed</p>
                    </div>
                </section>

                <section className= {style.phoneInputContainer}>
                    <label htmlFor="phoneInput" >Phone</label>
                    <input className= {clsx(style.phoneInput, {[style.invalidBorder] : !isPhone})} 
                    type="text" placeholder="Enter your phone." 
                    name='phone'
                    onBlur={handlePhoneBlur}
                    onClick={() => {
                        setIsPhone(true)
                    }}
                    onChange={handleChange}/>
                    <div className= {style.errContainer}>
                        <p className= {clsx({[style.errMessage] : isPhone} )}>Invalid phone number</p>
                    </div>
                </section>

                <section className= {style.passInputContainer}>
                    <label htmlFor="passInput">Password</label>
                    <input className= {clsx(style.passInput, {[style.invalidBorder] : !isPass})} 
                    type="password" placeholder="Enter your password" 
                    name='password'
                    onBlur={handlePassBlur}
                    onClick={() => {
                        setIsPass(true)
                    }}
                    onChange={handleChange}/>
                    <i className= {clsx(style.hiddenPass , "ti-eye")}
                    onClick={handlePassHide}></i>
                    <div className= {style.errContainer}>
                        <p className= {clsx({[style.errMessage] : isPass} )}>Invalid password</p>
                    </div>
                </section>

                <section className= {style.passInputCheckContainer}>
                    <label htmlFor="passInputCheck">Retype Password</label>
                    <input className= {clsx(style.passInputCheck, {[style.invalidBorder] : !isPassCheck})} 
                    type="password" placeholder="Confirm your password" 
                    name='passCheck'
                    onBlur={handlePassCheckBlur}
                    onClick={() => {
                        setIsPassCheck(true)
                    }}
                    onChange={handleChange}/>
                    <i className= {clsx(style.hiddenPassCheck, "ti-eye")}
                    onClick={handlePassCheckHide}></i>
                    <div className= {style.errContainer}>
                        <p className= {clsx({[style.errMessage] : isPassCheck} )}>Password does not match</p>
                    </div>
                </section>

                <button className= {style.submitSignInBtn}
                onClick={handleSubmit}>Sign Up</button>

                <p className={style.moveSignUp}>
                    I have an account.
                    <Link to ="/login" > Sign In</Link>
                </p>
            </div>
            
            <div className= {style.logo}>

        </div>


        </div>
    </div>

    );
}

export default Register;
