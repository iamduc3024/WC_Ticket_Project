import style from './Footer.module.scss'

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
                    <a href="#" className={style.logo}>Logo</a>
                    <div className={style.listContact}>
                        <a href="#" className={style.instagram}>
                            <img src="" alt="" />
                            in
                        </a>
                        <a href="#" className={style.facebook}>
                            fb
                        </a>
                        <a href="#" className={style.twitter}>
                            tw
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;