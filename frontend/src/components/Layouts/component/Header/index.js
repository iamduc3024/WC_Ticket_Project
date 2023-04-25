import { Fragment } from "react";
import style from './Header.module.scss'
import {Link} from 'react-router-dom'
import themifiIcon from 'src/assets/icons/themify-icons/themify-icons.css'
import clsx from "clsx";

function Header() {
    return(
        <Fragment>
        <div className={style.headerContainer}>
            <Link to ="/" className={style.logo}>Logo</Link>
            <div className={style.searchContainer}>
                <input className={style.searchBar} type="text" placeholder="Search..." />
                <label htmlFor={style.searchBar} className={clsx(style.searchIcon, 'ti-search')}></label>
            </div>
            
            <i className={clsx(style.cartIcon, 'ti-shopping-cart')}></i>
            <ul>
            <Link to = "/login">
                <li className={style.loginBtn}>
                    Login
                </li>
            </Link>
            <Link to = "/register">
                <li className={style.registerBtn}>Register</li> 
            </Link>
            </ul>
        </div>
        </Fragment>
    ) ;
}

export default Header;