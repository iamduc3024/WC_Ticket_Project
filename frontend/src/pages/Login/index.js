import clsx from 'clsx';
import style from './Login.module.scss'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WCLogo from '../../assets/logos/WCLogo.png'
import axios from 'axios';

function Login() {

    const [passHide, setPassHide] = useState(false)

    const [inputs, setInputs] = useState({
        phone: "",
        password: "",
    });

    let [message, setMessage] = useState('')

    //const[err, setError] = useState(null);

    let phoneIn = document.querySelector('.' + style.phoneNumberInput)
    let passIn = document.querySelector('.' + style.passInput)
    
    const [isPhone, setIsPhone] = useState(true)
    const [isPass, setIsPass] = useState(true)

    useEffect(() => {
        console.log("useEffect   " , message);
        if(message === 'Login successful') {
            window.location.href = "/"
        }
    },[message])

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

    const handleChange = (e) => {
        setInputs((prev) => {
            return {
              ...prev,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = async (e) => {
        try {
            console.log(inputs);
            await axios.post("http://localhost:8080/customer/showByPhoneAndPassword", inputs)
            .then((response) => {
                setMessage(response.data.message);
                console.log(message);
                //alert(message);
            })
            .catch((err) => {
                console.log(err);
                message = 'Server error!';
            });
        } catch (err) {
            console.log(err.respone.data);
        }
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handlePassReplication()
        }
    }

    function handlePassReplication() {
        handlePhoneBlur()
        handlePassBlur()
        {
            if(isPass && isPhone && inputs.phone !== '' && inputs.password !== '') {
                handleSubmit()
            }
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
                        onKeyDown={handleKeyDown}
                        onFocus={() => {
                            setIsPhone(true)
                        }}
                        type="text" placeholder="Enter your phone." 
                        name='phone'
                        onChange={handleChange}/>

                        <div className= {style.errContainer}>
                            <p className= {clsx({[style.errMessage] : isPhone} )}>Invalid phone number</p>
                        </div>
                    </section>

                    <section className={style.passInputContainer}>
                        <label htmlFor="passInput">Password</label>
                        <input className={clsx(style.passInput, {[style.invalidBorder] : !isPass}) } 
                        type="password" placeholder="Enter your password" 
                        name='password'
                        onBlur={handlePassBlur}
                        onKeyDown={handleKeyDown}
                        onFocus={() => {
                            setIsPass(true)
                        }}
                        onChange={handleChange}/>
                        <i className={ clsx(style.hiddenPass, "ti-eye", ) } 
                            onClick={handleHide}
                        ></i>

                        <div className= {style.errContainer}>
                            <p className= {clsx({[style.errMessage] : isPass} )}>Invalid Password</p>
                        </div>
                    </section>

                    <Link to ="/" >
                    <button className={style.submitSignInBtn}
                    onClick={(e) => {
                        handlePassReplication();
                        if(message !== "Login successful") {
                            e.preventDefault();
                        }
                    }}>Sign In</button>
                    </Link>

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
