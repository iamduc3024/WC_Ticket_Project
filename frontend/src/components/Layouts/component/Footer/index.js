import style from './Footer.module.scss'
import instagramLogo from '../../../../assets/logos/InstagramLogo.png'
import facebookLogo from '../../../../assets/logos/FacebookLogo.png'
import twitterLogo from '../../../../assets/logos/TwitterLogo.jpg'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className={style.footerContainer}>
                <div className={style.contentContainer}>
                    <ul className={style.servicesColumn}>
                        Services
                        <br />
                        <br />
                        <li>Online 24/7</li>
                        <li>Buy quickly</li>
                        <li>Any Questions?</li>
                    </ul>
                    <ul className={style.shopColumn}>
                        Shop
                        <br />
                        <br />
                        <li>Foods</li>
                        <li>Drinks</li>
                        <li>Shirts</li>
                    </ul>
                    <ul className={style.membersColumn}>
                        Members
                        <br />
                        <br />
                        <li>Trần Anh Dũng</li>
                        <li>Nguyễn Cao Đức</li>
                        <li>Trương Quang Đạt</li>
                        <li>Đặng Tiến Dũng</li>
                    </ul>
                </div>
                <div className={style.contactContainer}>
                    <Link href="#" className={style.logo}>Logo</Link>
                    <div className={style.listContact}>
                        <Link href="#" >
                            <img className={style.instagram} src= {instagramLogo} alt="" />
                        </Link>
                        <Link href="#" >
                            <img className={style.facebook} src= {facebookLogo} alt="" /> 
                        </Link>
                        <Link href="#" >
                            <img className={style.twitter} src= {twitterLogo} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;