import { useState } from 'react';
import Header from '../../components/Layouts/component/Header'
import Slider from '../../components/Layouts/DefaultLayout/SlideBar'
import style from './Admin.module.scss'
import axios from 'axios';
import clsx from 'clsx';



function Admin() {

    const [customers, setCustomers] = useState([])
    const [matches, setMatches] = useState([])
    const [state, setState] = useState("")
    
    const handleGetCustomers = async (e) => {
        try {
            await axios.get("http://localhost:8080/customer/show")
            .then(response => {
                setCustomers(response.data);
            })
            .catch(err => {
                console.log(err)
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleGetMatches = async (e) => {
        try {
            await axios.get("http://localhost:8080/match/show")
            .then(response => {
                setMatches(response.data);
            })
            .catch(err => {
                console.log(err)
            })
        }
        catch (error) {
            console.log(error)
        }
    }
    

    return (
        <>
            <Header isAdminLogin = {true}/> 
            <Slider />

            <div className = {style.container}>
                <div className = {style.contentContainer}>
                    <section className = {style.Btns}>
                        <div className = {clsx(style.customerBtn, {[style.activeBtn] : (state === "customers")})}
                        onClick={() => {
                                handleGetCustomers();
                                setState("customers");
                            }
                        }>
                            Customers
                        </div>
            
                        <div className = {clsx(style.matchesBtn, {[style.activeBtn] : (state === "matches")})}
                        onClick={() => {
                                handleGetMatches();
                                setState("matches");
                            }
                        }>
                            Matches
                        </div>
                    </section>
            
                    <section className = {style.customerList}>
                        <h1 className= {clsx(style.customersListH1, {[style.invalid] : !(state === "customers")})}>Customers List</h1>
                        <h1 className= {clsx(style.matchesListH1, {[style.invalid] : !(state === "matches")})}>Matches List</h1>
            
                        {
                            customers.map((customer, index) => {
                                return (
                                    <section key={index} className = {clsx(style.customerInfoContainer, {[style.invalid] : !(state === "customers")})}>
                                        <section className={style.customerInfo}>
                                            <p>Phone Number:  {customer.phone}</p>
                                            <p>Name:  {customer.name}</p>
                                        </section>

                                        <div className = {clsx(style.deleteIcon, "ti-trash")}></div>
                                    </section>
                                )
                            })
                        }

                        {
                            matches.map((match, index) => {
                                return (
                                    
                                    <section key={index} className = {clsx(style.matchInfoContainer, {[style.invalid] : !(state === "matches")})}>
                                        
                                        <section className={style.matchInfo}>
                                            <p>Group {match.group_name}</p>
                                            <p>{match.team_A} vs {match.team_B}</p>
                                            <p>{match.time} {match.date} at {match.stadium} Stadium</p>
                                        </section>

                                        <div className = {clsx(style.deleteIcon, "ti-trash")}></div>
                                    </section>
                                )
                            })
                        }

                        
                    </section>
                </div>
            </div>
        </>
    )
}

export default Admin;