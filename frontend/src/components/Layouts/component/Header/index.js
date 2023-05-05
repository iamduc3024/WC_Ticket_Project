import { Fragment, useContext } from "react";
import style from './Header.module.scss'
import {Link} from 'react-router-dom'
import clsx from "clsx";
import WCLogo from '../../../../assets/logos/WCLogo.png'
import WCLogo1 from '../../../../assets/logos/WCLogo2.png'
import $ from "jquery"

import { LoginContext } from "src/App"; 

//isAdminLogin để kiểm tra nếu đã đăng nhập vào bằng quyền admin chưa
function Header({isAdminLogin = false}) {
    //isLogin dùng để kiểm tra xem người dùng đã đăng nhập được vào chưa
    const {isLogin} = useContext(LoginContext)
    return(
        <Fragment>
        <div className={style.headerContainer}>
            <Link to ="/" className={style.logo}
            onClick={() => {
                $("html, body").animate({ scrollTop: 1 }, "slow");
            }}>
                <img src= {WCLogo1} alt="" className={style.logo} />
            </Link>
            <div className={style.searchContainer}>
                <input className={style.searchBar} type="text" placeholder="Search..." />
                <label htmlFor={style.searchBar} className={clsx(style.searchIcon, 'ti-search')}></label>
            </div>
            
            <ul className= {clsx({[style.invalid] : (isLogin || isAdminLogin)})}>
                <Link to = "/login">
                    <li className={style.loginBtn}>
                        Login
                    </li>
                </Link>
                <Link to = "/register">
                    <li className={style.registerBtn}>Register</li> 
                </Link>
            </ul>

            <ul className= {clsx({[style.invalid] : !(isLogin || isAdminLogin)})}>
                <i className= {clsx(style.userIcon ,"ti-user")}
                onClick={() => {
                    let toggleUserIcon = document.querySelector('.' + style.ProfileOrLogOut)
                    if(toggleUserIcon) {
                        toggleUserIcon.classList.toggle(style.invalid)
                    }
                }}></i>
                <section className= {clsx(style.ProfileOrLogOut, style.invalid)}>
                    <Link to = "/profiles"
                    onClick={() => {
                        $("html, body").animate({ scrollTop: 1 }, "slow");
                    }}>
                        <li>Profiles</li>
                    </Link>
                    <li onClick={() => {
                        window.location.href = '/';
                    }}>Log out</li>
                </section>
            </ul>
            
        </div>
        </Fragment>
    ) ;
}

export default Header;