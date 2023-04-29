//import Header from '.../components/Layouts/component/Header'
import Header from 'src/components/Layouts/component/Header';
import Following from '../Following';
import SlideBar from 'src/components/Layouts/DefaultLayout/SideBar'
import { Fragment, useEffect, useState } from 'react';
import Footer from 'src/components/Layouts/component/Footer';
import Filter from 'src/components/Layouts/component/Filter';
import axios from 'axios';
import style from './Home.module.scss'
import anh from '../../assets/images/nations/VietNam-flag.jpg'



function Home() {

    const [change, setChange] = useState(true)

    const [matches, setMatches] = useState([]);
    
    
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
                                <section key={index} className= {style.matchContainer}>
                                    <img src= {anh} alt="" className= {style.nation1} />
                                    <section className= {style.matchInfo}>
                                        <h2 className= {style.matchName}>Match: {match.team_A} Vs {match.team_B}</h2>
                                        <h3 className= {style.matchTime}>Time: {match.time}</h3>
                                        <h3 className= {style.matchDate}>Date: {match.date}</h3>
                                        <h3 className= {style.matchStadium}>Stadium: {match.stadium}</h3>
                                    </section>
                                    <img src= {anh} alt="" className= {style.nation2} />
                                </section>
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