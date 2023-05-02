import style from './Filter.module.scss'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import React from 'react';

export let matchesId = [];

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
        date_to: '',
        price_from: '',
        price_to: '',
    });

    const handleChange = (e) => {
        setForm_input((prev) => {
                return { ...prev, [e.target.name]: e.target.value }
            }
        )
    }

    const handleFilter = async (e) => {
        try {
            console.log(form_input);
            await axios.get("http://localhost:8080/match/showFilter", {params : {
                team_name_A : form_input.team_name_A,
                team_name_B: form_input.team_name_A,
                stadium_name: form_input.stadium_name,
                date_from: form_input.date_from,
                date_to: form_input.date_to,
                price_from: form_input.price_from,
                price_to: form_input.price_to,
            }})
            .then(response => {

                console.log(response.data);
                for(let i=0; i<response.data.length; i++) {
                    matchesId[i] = response.data[i].match_id;
                }
                console.log(matchesId);
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
            <input className={style.standNameInput} type="text" name="team_name_A" placeholder="Team name..." 
            onChange={handleChange}/>
            <br />
        </section>

        <section className={style.stationInpContainer}>
            <label htmlFor="stationInput">Stadium name:</label>
            <br />
            <input className={style.stationInput} type="text" name="stadium_name" placeholder="Stadium name..." 
            onChange={handleChange}/>
            <br />
        </section>

        <section className={style.dateInpContainer}>
            <label htmlFor="dateFromInput">Date from:</label>
            <br />
            <input className={style.dateFromInput} type="date" name="date_from" 
            onChange={handleChange}/>
            <br />
            <label htmlFor="dateToInput">To:</label>
            <br />
            <input className={style.dateToInput} type="date" name='date_to' 
            onChange={handleChange}/>
            <br />
        </section>
        
        <section className={style.priceInpContainer}>
            <label htmlFor="priceFromInput">Price from:</label>
            <br />
            <input className={style.priceFromInput} type="text" name="price_from"
            onChange={handleChange}/>
            <br />
            <label htmlFor="priceToInput">To:</label>
            <br />
            <input className={style.priceToInput} type="text" name="price_to"
            onChange={handleChange}/>
            <br />
        </section>
        <button onClick={handleFilter} className={style.filterSubmitBtn}>Filter</button>
    </div>
    )
}

export default Filter;