import clsx from 'clsx';
import style from './Login.module.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import WCLogo from '../../assets/logos/WCLogo.png'

function Login() {

    const [passHide, setPassHide] = useState(false)

    let phoneIn = document.querySelector('.' + style.phoneNumberInput)
    let passIn = document.querySelector('.' + style.passInput)
    
    const [isPhone, setIsPhone] = useState(true)
    const [isPass, setIsPass] = useState(true)

    function handlePhoneBlur() {
        if(phoneIn) {

            var phoneno = /^\d{10}$/;
            if(phoneIn.value.match(phoneno)) {
                setIsPhone(true)
            }
            else {
                setIsPhone(false)
            }
        }
        else {
            phoneIn = document.querySelector('.' + style.phoneNumberInput)
            handlePhoneBlur()
        }
    }

    function handlePassBlur() {
        if(passIn) {
            
            if(passIn.value.length >= 6) {
                setIsPass(true)
            }
            else {
                setIsPass(false)
            }
        }
        else {
            passIn = document.querySelector('.' + style.passInput)
            handlePassBlur()
        }
    }

    function handleHide() {
        
        console.log(passIn);
        
        setPassHide(!passHide);
        if(!passHide)
        {
            passIn.type = "text"
        }
        else {
            passIn.type = "password"
        }
    }


    return (
        <div className={style.container}>

            <div className={style.loginContainer}>
                <div className={style.loginContent}>
                    <h1>Login</h1>

                    <section className={style.userInputContainer}>
                        <label htmlFor="phoneNumberInput" >Phone</label>
                        <input className={clsx(style.phoneNumberInput, {[style.invalidBorder] : !isPhone}) }
                        onBlur={handlePhoneBlur}
                        onFocus={() => {
                            setIsPhone(true)
                        }}
                        type="text" placeholder="Enter your phone." />

                        <div className= {style.errContainer}>
                            <p className= {clsx({[style.errMessage] : isPhone} )}>Invalid phone number</p>
                        </div>
                    </section>

                    <section className={style.passInputContainer}>
                        <label htmlFor="passInput">Password</label>
                        <input className={clsx(style.passInput, {[style.invalidBorder] : !isPass}) } 
                        type="password" placeholder="Enter your password" 
                        onBlur={handlePassBlur}
                        onFocus={() => {
                            setIsPass(true)
                        }}/>
                        <i className={ clsx(style.hiddenPass, "ti-eye", ) } 
                            onClick={handleHide}
                        ></i>

                        <div className= {style.errContainer}>
                            <p className= {clsx({[style.errMessage] : isPass} )}>Invalid Password</p>
                        </div>
                    </section>

                    <button className={style.submitSignInBtn}>Sign In</button>

                    <p className={style.moveSignUp}>
                        Do not have account yet?
                        <Link to ="/register" > Sign Up</Link>
                    </p>
                </div>
                
                <div className={style.logo}>
                    <img className= {style.WCLogo} src={WCLogo} alt="" />
                </div>
            </div>
    </div>
    );
}

export default Login;
