import clsx from 'clsx';
import style from './Login.module.scss'
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import WCLogo from '../../assets/logos/WCLogo.png'
import axios from 'axios';
import { LoginContext } from '../../App'


function Login() {
    // Nhận các thông tin được truyền xuống từ App
    // isLogin để lưu trữ thông tin xem người dùng đã đăng nhập hay chưa
    // setIsLogin là hàm thay đổi trạng thái true/false của isLogin
    // userInfo dùng để lưu thông tin của người dùng khi đăng nhập
    const { isLogin, setIsLogin, userInfo } = useContext(LoginContext)
    
    const [passHide, setPassHide] = useState(false) // Trạng thái ẩn/hiện của mật khẩu

    // Thông tin về phone và password dùng để làm tham số khi call API
    const [inputs, setInputs] = useState({
        phone: "",
        password: "",
    });

    let [message, setMessage] = useState('') //Tthông báo đã đăng nhập thành công hay chưa. Đây là thông báo khi call API
    let [isAdmin, setIsAdmin] = useState(false); // Kiểm tra xem có phải admin hay không

    //const[err, setError] = useState(null);

    let phoneIn = document.querySelector('.' + style.phoneNumberInput) // Element: input điền số điện thoại
    let passIn = document.querySelector('.' + style.passInput) // Element: input điền mật khẩu
    let loginBtnRef = useRef()
    
    // Kiểm tra xem có đúng là số điện thoại không. Dùng để hiển thị lỗi khi blur ra ngoài vùng nhập
    const [isPhone, setIsPhone] = useState(true) 
    // Kiểm tra xem có đúng là mật khẩu không. Dùng để hiển thị lỗi khi blur ra ngoài vùng nhập
    const [isPass, setIsPass] = useState(true) 

    // Khi message thay đổi thì kiểm tra xem message là gì
    // Nếu message là 'Login successful' nghĩa là đăng nhập thành công
    // Khi đó thay đổi trạng thái đăng nhập isLogin = true
    // Ngược lại hiển thị ra lỗi
    useEffect(() => {
        if (message === 'Login successful') {
            setIsLogin(prev =>{
                prev = true
                return true
            } );
            if(isLogin === true) {
                
                loginBtnRef.current.click();
            }
            else {
                setIsLogin(true);
            }
            
        } else {
            if (message !== '') {
                alert(message);
                setMessage('');
            }
        }
    }, [message, isLogin])

    // Sau khi blur ra ngoài vùng điền điện thoại thì kiểm tra xem có đúng là số điện thoại hay không
    // Nếu đúng thì isPhone = true tương đương với đây là số điện thoại
    // Ngược lại thì đây không phải số điện thoại
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

    // Sau khi blur ra ngoài vùng điền mật khẩu thì kiểm tra xem có đúng là mật khẩu hay không
    // Nếu đúng thì isPass = true tương đương với đây là mật khẩu hợp lệ
    // Ngược lại thì đây không phải mật khẩu hợp lệ
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

    // Xử lý khi bấm vào ẩn/hiện mật khẩu
    function handleHide() {
        
        setPassHide(!passHide);
        if(!passHide)
        {
            passIn.type = "text"
        }
        else {
            passIn.type = "password"
        }
    }

    // Xử lý khi thay đổi lúc nhập các ô input
    const handleChange = (e) => {
        setInputs((prev) => {
            return {
              ...prev,
                [e.target.name]: e.target.value
            }
        });
    }

    // Xử lý khi nhấn nút submit xác nhận đăng nhập
    // Đầu tiên call API để nhận về các thông tin cần thiết của người dùng và message khi đăng nhập
    const handleSubmit = async (e) => {
        try {
            await axios.post("http://localhost:8080/customer/showByPhoneAndPassword", inputs)
            .then((response) => {
                userInfo.uId = response.data.id;
                userInfo.uName = response.data.name;
                userInfo.uPhone = inputs.phone;
                userInfo.uPassword = inputs.password;
                setIsAdmin(response.data.isAdmin);
                setMessage(response.data.message);
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

    // Xử lý khi enter ở các input
    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handlePassReplication()
        }
    }

    // Dùng để kiểm tra xem các input có lỗi gì không. Nếu có thì không xử lý kiểm tra đăng nhập
    function handlePassReplication() {
        handlePhoneBlur()
        handlePassBlur()
        if(isPass && isPhone && inputs.phone !== '' && inputs.password !== '') {
            handleSubmit()
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
                        <label htmlFor= {style.passInput}>Password</label>
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

                        <Link to = '/'>
                            <button className={style.submitSignInBtn}
                            ref={loginBtnRef}
                            onClick={(e) => {
                                handlePassReplication();
                                if (message !== "Login successful") {
                                    //alert(message);
                                    e.preventDefault();
                                   
                                }
                                else {
                                    if(isAdmin === 1) {
                                        
                                        window.location.href = "/admin";
                                    }
                                    
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
