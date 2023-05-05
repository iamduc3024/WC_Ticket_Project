import style from './Filter.module.scss'
import { useContext, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { LoginContext } from 'src/App';
import { Link, useNavigate } from 'react-router-dom';


export const filterBtn = document.querySelector('.' + style.filterSubmitBtn) 


// Component Filter dùng trong các page như Home, Order
function Filter() {
    const navigate = useNavigate()
    let {matchesFilter} = useContext(LoginContext)
    
    const [form_input, setForm_input] = useState({
        team_name_A: '',
        team_name_B: '',
        stadium_name: '',
        date_from: '',
        date_to: '',
        price_from: '',
        price_to: '',
    });

    //xử lý khi nhập thay đổi ở các input như nation input hay date input ...
    const handleChange = (e) => {
        setForm_input((prev) => {
                return { ...prev, [e.target.name]: e.target.value }
            }
        )
    }

    //Xử lý khi nhấn nút Filter
    const handleFilter = async (e) => {
        try {
            //Nhận thông tin các trận đấu hợp lệ với Filter
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
                matchesFilter.splice(response.data.length, matchesFilter.length)
                for(let i=0; i<response.data.length; i++) {
                    matchesFilter[i] = response.data[i].match_id;
                }
                navigate('/')
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
        <label htmlFor= {style.filterContainer}>Filter</label>
        <br />
        <section className={style.standInpContainer}>
            <label htmlFor= {style.standNameInput}>Team name:</label>
            <br />
            <input className={style.standNameInput} type="text" name="team_name_A" placeholder="Team name..." 
            onChange={handleChange}
            onKeyDown={(e) => {
                if(e.key === 'Enter') {
                    handleFilter()
                    navigate('/home')
                }
                
            }}/>
            <br />
        </section>

        <section className={style.stationInpContainer}>
            <label htmlFor= {style.stationInput}>Stadium name:</label>
            <br />
            <input className={style.stationInput} type="text" name="stadium_name" placeholder="Stadium name..." 
            onChange={handleChange}
            onKeyDown={(e) => {
                if(e.key === 'Enter') {
                    handleFilter()
                    navigate('/home')
                }
                
            }}/>
            <br />
        </section>

        <section className={style.dateInpContainer}>
            <label htmlFor= {style.dateFromInput}>Date from:</label>
            <br />
            <input className={style.dateFromInput} type="date" name="date_from" 
            onChange={handleChange}
            onKeyDown={(e) => {
                if(e.key === 'Enter') {
                    handleFilter()
                    navigate('/home')
                }
                
            }}/>
            <br />
            <label htmlFor= {style.dateToInput}>To:</label>
            <br />
            <input className={style.dateToInput} type="date" name='date_to' 
            onChange={handleChange}
            onKeyDown={(e) => {
                if(e.key === 'Enter') {
                    handleFilter()
                    navigate('/home')
                }
                
            }}/>
            <br />
        </section>
        
        <section className={style.priceInpContainer}>
            <label htmlFor= {style.priceFromInput}>Price from:</label>
            <br />
            <input className={style.priceFromInput} type="text" name="price_from"
            onChange={handleChange}
            onKeyDown={(e) => {
                if(e.key === 'Enter') {
                    handleFilter()
                    navigate('/home')
                }
                
            }}/>
            <br />
            <label htmlFor= {style.priceToInput}>To:</label>
            <br />
            <input className={style.priceToInput} type="text" name="price_to"
            onChange={handleChange}
            onKeyDown={(e) => {
                if(e.key === 'Enter') {
                    handleFilter()
                    navigate('/home')
                }
                
            }}/>
            <br />
        </section>

        <Link to = '/home' onClick={handleFilter} className={style.filterSubmitBtn}>Filter</Link>
    </div>
    )
}

export default Filter;