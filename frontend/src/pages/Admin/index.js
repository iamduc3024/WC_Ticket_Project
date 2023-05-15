import { useContext, useState } from 'react';
import Header from '../../components/Layouts/component/Header';
import Slider from '../../components/Layouts/component/SlideBar';
import style from './Admin.module.scss';
import axios from 'axios';
import clsx from 'clsx';
import Footer from 'src/components/Layouts/component/Footer';
import { LoginContext } from 'src/App';
import Helmet from 'react-helmet';

function Admin() {
    const [customers, setCustomers] = useState([]); // Dùng để lấy ra danh sách người dùng
    const [matches, setMatches] = useState([]); // Dùng để lấy ra danh sách các trận đấu
    const [state, setState] = useState(''); //State là customers hay matches để hiển thị 1 trong 2 thông tin

    const {isLogin} = useContext(LoginContext)

    // xử lý lấy thông tin người dùng
    // Đầu tiên call API lấy thông tin người dùng trong database sau đó lưu vào mảng customers ở trên
    const handleGetCustomers = async (e) => {
        if(isLogin)
        try {
            await axios
                .get('http://localhost:8080/customer/show')
                .then((response) => {
                    setCustomers(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };

    // xử lý lấy thông tin trận đấu
    // Đầu tiên call API lấy thông tin trận đấu trong database sau đó lưu vào mảng matches ở trên
    const handleGetMatches = async (e) => {
        if(isLogin)
        try {
            await axios
                .get('http://localhost:8080/match/show')
                .then((response) => {
                    setMatches(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteCustomer = async (customerId) => {
        if(isLogin)
        try {
            await axios.delete(`http://localhost:8080/customer/deleteCustomer/${customerId}`)
            .then((response) => {
                handleGetCustomers();
            })
            .catch((err) => {
                console.log(err);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteMatch = async (matchId) => {
        if(isLogin)
        try {
            await axios.delete(`http://localhost:8080/match/deleteMatch/${matchId}`)
            .then((response) => {
                handleGetMatches();
            })
            .catch((err) => {
                console.log(err);
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Helmet>
                <title>WC_Ticket</title>
            </Helmet>
            <Header isAdminLogin={true} />
            <Slider />

            <div className={style.container}>
                <div className={style.contentContainer}>
                    <section className={style.Btns}>
                        <div
                            className={clsx(style.customerBtn, { [style.activeBtn]: state === 'customers' })}
                            onClick={() => {
                                handleGetCustomers();
                                setState('customers');
                            }}
                        >
                            Customers
                        </div>

                        <div
                            className={clsx(style.matchesBtn, { [style.activeBtn]: state === 'matches' })}
                            onClick={() => {
                                handleGetMatches();
                                setState('matches');
                            }}
                        >
                            Matches
                        </div>
                    </section>

                    <section className={style.customerList}>
                        <h1 className={clsx(style.customersListH1, { [style.invalid]: !(state === 'customers') })}>
                            Customers List
                        </h1>
                        <h1 className={clsx(style.matchesListH1, { [style.invalid]: !(state === 'matches') })}>
                            Matches List
                        </h1>

                        {customers.map((customer, index) => {
                            return (
                                <section
                                    key={index}
                                    className={clsx(style.customerInfoContainer, {
                                        [style.invalid]: !(state === 'customers'),
                                    })}
                                >
                                    <section className={style.customerInfo}>
                                        <p>Phone Number: {customer.phone}</p>
                                        <p>Name: {customer.name}</p>
                                    </section>

                                    <div
                                        className={clsx(style.deleteIcon, 'ti-trash')}
                                        onClick={() => {
                                            handleDeleteCustomer(customer.customer_id);
                                        }}
                                    ></div>
                                </section>
                            );
                        })}

                        {matches.map((match, index) => {
                            return (
                                <section
                                    key={index}
                                    className={clsx(style.matchInfoContainer, {
                                        [style.invalid]: !(state === 'matches'),
                                    })}
                                >
                                    <section className={style.matchInfo}>
                                        <p>Group {match.group_name}</p>
                                        <p>
                                            {match.team_A} vs {match.team_B}
                                        </p>
                                        <p>
                                            {match.time} {match.date} at {match.stadium} Stadium
                                        </p>
                                    </section>

                                    <div className={clsx(style.deleteIcon, 'ti-trash')}
                                    onClick={() => {
                                        handleDeleteMatch(match.match_id);
                                    }}></div>
                                </section>
                            );
                        })}
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Admin;
