import clsx from 'clsx';
import style from './Register.module.scss'
import { useEffect, useState } from 'react';

import axios from 'axios';
import React from 'react';


function Register() {

    const [passHide, setPassHide] = useState(false)

    const [passCheckHide, setPassCheckHide] = useState(false)
    
    const [inputs, setInputs] = useState({
        name: "dat",
        phone: "22",
        password: "33",
    });

    const [err, setError] = useState(null);

    let passInp = document.querySelector('.' + style.passInput)
    let passCheckInp = document.querySelector('.' + style.passInputCheck)
    
    useEffect( () => {
        passInp = document.querySelector('.' + style.passInput)
        passCheckInp = document.querySelector('.' + style.passInputCheck)
    }, [passHide, passCheckInp] )

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
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(inputs);
            await axios.post("http://localhost:8080/customer/create", inputs);
        } catch (err) {
            setError(err.response.data);
        }
    };

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
                    <input className= {style.userInput} type="text" placeholder="Enter your name." 
                    onChange={handleChange}/>
                    <div className= {style.errContainer}>
                        <p>aha</p>
                    </div>
                </section>

                <section className= {style.phoneInputContainer}>
                    <label htmlFor="phoneInput" >Phone</label>
                    <input className= {style.phoneInput} type="text" placeholder="Enter your phone." 
                    onChange={handleChange}/>
                    <div className= {style.errContainer}>
                        <p>aha</p>
                    </div>
                </section>

                <section className= {style.passInputContainer}>
                    <label htmlFor="passInput">Password</label>
                    <input className= {style.passInput} type="password" placeholder="Enter your password" 
                    onChange={handleChange}/>
                    <i className= {clsx(style.hiddenPass , "ti-eye")}
                    onClick={handlePassHide}></i>
                    <div className= {style.errContainer}>
                        <p>aha</p>
                    </div>
                </section>

                <section className= {style.passInputCheckContainer}>
                    <label htmlFor="passInputCheck">Retype Password</label>
                    <input className= {style.passInputCheck} type="password" placeholder="Confirm your password" 
                    onChange={handleChange}/>
                    <i className= {clsx(style.hiddenPassCheck, "ti-eye")}
                    onClick={handlePassCheckHide}></i>
                    <div className= {style.errContainer}>
                        <p>aha</p>
                    </div>
                </section>

                <button className= {style.submitSignInBtn}>Sign Up</button>

            </div>
            
            <div className= {style.logo}>

        </div>


        </div>
    </div>

    );
}

export default Register;
