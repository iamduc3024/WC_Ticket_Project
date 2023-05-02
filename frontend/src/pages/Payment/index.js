import style from './Payment.module.scss'
import visaLogo from '../../assets/logos/visaLogo.png'
import momoLogo from '../../assets/logos/momoLogo.png'
import clsx from 'clsx'
import { useContext, useState } from 'react'
import {  crrId, quan, amount } from '../Order'
import { Link } from 'react-router-dom'
import { LoginContext } from 'src/App'
import axios from 'axios'

function Payment() {
    const {userInfo} = useContext(LoginContext) // Lưu trữ thông tin người dùng
    let nameCardInput = document.querySelector('.' + style.nameCardInp) //Element: Ô điền tên chủ thẻ
    let cardNumberInput = document.querySelector('.' + style.cardNumberInpt) //Element: Ô điền số thẻ
    let exDateInput = document.querySelector('.' + style.exDateInp) //Element: Ô điền ngày 
    let momoNumberInput = document.querySelector('.' + style.momoNumberInp) //Element: Ô điền số MOMO


    const [isMomo, setIsMomo] = useState(true) // Kiểm tra xem có phải thẻ MOMO hay không

    //Kiểm tra xem có phải các thông tin hợp lệ không
    const [isNameCard, setIsNameCard] = useState(true) 
    const [isCardNumber, setIsCardNumber]= useState(true) 
    const [isValidDate, setIsValidDate]= useState(true)
    const [isMomoValid, setIsMomoValid]= useState(true)

    // Kiểm tra thông tin sau khi blur các input elements
    function handleNameCardBlur() {
        if(nameCardInput) {
            if(nameCardInput.value) {
                setIsNameCard(true)
            }
            else {
                setIsNameCard(false)
            }
        }
        else {
            nameCardInput = document.querySelector('.' + style.nameCardInp)
            handleNameCardBlur()
        }
    }

    function handleCardNumberBlur() {
        if(cardNumberInput) {
            if(cardNumberInput.value) {
                setIsCardNumber(true)
            }
            else {
                setIsCardNumber(false)
            }
        }
        else {
            cardNumberInput = document.querySelector('.' + style.cardNumberInput)
            handleCardNumberBlur()
        }
    }

    function handleDateBlur() {
        if(exDateInput) {
            let dateFormat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])[\/]\d{4}$/;
            if(exDateInput.value.match(dateFormat)) {
                setIsValidDate(true)
            }
            else {
                setIsValidDate(false)
            }
            
        }
        else {
            exDateInput = document.querySelector('.' + style.exDateInp)
        }
    }

    function handleMomoNumBlur() {
        if(momoNumberInput) {
            if(momoNumberInput.value) {
                setIsMomoValid(true) 
            }
            else {
                setIsMomoValid(false)
            }
        }
        else {
            momoNumberInput = document.querySelector('.' + style.momoNumberInp)
            handleMomoNumBlur()
        }
    }


    // Xử lý khi nhấn nút Thanh toán
    // Đầu tiên kiểm tra rồi đẩy lên database
    // Nếu thành công hiển thị cho người dùng biết
    const handlePaymentSubmit = () => {

        axios.post("http://localhost:8080/transaction/createNewTransaction", {
            customer_id : userInfo.uId,
            stand_id : crrId,
            quantity_of_tickets : quan,
            amount : amount,
            date_time : new Date()
        })
        alert("Payment Successful!!!")
    }

    return (
        <div className= {style.container}>
            <div className= {style.paymentCointainer}>
                <div className= {style.paymentContent}>
                
                    <section className= {style.paymentMethodContainer}>
                        <h1>Payment Method</h1>
                        <section className= {style.imageContainer}>
                            <img src={visaLogo} alt="" className= {style.visaLogo}
                            onClick={() => {
                                setIsMomo(false)
                                setIsCardNumber(true)
                                setIsNameCard(true)
                                setIsValidDate(true)
                            }}/>
                            <p>/</p>
                            <img src={momoLogo} alt="" className= {style.momoLogo}
                            onClick={() => {
                                setIsMomo(true)
                            }}/>
                        </section>
                    </section>

                    <section className= {clsx(style.paymentVisaDetails, {[style.invalidPay] : isMomo})}>
                        <h1>Payment Details</h1>
                        <input className= {clsx(style.nameCardInp, {[style.invalidInput] : !isNameCard})} 
                        type="text" placeholder="Enter Name on Card" 
                        onBlur={handleNameCardBlur}
                        onFocus={() => {
                            setIsNameCard(true)
                        }}/>

                        <input className= {clsx(style.cardNumberInpt, {[style.invalidInput] : !isCardNumber})} 
                        type="text" placeholder="Card Number"
                        onBlur={handleCardNumberBlur}
                        onFocus={() => {
                            setIsCardNumber(true)
                        }}/>

                        <input className= {clsx(style.exDateInp, {[style.invalidInput] : !isValidDate})} 
                        type="text" placeholder="Expire Date Ex:28/11/2003"
                        onBlur={handleDateBlur}
                        onFocus={() => {
                            setIsValidDate(true)
                        }}/>
                    </section>

                    <section className= {clsx(style.paymentMomoDetails, {[style.invalidPay] : !isMomo})}>
                        <h1>Payment Details</h1>
                        <input className= {clsx(style.momoNumberInp, {[style.invalidInput] : !isMomoValid}) } 
                        type="text" placeholder="Momo Number"
                        onBlur={handleMomoNumBlur}
                        onFocus={() => {
                            setIsMomoValid(true)
                        }}/>
                    </section>

                    <section className= {style.buttons}>
                        <Link to = '/order'>
                            <button className= {style.backBtn}>Back</button>
                        </Link>
                        <Link to = '/'>
                            <button className= {style.cfBtn}
                            onClick={handlePaymentSubmit}>Confirm Payment</button>
                        </Link>
                    </section>

                </div>

                <div className= {style.logo}>
                    <div className= {style.triangle}></div>
                </div>
            </div>
        </div>
    );
}

export default Payment;