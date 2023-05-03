//import Header from '.../components/Layouts/component/Header'
import Header from 'src/components/Layouts/component/Header';
import SlideBar from 'src/components/Layouts/component/SlideBar'
import { Fragment, useContext, useEffect, useState } from 'react';
import Footer from 'src/components/Layouts/component/Footer';
import Filter from 'src/components/Layouts/component/Filter';
import axios from 'axios';
import style from './Home.module.scss'
import {LoginContext} from '../../App'
import { Link } from 'react-router-dom';
import images from 'src/assets/images/nations_png/nation_image';

function Home() {

    // Nhận những thông tin chung của cả web
    // currMatchInfo dùng để lưu thông tin trận đấu để sau đó đọc được ở Order Page
    // isLogin dùng để lưu trạng thái xem đã đăng nhập hay chưa
    // matchesFilter lưu trữ mảng các id trận đấu được lọc
    const {currMatchInfo, isLogin, matchesFilter} = useContext(LoginContext)

    const [change] = useState(true) // Lưu trạng thái thay đổi của page

    const [matches, setMatches] = useState([]); // Lưu thông tin toàn bộ các trận đấu
    

    // Lấy thông tin của tất cả các trận đấu được lưu trong database sau đó lưu vào trong mảng matches
    const getMatchesInfo = async (e) => {
        try {
            await axios.get("http://localhost:8080/match/show")
            .then((response) => {
                
                setMatches(response.data)
            })
            .catch((err) => {
                console.log(err);
            });
        }
        catch(err) {
            console.log(err.respone.data);
        }
    }

    // Gọi lại hàm getMatchesInfo khi change thay đổi
    // Nhưng ơ đây change không đổi nên hàm chỉ được gọi khi bắt đầu chạy trang Home lần đầu tiên
    useEffect(() => {
        getMatchesInfo();
    },[change])

    console.log("Filter " + matchesFilter);

    return(
        <Fragment>
            <Header />
            <div className='space'></div>

            <SlideBar />
            <section className= {style.filterAndMatches}>
                <div className= {style.filterContainer}>
                    <Filter />
                </div>

                <section className= {style.matchesContainer}>
                    {
                        matches.map((match, index) => {
                            if (matchesFilter.length === 0 || matchesFilter.includes(match.match_id)) {

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
                                );
                            }
                            //else return (<></>)
                        })
                    }
                </section>

            </section>

            <Footer />
        </Fragment>

        
    ) ;
}

export default Home;