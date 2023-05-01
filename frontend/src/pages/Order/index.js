import Header from "src/components/Layouts/component/Header";
import Filter from "src/components/Layouts/component/Filter";
import { Fragment, useContext, useEffect, useState } from "react";
import stationSimulator from '../../assets/images/stationSimulator.png'
import style from './Order.module.scss'
import clsx from "clsx";
import { LoginContext } from "src/App"; 
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

 const standPrice = {
    standA : '',
    standB : '',
    standC : '',
    standD : ''
}
const standId = {
    standA : '',
    standB : '',
    standC : '',
    standD : ''
}

export let crrPrice = 0;
export let crrId = 0;
export let quan = 0
export let amount = 0;


function Order() {

    const navigate = useNavigate();

    const {currMatchInfo, userInfo} = useContext(LoginContext)
    console.log("Match info", currMatchInfo);
    

    const [stand, setStand] = useState('Stand A')
    const [chooseFood, setChooseFood] = useState(false)
    const [chooseDrink, setChooseDrink] = useState(false)
    let [quantity, setQuantity] = useState(0)

    const getStandInfo = async (e) => {
        try {
            await axios.get("http://localhost:8080/stand/showStandByMatchId", {params : {
                mId : currMatchInfo.mId
            }})
            .then((response) => {
                standPrice.standA = response.data[0].price;
                standPrice.standB = response.data[1].price;
                standPrice.standC = response.data[2].price;
                standPrice.standD = response.data[3].price;
                standId.standA = response.data[0].stand_id
                standId.standB = response.data[1].stand_id
                standId.standC = response.data[2].stand_id
                standId.standD = response.data[3].stand_id
                crrPrice = standPrice.standA
                crrId = standId.standA
            })
            .catch((err) => {
                console.log(err);
            });
        }
        catch(err) {
            console.log(err.respone.data);
        }
    }



    const handleStandClick = (e) => {
        
        console.log(standPrice);
        if(stand === e.target.innerText) {
            
        }
        else setStand(e.target.innerText)
    }

    const handleChooseFoodClick = () => {
        setChooseFood(!chooseFood)
    }

    const handleChooseDrinkClick = () => {
        setChooseDrink(!chooseDrink)
    }

    

    useEffect(() => {
        getStandInfo();
        
        
    }, [1])

    



    return (

        <Fragment>
            <Header />
            <img className= {style.stationSimulatorImg} src={stationSimulator} alt=""></img>
            <section className= {style.contentContainer}>
                <Filter />

                <div className= {style.orderContainer}>

                    <div className= {style.matchInfoContainer}>
                        <h1 className= {style.matchName}>Match name: {currMatchInfo.mTeamA} VS {currMatchInfo.mTeamB}</h1>
                        <h2 className= {style.time}>Time: {currMatchInfo.mTime}</h2>
                        <h2 className= {style.time}>Date: {currMatchInfo.mDate}</h2>
                        <h2 className= {style.stadium}>Stadium: {currMatchInfo.mStadium}</h2>
                    </div>

                    

                    <section className= {style.standChooseContainer}>
                        <h1>Select Stand</h1>

                        <div className= {style.allStandContainer}>

                            <div className= {clsx(style.standACointainer, {[style.activeStand] : (stand === 'Stand A')})}
                            onClick={(e) => {
                                handleStandClick(e)
                                crrPrice = standPrice.standA
                                crrId = standId.standA
                                console.log(standPrice);
                            }}>
                                Stand A
                            </div>
                    
                            <div className= {clsx(style.standBCointainer, {[style.activeStand] : (stand === 'Stand B')})}
                            onClick={(e) => {
                                handleStandClick(e)
                                crrPrice = standPrice.standB
                                crrId = standId.standB
                            }}>
                                Stand B
                            </div>
                    
                            <div className= {clsx(style.standCCointainer, {[style.activeStand] : (stand === 'Stand C')})}
                            onClick={(e) => {
                                handleStandClick(e)
                                console.log(standPrice.standC);
                                crrPrice = standPrice.standC
                                crrId = standId.standC
                            }}>
                                Stand C
                            </div>
                    
                            <div className= {clsx(style.standDCointainer, {[style.activeStand] : (stand === 'Stand D')})}
                            onClick={(e) => {
                                handleStandClick(e)
                                crrPrice = standPrice.standD
                                crrId = standId.standD
                            }}>
                                Stand D
                            </div>
                        </div>
                
                    </section>

                    <section className= {style.quantityChoose}>
                        <h1 className= {style.quantitiesLabel}>
                            Quantities : {quantity}
                        </h1>
                        <section className= {style.handleBtnContainer}>

                            <button className= {clsx(style.increaseBtn, "ti-angle-up")}
                            onClick={() => {
                                setQuantity(quantity+1)
                                quan = quantity + 1
                                console.log(crrId, "   " , crrPrice);
                            }}></button> 
                            <button className= {clsx(style.decreaseBtn, "ti-angle-down")}
                            onClick={() => {
                                if(quantity > 1)
                                {
                                    setQuantity(quantity-1)
                                    quan = quantity - 1
                                }
                            }}></button>
                        </section>
                    </section>
                
                    <section className= {style.drinkFoodContainer}>
                        <h1>Foods and Drinks</h1>
                        
                        <section className= {style.foodDrinkChoose}>

                            <div className= {clsx(style.foodContainer, {[style.foodActive] : chooseFood})}
                            onClick={handleChooseFoodClick}>
                                Foods $5
                            </div>
                    
                            <div className= {clsx(style.drinkContainer, {[style.drinkActive] : chooseDrink})}
                            onClick={handleChooseDrinkClick}>
                                Drinks $5
                            </div>
                        </section>

                
                    </section>

                    
                    <section className= {clsx(style.paymentContainer)}>
                        <h1>Price: {crrPrice * quantity + chooseFood * 5 + chooseDrink * 5}</h1>
                        <Link to = '/payment' className= {style.paymentBtn}
                            onClick={(e) => {
                                amount = crrPrice * quantity + chooseFood * 5 + chooseDrink * 5
                                }}>
                            Payment
                        </Link>
                    </section>

                </div>
            </section>
        </Fragment>
    );
}

export default Order;