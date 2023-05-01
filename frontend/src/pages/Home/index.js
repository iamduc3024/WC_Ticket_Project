//import Header from '.../components/Layouts/component/Header'
import Header from 'src/components/Layouts/component/Header';
import Following from '../Following';
import SlideBar from 'src/components/Layouts/DefaultLayout/SideBar'
import { Fragment, useContext, useEffect, useState } from 'react';
import Footer from 'src/components/Layouts/component/Footer';
import Filter from 'src/components/Layouts/component/Filter';
import axios from 'axios';
import style from './Home.module.scss'
import anh from '../../assets/images/nations/VietNam-flag.jpg'
import {LoginContext} from '../../App'
import { Link } from 'react-router-dom';
// import Argentina_flag from '../../assets/images/nations_png/Argentina.png';

// const nation_flag = 'WC_Ticket_Project/frontend/src/assets/images/nations_png/';


function Home() {
    // console.log(`${nation_flag}Argentina.png`);
    // const country = 'Argentina';
    // console.log(`${nation_flag}${country}.png`);

    const {currMatchInfo, isLogin} = useContext(LoginContext)

    const [change, setChange] = useState(true)

    const [matches, setMatches] = useState([]);
    
    console.log("Login   " ,isLogin);

    const getMatchesInfo = async (e) => {
        try {
            await axios.get("http://localhost:8080/match/show")
            .then((response) => {
                
                setMatches(response.data)
                console.log(matches);
            })
            .catch((err) => {
                console.log(err);
            });
        }
        catch(err) {
            console.log(err.respone.data);
        }
    }

    useEffect(() => {
        getMatchesInfo();
    },[change])

    return(
        <Fragment>
            <Header />
            <div className='space'></div>

            <SlideBar />
            <section className= {style.filterAndMatches}
            onClick={ () => {
                console.log(matches);
            }}>
                <div className= {style.filterContainer}>
                    <Filter />
                </div>

                <section className= {style.matchesContainer}>
                    {
                        matches.map((match, index) => {
                            return (
                                <Link to = '/order' key={index} className= {style.matchContainer}
                                onClick={(e) => {
                                    if(!isLogin) {
                                        e.preventDefault();
                                        window.location.href = "/login";
                                    }
                                    currMatchInfo.mId = match.match_id
                                    currMatchInfo.mTeamA = match.team_A
                                    currMatchInfo.mTeamB = match.team_B
                                    currMatchInfo.mStadium = match.stadium
                                    currMatchInfo.mTime = match.time
                                    currMatchInfo.mDate = match.date
                                }}>
                                    <img src= {anh} alt="" className= {style.nation1} />
                                    <section className= {style.matchInfo}>
                                        <h2 className= {style.matchName}>Match: {match.team_A} VS {match.team_B}</h2>
                                        <h3 className= {style.matchTime}>Time: {match.time}</h3>
                                        <h3 className= {style.matchDate}>Date: {match.date}</h3>
                                        <h3 className= {style.matchStadium}>Stadium: {match.stadium}</h3>
                                    </section>
                                    <img src= {anh} alt="" className= {style.nation2} />
                                </Link>
                            )
                        })
                    }
                </section>

            </section>

            <Footer />
        </Fragment>

        
    ) ;
}

export default Home;