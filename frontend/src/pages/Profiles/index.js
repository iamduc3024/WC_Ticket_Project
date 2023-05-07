import style from './Profiles.module.scss'
import images from 'src/assets/images/nations_png/nation_image'
import Header from 'src/components/Layouts/component/Header'
import SlideBar from 'src/components/Layouts/component/SlideBar'
import Footer from 'src/components/Layouts/component/Footer'
import { LoginContext } from 'src/App'
import { useContext, useEffect, useState } from 'react'
import clsx from 'clsx'
import axios from 'axios'


function Profiles() {

    const {userInfo} = useContext(LoginContext) // Lưu thông tin người dùng

    // Kiểm tra xem có đúng là mật khẩu không. Dùng để hiển thị lỗi khi blur ra ngoài vùng nhập
    const [isOldPass, setIsOldPass] = useState(true) 
    const [isNewPass, setIsNewPass] = useState(true) 

    const [transactions, setTransactions] = useState([])

    const [newPassHide, setNewPassHide] = useState(false) // Trạng thái ẩn/hiện của mật khẩu mới
    const [oldPassHide, setOldPassHide] = useState(false) // Trạng thái ẩn/hiện của mật khẩu cũ
    const [inputs, setInputs] = useState({
        customer_id : userInfo.uId,
        new_password: "",
    });

    const [isChangePass, setIsChangePass] = useState(false)

    let oldPassIn = document.querySelector('.' + style.oldPassInput) // Element: input điền mật khẩu cũ
    let newPassIn = document.querySelector('.' + style.newPassInput) // Element: input điền mật khẩu mới
    let newPassMes = document.querySelector('.' + style.newPassErrMes) // Element: message of new password

    // Xử lý khi blur khỏi input
    function handleOldPassBlur() {
        if(oldPassIn) {
            
            if(oldPassIn.value.length >= 6 && oldPassIn.value === userInfo.uPassword) {
                setIsOldPass(true)
            }
            else {
                setIsOldPass(false)
            }
        }
        else {
            oldPassIn = document.querySelector('.' + style.oldPassInput)
            handleOldPassBlur()
        }
    }

    function handleNewPassBlur() {
        if(newPassIn && newPassMes) {
            if(newPassIn.value.length >= 6 && newPassIn.value !== userInfo.uPassword) {
                setIsNewPass(true)
            }
            else if(newPassIn.value === userInfo.uPassword) {
                newPassMes.textContent = 'The new password must be different from the old one'
                setIsNewPass(false)
            }
            else {
                setIsNewPass(false)
            }
        }
        else {
            newPassIn = document.querySelector('.' + style.newPassInput)
            newPassMes = document.querySelector('.' + style.newPassErrMes)
            handleNewPassBlur()
        }
    }

    // Xử lý khi bấm vào ẩn/hiện mật khẩu
    function handleOldPassHide() {
        
        setOldPassHide(!oldPassHide);
        if(!oldPassHide)
        {
            oldPassIn.type = "text"
        }
        else {
            oldPassIn.type = "password"
        }
    }

    function handleNewPassHide() {
        
        setNewPassHide(!newPassHide);
        if(!newPassHide)
        {
            newPassIn.type = "text"
        }
        else {
            newPassIn.type = "password"
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

    const handleChangePassSubmit2 = async(e) => {
        try {
            await axios.post("http://localhost:8080/customer/update", inputs)
            .then((response) => {
                userInfo.uPassword = inputs.new_password
                alert('Change password successfully')
                window.location.href = '/'
            })
            .catch((err) => {
                console.log(err);
            });
        } catch (err) {
            console.log(err.respone.data);
        }
    }

    const handleChangePassSubmit1 = () => {
        handleOldPassBlur()
        handleNewPassBlur()
        if(!oldPassIn) {
            oldPassIn = document.querySelector('.' + style.oldPassInput)
        }

        if(isOldPass && isNewPass && inputs.new_password !== "" && oldPassIn.value.length !== 0) {
            handleChangePassSubmit2()
        }
    }

    const getTransactions = async (e) => {
        try {
            await axios.get("http://localhost:8080/customer/customerProfile", {params : {
                id : userInfo.uId
            }})
            .then((response) => {
                setTransactions(response.data)
            })
            .catch((err) => {
                console.log(err);
            });
        } catch (err) {
            console.log(err.respone.data);
        }
    }

    useEffect(() => {
        getTransactions()
    },[1])
    
    return (
        <>
            <Header />
            <SlideBar />

            <div className = {style.container}>
                <div className = {style.userContainer}>
                    <div className = {style.userName}>Name: {userInfo.uName}</div>
                    <div className = {style.phoneNumber}>Phone Number: {userInfo.uPhone}</div>
                    <div className= {style.changePasswordBtn}
                    onClick={(e) => {
                        if(!isChangePass) {
                            setIsChangePass(!isChangePass)
                            e.target.textContent = 'Change Password'
                        }
                        else {
                            handleChangePassSubmit1()
                        }
                    }}>You wanna change password?</div>
                    <section className= {clsx(style.changPassConatiner, {[style.invalid] : !isChangePass})}>
                        
                        <section className={style.oldPassInputContainer}>
                            <label htmlFor= {style.oldPassInput}>Old Password</label>
                            <input className={clsx(style.oldPassInput, {[style.invalidBorder] : !isOldPass}) } 
                            type="password" placeholder="Enter your old password" 
                            name='old_password'
                            onBlur={handleOldPassBlur}
                            onFocus={() => {
                                setIsOldPass(true)
                            }}/>
                            <i className={ clsx(style.hiddenOldPass, "ti-eye", ) } 
                                onClick={handleOldPassHide}
                            ></i>

                            <div className= {style.errContainer}>
                                <p className= {clsx(style.oldPassErrMes, {[style.errMessage] : isOldPass} )}>Invalid Old Password</p>
                            </div>
                        </section>

                        <section className={style.newPassInputContainer}>
                            <label htmlFor= {style.newPassInput}>New Password</label>
                            <input className={clsx(style.newPassInput, {[style.invalidBorder] : !isNewPass}) } 
                            type="password" placeholder="Enter your new password" 
                            name='new_password'
                            onBlur={handleNewPassBlur}
                            onFocus={() => {
                                setIsNewPass(true)
                            }}
                            onChange={handleChange}/>
                            <i className={ clsx(style.hiddenNewPass, "ti-eye", ) } 
                                onClick={handleNewPassHide}
                            ></i>

                            <div className= {style.errContainer}>
                                <p className= {clsx(style.newPassErrMes, {[style.errMessage] : isNewPass} )}>Invalid New Password</p>
                            </div>
                        </section>

                    </section>
                    
                </div>

                <div className = {style.matchesContainer}>
                {
                    transactions.map((match, index) => {
                        return (
                            <div key={index} className= {style.matchContainer}>
                                <img alt="" className= {style.nation1} src= {images[(match.team_A.includes(' ')? (match.team_A.replace(' ', '_')) : match.team_A)]}/>
                                <section className= {style.matchInfo}>
                                    <h2 className= {style.matchName}>Match: {match.team_A} VS {match.team_B}</h2>
                                    <h3 className= {style.matchTime}>Time: {match.mTime}</h3>
                                    <h3 className= {style.matchDate}>Date: {match.mDate}</h3>
                                    <h3 className= {style.matchStadium}>Stadium: {match.stadium}</h3>
                                    <h3 className= {style.matchStand}>Stand: {match.stand_name}</h3>
                                    <h3 className= {style.transactionQuantities}>Quantities: {match.quantity_of_tickets}</h3>
                                </section>
                                <img src= {images[match.team_B.includes(' ')? (match.team_B.replace(' ', '_')) : match.team_B]} alt="" className= {style.nation2} />
                            </div>
                        )
                    })
                }
                </div>
            </div>

            <Footer />
        </>

    )
}

export default Profiles;