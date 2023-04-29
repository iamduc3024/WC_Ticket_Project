import Header from "src/components/Layouts/component/Header";
import Filter from "src/components/Layouts/component/Filter";
import { Fragment, useState } from "react";
import stationSimulator from '../../assets/images/stationSimulator.png'
import style from './Order.module.scss'
import clsx from "clsx";

function Order() {


    const [stand, setStand] = useState('')
    const [chooseFood, setChooseFood] = useState(false)
    const [chooseDrink, setChooseDrink] = useState(false)

    const handleStandClick = (e) => {
        console.log(e.target.innerText);
        if(stand === e.target.innerText) {
            setStand('')
        }
        else setStand(e.target.innerText)
    }

    const handleChooseFoodClick = () => {
        setChooseFood(!chooseFood)
    }

    const handleChooseDrinkClick = () => {
        setChooseDrink(!chooseDrink)
    }

    return (

        <Fragment>
            <Header />
            <img className= {style.stationSimulatorImg} src={stationSimulator} alt=""></img>
            <section className= {style.contentContainer}>
                <Filter />

                <div className= {style.orderContainer}>

                    <div className= {style.matchInfoContainer}>
                        <h1 className= {style.matchName}>Match name:</h1>
                        <h2 className= {style.time}>Time:</h2>
                        <h2 className= {style.stadium}>Stadium:</h2>
                    </div>

                    

                    <section className= {style.standChooseContainer}>
                        <h1>Select Stand</h1>

                        <div className= {style.allStandContainer}>

                            <div className= {clsx(style.standACointainer, {[style.activeStand] : (stand === 'Stand A')})}
                            onClick={handleStandClick}>
                                Stand A
                            </div>
                    
                            <div className= {clsx(style.standBCointainer, {[style.activeStand] : (stand === 'Stand B')})}
                            onClick={handleStandClick}>
                                Stand B
                            </div>
                    
                            <div className= {clsx(style.standCCointainer, {[style.activeStand] : (stand === 'Stand C')})}
                            onClick={handleStandClick}>
                                Stand C
                            </div>
                    
                            <div className= {clsx(style.standDCointainer, {[style.activeStand] : (stand === 'Stand D')})}
                            onClick={handleStandClick}>
                                Stand D
                            </div>
                        </div>
                
                    </section>

                    <section className= {style.quantityChoose}>
                        <label htmlFor="quantityInput">Quantity: </label>
                        <input className= {style.quantityInput} type="number" />
                    </section>
                
                    <section className= {style.drinkFoodContainer}>
                        <h1>Foods and Drinks</h1>
                        
                        <section className= {style.foodDrinkChoose}>

                            <div className= {clsx(style.foodContainer, {[style.foodActive] : chooseFood})}
                            onClick={handleChooseFoodClick}>
                                Foods
                            </div>
                    
                            <div className= {clsx(style.drinkContainer, {[style.drinkActive] : chooseDrink})}
                            onClick={handleChooseDrinkClick}>
                                Drinks
                            </div>
                        </section>

                
                    </section>

                    <section className= {style.paymentContainer}>
                        <h1>Price:</h1>
                        <button className= {style.paymentBtn}>Payment</button>
                    </section>
                </div>
            </section>
        </Fragment>
    );
}

export default Order;