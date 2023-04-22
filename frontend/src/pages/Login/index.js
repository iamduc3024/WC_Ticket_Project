import clsx from 'clsx';
import style from './Login.module.scss'

function Login() {
    return (
        <div className={style.container}>

        <div className={style.loginContainer}>
            <div className={style.loginContent}>
                <h1>Login</h1>

                <section className={style.userInputContainer}>
                    <label htmlFor="userInput" >Phone/Email</label>
                    <input className={style.userInput} type="text" placeholder="Enter your phone/email." />
                </section>

                <section className={style.passInputContainer}>
                    <label htmlFor="passInput">Password</label>
                    <input className={style.passInput} type="password" placeholder="Enter your password" />
                    <i className={ clsx(style.hiddenPass, "ti-eye") }></i>
                </section>

                <button className={style.submitSignInBtn}>Sign In</button>

                <p className={style.moveSignUp}>
                    Don't have account yet?
                    <a href="" > Sign Up</a>
                </p>
            </div>
            
            <div className={style.logo}>

        </div>


        </div>
    </div>
    );
}

export default Login;
