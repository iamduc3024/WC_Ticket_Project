import clsx from 'clsx';
import style from './Login.module.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import WCLogo from '../../assets/logos/WCLogo.png'

function Login() {

    const [passHide, setPassHide] = useState(false)

    let phoneInp = document.querySelector('.' + style.phoneInput)
    let passInp = document.querySelector('.' + style.passInput)
    
    const [isPhone, setIsPhone] = useState(true)
    const [isPass, setIsPass] = useState(true)

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

    function handleHide() {
        
        console.log(passInp);
        
        setPassHide(!passHide);
        if(!passHide)
        {
            passInp.type = "text"
        }
        else {
            passInp.type = "password"
        }
    }


    return (
        <div className={style.container}>

            <div className={style.loginContainer}>
                <div className={style.loginContent}>
                    <h1>Login</h1>

                    <section className={style.userInputContainer}>
                        <label htmlFor="phoneInput" >Phone</label>
                        <input className={clsx(style.phoneInput, {[style.invalidBorder] : !isPhone}) }
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
