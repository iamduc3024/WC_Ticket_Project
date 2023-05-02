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
import images from 'src/assets/images/nations_png/nation_image';
import { matchesId } from 'src/components/Layouts/component/Filter';


function Home() {

    const {currMatchInfo, isLogin} = useContext(LoginContext)

    const [change, setChange] = useState(true)

    const [matches, setMatches] = useState([]);
    
    console.log("Login   " ,isLogin);

    console.log(" saddddddddd       " + matchesId);

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

    if(matchesId.length !== 0) {
        setMatches(matchesId);
        console.log("Thay doi");
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
                            // if (matchesId.length === 0 || matchesId.includes(match.match_id))
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
                                    <img src= {images[(match.team_A.includes(' ')? (match.team_A.replace(' ', '_')) : match.team_A)]} alt="" className= {style.nation1} />
                                    <section className= {style.matchInfo}>
                                        <h2 className= {style.matchName}>Match: {match.team_A} VS {match.team_B}</h2>
                                        <h3 className= {style.matchTime}>Time: {match.time}</h3>
                                        <h3 className= {style.matchDate}>Date: {match.date}</h3>
                                        <h3 className= {style.matchStadium}>Stadium: {match.stadium}</h3>
                                    </section>
                                    <img src= {images[match.team_B.includes(' ')? (match.team_B.replace(' ', '_')) : match.team_B]} alt="" className= {style.nation2} />
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