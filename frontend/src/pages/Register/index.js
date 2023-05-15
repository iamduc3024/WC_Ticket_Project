import clsx from 'clsx';
import style from './Register.module.scss'
import { useEffect, useState } from 'react';

import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import WCLogo from '../../assets/logos/WCLogo.png'
import { Helmet } from 'react-helmet';


function Register() {

    const navigate = useNavigate()
    
    // Các cò kiểm tra trạng thái hiển thị của password và confirm password
    const [passHide, setPassHide] = useState(false)
    const [passCheckHide, setPassCheckHide] = useState(false)
    
    // Lưu trữ thông tin người dùng đăng kí
    const [inputs, setInputs] = useState({
        name: "",
        phone: "",
        password: "",
    });

    // Thông báo khi đăng kí thành công hay khi trùng số điện thoại
    let [message, setMessage] = useState('')

    const [err, setError] = useState(null);

    // Các Elements input
    let userInp = document.querySelector('.' + style.userInput)
    let phoneInp = document.querySelector('.' + style.phoneInput)
    let passInp = document.querySelector('.' + style.passInput)
    let passCheckInp = document.querySelector('.' + style.passwInputCheck)

    // Các cờ kiểm tra xem có phải số điện thaoị không, có phải mật khẩu hợp lệ không...
    const [isUser, setIsUser] = useState(true)
    const [isPhone, setIsPhone] = useState(true)
    const [isPass, setIsPass] = useState(true)
    const [isPassCheck, setIsPassCheck] = useState(true)

    // Nếu đăng kí thành công thì chuyển đến đăng nhập
    useEffect(() => {
        if(message === "Success") {
            //window.location.href = "/login"
            navigate('/login')
        }
    }, [message])

    // Xử lí khi blur khỏi vùng của các input
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
            if(isPass && (passCheckInp.value === passInput.value) && passCheckInp.value) {
                setIsPassCheck(true)
                
            }
            else {
                setIsPassCheck(false)
            }

        }
        else {
            passCheckInp = document.querySelector('.' + style.passwInputCheck)
            handlePassCheckBlur()
        }
    }

    // Xử lí khi ẩn/hiện mật khẩu
    function handlePassHide() {
        
        
        setPassHide(!passHide);
        if(!passHide)
        {
            passInp.type = "text"
        }
        else {
            passInp.type = "password"
        }
    }

    function handlePassCheckHide() {
        
        
        setPassCheckHide(!passCheckHide);
        if(!passCheckHide)
        {
            passCheckInp.type = "text"
        }
        else {
            passCheckInp.type = "password"
        }
    }

    // Xử lý khi nhập thông tin người dùng khi đăng kí
    const handleChange = (e) => {
        setMessage('')
        setInputs((prev) => {
                if (e.target.name === 'passCheck') {
                    return {...prev};
                }
                return { ...prev, [e.target.name]: e.target.value }
            }
        )
    }

    // Xử lý khi người dùng nhập đúng tất cả các input
    // Nhận thông tin từ database xem có bị trùng không
    // Nếu không thì truyền đến cho database để thêm vào database
    const handleSubmit = async (e) => {
        try {
            axios.get("http://localhost:8080/customer/showCountPhone" , {params : {
                phoneNumber : inputs.phone
            }})
            .then((response) => {
                setMessage(response.data.message);
                message = response.data.message
            })
            .then (() => {
                if(message) {
                    if(message === "Success") {
                        axios.post("http://localhost:8080/customer/create", inputs);
                        
                    }
                }
            } )
            .catch((err) => {
                console.log(err);
                message = 'Server error!';
            })
            
            
        } catch (err) {
            setError(err.response.data);
        }
    };

    // Kiểm tra xem người dùng đã ghi đúng tất cả các ô input chưa
    function handlePassReplicationPassCheck() {
        handleUserBlur() 
        handlePhoneBlur()
        handlePassBlur()
        handlePassCheckBlur()
        
        if (isUser && isPhone && isPassCheck && inputs.name !== "" && inputs.password !== "" && inputs.phone !== "") {
            handleSubmit();
        }
    }

    // Xử lý khi người dùng bấm enter ở các ô input
    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handlePassReplicationPassCheck()
        }
    }

    return (
        <>
            <Helmet>
                <title>WC_Ticket</title>
            </Helmet>
            <div className= {style.container}>

                <div className= {style.registerContainer}>
                    <div className= {style.registerContent}>
                        <h1>Register</h1>

                        <section className= {style.userInputContainer}>
                            <label htmlFor= {style.userInput} >Your Name</label>
                            <input className= {clsx(style.userInput, {[style.invalidBorder] : !isUser})} 
                            type="text" placeholder="Enter your name." 
                            name='name'
                            onBlur={handleUserBlur}
                            onKeyDown={handleKeyDown}
                            onFocus={() => {
                                setIsUser(true)
                            }}
                            onClick={() => {
                                setIsUser(true);
                            }}
                            onChange={handleChange}/>
                            <div className= {style.errContainer}>
                                <p className= {clsx({[style.errMessage] : isUser} )}>Username is already existed</p>
                            </div>
                        </section>

                        <section className= {style.phoneInputContainer}>
                            <label htmlFor= {style.phoneInput} >Phone</label>
                            <input className= {clsx(style.phoneInput, {[style.invalidBorder] : !isPhone})} 
                            type="text" placeholder="Enter your phone." 
                            name='phone'
                            onBlur={handlePhoneBlur}
                            onKeyDown={handleKeyDown}
                            onClick={() => {
                                setIsPhone(true)
                            }}
                            onChange={handleChange}/>
                            <div className= {style.errContainer}>
                                <p className= {clsx({[style.errMessage] : isPhone} )}>Invalid phone number</p>
                            </div>
                        </section>

                        <section className= {style.passInputContainer}>
                            <label htmlFor= {style.passInput}>Password</label>
                            <input className= {clsx(style.passInput, {[style.invalidBorder] : !isPass})} 
                            type="password" placeholder="Enter your password" 
                            name='password'
                            onBlur={handlePassBlur}
                            onKeyDown={handleKeyDown}
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

                        <section className= {style.passwInputCheckContainer}>
                            <label htmlFor= {style.passwInputCheck}>Retype Password</label>
                            <input className= {clsx(style.passwInputCheck, {[style.invalidBorder] : !isPassCheck})} 
                            type="password" placeholder="Confirm your password" 
                            name='passCheck'
                            onBlur={handlePassCheckBlur}
                            onKeyDown={handleKeyDown}
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

                        <div className= {clsx(style.serverMessage)}>
                            <p className= {clsx(style.paraErr, {[style.invalid] : !(message === "Duplicate")})}>Duplicate phone number</p>
                        </div>

                        
                            <Link to ="/login" >
                            <button className= {style.submitSignInBtn}
                            onClick={(e) => {
                                handlePassReplicationPassCheck();
                                
                                if(message !== "Success") {
                                    e.preventDefault()
                                }
                                
                            }
                            }>Sign Up</button>
                            </Link>

                        <p className={style.moveSignUp}>
                            I have an account.
                            <Link to ="/login" > Sign In</Link>
                        </p>
                    </div>
                    
                    <div className= {style.logo}>
                        <img className= {style.WCLogo} src={WCLogo} alt="" />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Register;
