import style from './Payment.module.scss'
import visaLogo from '../../assets/logos/visaLogo.png'
import momoLogo from '../../assets/logos/momoLogo.png'
import clsx from 'clsx'
import { useState } from 'react'

function Payment() {

    let nameCardInput = document.querySelector('.' + style.nameCardInp)
    let cardNumberInput = document.querySelector('.' + style.cardNumberInp)
    let exDateInput = document.querySelector('.' + style.exDateInp)
    let momoNumberInput = document.querySelector('.' + style.momoNumberInp)


    const [isMomo, setIsMomo] = useState(true)
    const [isNameCard, setIsNameCard] = useState(true)
    const [isCardNumber, setIsCardNumber]= useState(true)
    const [isValidDate, setIsValidDate]= useState(true)
    const [isMomoValid, setIsMomoValid]= useState(true)

    
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
        //console.log(cardNumberInput);
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
            //console.log('.' + style.exDateInp);
            exDateInput = document.querySelector('.' + style.exDateInp)
            console.log(exDateInput);
            //handleExpireDateBlur()
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

                        <input className= {clsx(style.cardNumberInp, {[style.invalidInput] : !isCardNumber})} 
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
                        <button className= {style.backBtn}>Back</button>
                        <button className= {style.cfBtn}>Confirm Payment</button>
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