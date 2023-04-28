import Header from "src/components/Layouts/component/Header";
import Filter from "src/components/Layouts/component/Filter";
import { Fragment } from "react";
import stationSimulator from '../../assets/images/stationSimulator.png'
import style from './Order.module.scss'

function Order() {
    return (

        <Fragment>
            <Header />
            <img className= {style.stationSimulatorImg} src={stationSimulator} alt=""></img>
            <Filter />
        </Fragment>
    );
}

export default Order;