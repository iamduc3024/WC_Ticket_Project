import Header from "src/components/Layouts/component/Header";
import Filter from "src/components/Layouts/component/Filter";
import { Fragment, useContext, useEffect, useState } from "react";
import stationSimulator from '../../assets/images/stationSimulator.png'
import style from './Order.module.scss'
import clsx from "clsx";
import { LoginContext } from "src/App"; 
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// Lưu trữ thông tin các giá của các chỗ ngồi tương ứng với trận đấu đã chọn
 const standPrice = {
    standA : '',
    standB : '',
    standC : '',
    standD : ''
}

// Lưu trữ thông tin các id của chỗ ngồi của các sân
const standId = {
    standA : '',
    standB : '',
    standC : '',
    standD : ''
}

const capacity = {
    standA : '',
    standB : '',
    standC : '',
    standD : ''
}

export let crrPrice = 0; // Giá hiện tại của chỗ ngồi đang chọn
export let crrId = 0; // Id của chỗ ngồi đang chọn
export let quan = 0 // Số lượng chỗ ngồi đang chọn
export let amount = 0; // Tổng giá trị của bill


function Order() {

    // currMatchInfo để lưu trữ thông tin trận đấu đang chọn
    const {currMatchInfo} = useContext(LoginContext)

    const [crrCapacity, setCrrCapacity] = useState(currMatchInfo.capacity)
    const [stand, setStand] = useState('Stand A') // Lưu tên chỗ ngồi
    const [chooseFood, setChooseFood] = useState(false) // Có chọn mua thêm đồ ăn hay không
    const [chooseDrink, setChooseDrink] = useState(false) // Có chọn mua thêm nước hay không
    let [quantity, setQuantity] = useState(0)

    // Nhận thông tin chỗ ngồi bằng id trận đấu
    // Đầu tiên call API lấy thông tin tất cả chỗ ngồi của trận từ database
    // Sau đó lưu thông tin các chỗ ngồi
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
                
                capacity.standA = response.data[0].capacity
                capacity.standB = response.data[1].capacity
                capacity.standC = response.data[2].capacity
                capacity.standD = response.data[3].capacity

                setCrrCapacity(capacity.standA)
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


    //Xử lý khi chọn 1 chỗ ngồi
    const handleStandClick = (e) => {
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


    
    // Đọc thông tin các chỗ ngồi của trận đấu khi 1 thay đổi
    // Như vậy chỉ khi render lần đầu tiên thì mới gọi hàm
    useEffect(() => {
        getStandInfo();
        setCrrCapacity(currMatchInfo.mStandACapacity);
        setStand('Stand A')
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
                                if(quantity > capacity.standA) {
                                    setCrrCapacity(0)
                                    setQuantity(capacity.standA)
                                    e.target.click()
                                }
                                else {
                                    
                                    setCrrCapacity(capacity.standA - quantity)
                                    crrPrice = standPrice.standA
                                    crrId = standId.standA
                                }
                            }}>
                                Stand A
                            </div>
                    
                            <div className= {clsx(style.standBCointainer, {[style.activeStand] : (stand === 'Stand B')})}
                            onClick={(e) => {
                                handleStandClick(e)
                                if(quantity > capacity.standB) {
                                    setCrrCapacity(0)
                                    setQuantity(capacity.standB)
                                    e.target.click()
                                }
                                else {
                                    
                                    setCrrCapacity(capacity.standB - quantity)
                                    crrPrice = standPrice.standB
                                    crrId = standId.standB
                                }
                            }}>
                                Stand B
                            </div>
                    
                            <div className= {clsx(style.standCCointainer, {[style.activeStand] : (stand === 'Stand C')})}
                            onClick={(e) => {
                                handleStandClick(e)
                                if(quantity > capacity.standC) {
                                    setCrrCapacity(0)
                                    setQuantity(capacity.standC)
                                    e.target.click()
                                }
                                else {
                                    
                                    setCrrCapacity(capacity.standC - quantity)
                                    crrPrice = standPrice.standC
                                    crrId = standId.standC
                                }
                            }}>
                                Stand C
                            </div>
                            
                            <div className= {clsx(style.standDCointainer, {[style.activeStand] : (stand === 'Stand D')})}
                            onClick={(e) => {
                                handleStandClick(e)
                                if(quantity > capacity.standD) {
                                    setCrrCapacity(0)
                                    setQuantity(capacity.standD)
                                    e.target.click()
                                }
                                else {

                                    setCrrCapacity(capacity.standD - quantity)
                                    crrPrice = standPrice.standD
                                    crrId = standId.standD
                                }
                            }}>
                                Stand D
                            </div>
                        </div>

                        <h1>Capacity: {crrCapacity}</h1>
                
                    </section>

                    <section className= {style.quantityChoose}>
                        <h1 className= {style.quantitiesLabel}>
                            Quantities : {quantity}
                        </h1>
                        <section className= {style.handleBtnContainer}>

                            <button className= {clsx(style.increaseBtn, "ti-angle-up")}
                            onClick={() => {
                                if(crrCapacity > 0) {
                                    setCrrCapacity(crrCapacity - 1)
                                    setQuantity(quantity+1)
                                    quan = quantity + 1
                                }
                                
                            }}></button> 
                            <button className= {clsx(style.decreaseBtn, "ti-angle-down")}
                            onClick={() => {
                                if(quantity > 1)
                                {
                                    setCrrCapacity(crrCapacity + 1)
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