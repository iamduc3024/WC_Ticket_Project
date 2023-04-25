import clsx from 'clsx';
import style from './Register.module.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

function Register() {

    const [passHide, setPassHide] = useState(false)

    const [inputs, setInputs] = useState({
        name: "dat",
        phone: "22",
        password: "33",
    });

    const [err, setError] = useState(null);

    let passInp = document.querySelector('.' + style.passInput)

    useEffect(() => {
        passInp = document.querySelector('.' + style.passInput)
    }, [passHide])

    function handleHide() {

        console.log(passInp);

        setPassHide(!passHide);
        if (!passHide) {
            passInp.type = "text"
        }
        else {
            passInp.type = "password"
        }
    }

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(inputs);
            await axios.post("http://localhost:8080/customer/create", inputs);
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <div className={style.container}>

            <div className={style.loginContainer}>
                <div className={style.loginContent}>
                    <h1>Register</h1>

                    <form>
                        <input
                            required
                            type="text"
                            placeholder="name"
                            name="name"
                            onChange={handleChange}
                        />
                        <input
                            required
                            type="text"
                            placeholder="phone"
                            name="phone"
                            onChange={handleChange}
                        />
                        <input
                            required
                            type="password"
                            placeholder="password"
                            name="password"
                            onChange={handleChange}
                        />
                        <button onClick={handleSubmit}>Register</button>
                        {err && <p>{err}</p>}
                    </form>

                </div>

                <div className={style.logo}>

                </div>


            </div>
        </div>
    );
}

export default Register;
