import style from './Profiles.module.scss'
import images from 'src/assets/images/nations_png/nation_image'
import Header from 'src/components/Layouts/component/Header'
import SlideBar from 'src/components/Layouts/component/SlideBar'
import Footer from 'src/components/Layouts/component/Footer'
import { LoginContext } from 'src/App'
import { useContext } from 'react'


const matches = [{
    team_A: 'Los Angeles',
    team_B: 'San Francisco',
    time: '12:00 AM',
    date: '12/12/2020',
    stadium: 'Los Angeles'
},
{
    team_A: 'Los Angeles',
    team_B: 'San Francisco',
    time: '12:00 AM',
    date: '12/12/2020',
    stadium: 'Los Angeles'
}
]

function Profiles() {

    const {userInfo} = useContext(LoginContext) // Lưu thông tin người dùng
    
    return (
        <>
            <Header />
            <SlideBar />

            <div className = {style.container}>
                <div className = {style.userContainer}>
                    <div className = {style.userName}>Name: {userInfo.uName}</div>
                    <div className = {style.phoneNumber}>Phone Number: {userInfo.uPhone}</div>
                </div>

                <div className = {style.matchesContainer}>
                {
                    matches.map((match, index) => {
                        return (
                            <div key={index} className= {style.matchContainer}>
                                <img alt="" className= {style.nation1} src= {images[(match.team_A.includes(' ')? (match.team_A.replace(' ', '_')) : match.team_A)]}/>
                                <section className= {style.matchInfo}>
                                    <h2 className= {style.matchName}>Match: {match.team_A} VS {match.team_B}</h2>
                                    <h3 className= {style.matchTime}>Time: {match.time}</h3>
                                    <h3 className= {style.matchDate}>Date: {match.date}</h3>
                                    <h3 className= {style.matchStadium}>Stadium: {match.stadium}</h3>
                                </section>
                                <img src= {images[match.team_B.includes(' ')? (match.team_B.replace(' ', '_')) : match.team_B]} alt="" className= {style.nation2} />
                            </div>
                        )
                    })
                }
                </div>
            </div>

            <Footer />
        </>

    )
}

export default Profiles;