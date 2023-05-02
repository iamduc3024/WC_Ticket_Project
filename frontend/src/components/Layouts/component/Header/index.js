import { Fragment, useContext } from "react";
import style from './Header.module.scss'
import {Link} from 'react-router-dom'
import clsx from "clsx";

import { LoginContext } from "src/App"; 

//isAdminLogin để kiểm tra nếu đã đăng nhập vào bằng quyền admin chưa
function Header({isAdminLogin = false}) {
    //isLogin dùng để kiểm tra xem người dùng đã đăng nhập được vào chưa
    const {isLogin} = useContext(LoginContext)
    return(
        <Fragment>
        <div className={style.headerContainer}>
            <Link to ="/" className={style.logo}>Logo</Link>
            <div className={style.searchContainer}>
                <input className={style.searchBar} type="text" placeholder="Search..." />
                <label htmlFor={style.searchBar} className={clsx(style.searchIcon, 'ti-search')}></label>
            </div>
            
            <i className={clsx(style.cartIcon, 'ti-shopping-cart')}></i>
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
            <Link to = "/profiles">
                <ul className= {clsx(style.userIcon ,"ti-user", {[style.invalid] : !(isLogin || isAdminLogin)})}></ul>
            </Link>
        </div>
        </Fragment>
    ) ;
}

export default Header;