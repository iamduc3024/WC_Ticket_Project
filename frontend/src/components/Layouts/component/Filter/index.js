import style from './Filter.module.scss'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import React from 'react';

function Filter(props) {
    let abc = document.querySelector('.' + style.dateFromInput)
    
    const [team_name_A, setTeam_name_A] = useState("")
    const [team_name_B, setTeam_name_B] = useState("")
    const [stadium_name, setStadium_name] = useState("")
    const [date_from, setDate_from] = useState("")
    const [date_to, setDate_to] = useState("")
    const [form_input, setForm_input] = useState({
        team_name_A: '',
        team_name_B: '',
        stadium_name: '',
        date_from: '',
        date_to: ''
    });

    const handleFilter = async (e) => {
        try {
            await axios.get("http://localhost:8080/match/showFilter", form_input)
            .then(response => {
                setTeam_name_A(response.data.team_name_A);
                setTeam_name_B(response.data.team_name_B);
                setStadium_name(response.data.stadium_name);
                setDate_from(response.data.date_from);
                setDate_to(response.data.date_to);
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
        <div className={style.filterContainer}>
        <label htmlFor="filterContainer">Filter</label>
        <br />
        <section className={style.standInpContainer}>
            <label htmlFor="standNameInput">Team name:</label>
            <br />
            <input className={style.standNameInput} type="text" placeholder="Stand name..." />
            <br />
        </section>

        <section className={style.stationInpContainer}>
            <label htmlFor="stationInput">Station name:</label>
            <br />
            <input className={style.stationInput} type="text" placeholder="Station name..." />
            <br />
        </section>

        <section className={style.dateInpContainer}>
            <label htmlFor="dateFromInput">Date from:</label>
            <br />
            <input className={style.dateFromInput} type="date"  />
            <br />
            <label htmlFor="dateToInput">To:</label>
            <br />
            <input className={style.dateToInput} type="date" />
            <br />
        </section>
        
        <section className={style.priceInpContainer}>
            <label htmlFor="priceFromInput">Price from:</label>
            <br />
            <input className={style.priceFromInput} type="text" />
            <br />
            <label htmlFor="priceToInput">To:</label>
            <br />
            <input className={style.priceToInput} type="text" />
            <br />
        </section>
        <button onClick={handleFilter} className={style.filterSubmitBtn}>Filter</button>
    </div>
    )
}

export default Filter;