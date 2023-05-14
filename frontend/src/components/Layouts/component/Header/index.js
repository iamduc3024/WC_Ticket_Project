import { Fragment, useContext, useState } from "react";
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
    const [searchInp, setSearchInp] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    const [answer, setAnswer] = useState('Wait a minute')
    const {isLogin} = useContext(LoginContext)

    async function queryChatGPT(question) {
        const apiKey = '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'; 
        const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
      
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            prompt: question,
            max_tokens: 100,
            n: 1,
            stop: '\n',
          }),
        };
      
        try {
          const response = await fetch(apiUrl, requestOptions);
          const data = await response.json();
          return data.choices[0].text.trim();
        } catch (error) {
          console.error('Error:', error);
          return null;
        }
      }

    return(
        <Fragment>
            <div className= {clsx(style.chatGPTAns, {[style.invalid] : !isSearch})}>
                <div className= {style.chatGPTAnsContainer}>
                    <div className= {style.chatGPTQs}>Question: {searchInp}</div>
                    <div className= {style.chatGPTAnswer}>Answer: {answer}</div>
                    <div className={style.exitSearch}
                    onClick={()=> {
                        setIsSearch(false)
                        setAnswer('Wait a minute!')
                        setSearchInp('')
                    }}>Exit</div>
                </div>
            </div>
            <div className={style.headerContainer}>
                <Link to ="/" className={style.logo}
                onClick={() => {
                    $("html, body").animate({ scrollTop: 1 }, "slow");
                }}>
                    <img src= {WCLogo1} alt="" className={style.logo} />
                </Link>
                <div className={style.searchContainer}>
                    <input className={style.searchBar} type="text" placeholder="Search..." 
                    onChange={(e) => {
                        setSearchInp(e.target.value)
                    }}/>
                    <label htmlFor={style.searchBar} className={clsx(style.searchIcon, 'ti-search')}
                    onClick={() => {
                        setIsSearch(true)
                        queryChatGPT(searchInp)
                        .then((answer) => {
                        if (answer) {
                            console.log('Answer:', answer);
                            setAnswer(answer)
                        } else {
                            console.log('Unable to get an answer.');
                            setAnswer('Unable to get an answer.')
                        }
                        document.querySelector('.' + style.searchBar).value = ""
                        
                        })
                        .catch((error) => console.error('Error:', error));
                    }}></label>
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