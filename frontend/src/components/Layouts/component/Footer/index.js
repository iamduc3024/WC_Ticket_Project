import style from './Footer.module.scss'
import instagramLogo from '../../../../assets/logos/InstagramLogo.png'
import facebookLogo from '../../../../assets/logos/FacebookLogo.png'
import twitterLogo from '../../../../assets/logos/TwitterLogo.png'
import { Link } from 'react-router-dom';
import WCLogo1 from '../../../../assets/logos/WCLogo2.png'
import $ from "jquery"

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
                    <Link to ="#" className={style.logo}
                    onClick={() => {
                        $("html, body").animate({ scrollTop: 1 }, "slow");
                    }}>
                        <img src= {WCLogo1} alt="" className={style.logo} />    
                    </Link>
                    <div className={style.listContact}>
                        <Link to ="/" 
                        onClick={() => {
                            $("html, body").animate({ scrollTop: 1 }, "slow");
                        }}>
                            <img className={style.instagram} src= {instagramLogo} alt="" />
                        </Link>
                        <Link to ="/" 
                        onClick={() => {
                            $("html, body").animate({ scrollTop: 1 }, "slow");
                        }}>
                            <img className={style.facebook} src= {facebookLogo} alt="" /> 
                        </Link>
                        <Link to ="/" 
                        onClick={() => {
                            $("html, body").animate({ scrollTop: 1 }, "slow");
                        }}>
                            <img className={style.twitter} src= {twitterLogo} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;