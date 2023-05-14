import { Fragment, createContext, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

import HomePage from './pages/Home';
import OrderPage from './pages/Order';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProfilesPage from './pages/Profiles';
import PaymentPage from './pages/Payment';
import FollowingPage from './pages/Following';
import AdminPage from './pages/Admin'
import Filter from './components/Layouts/component/Filter';
import themifiIcon from './assets/icons/themify-icons/themify-icons.css'

// Tạo Context để truyền dữ liệu xuống dưới
export const LoginContext = createContext()

function App() {

    // Khai báo các thông tin chung cần dùng của cả trang web
    const [isLogin, setIsLogin] = useState(false) //Trạng thái đăng nhập

    // Lưu trữ thông tin người đăng nhập
    let userInfo = {
        uId : "",
        uName : "",
        uPhone : "",
        uPassword : ""
    }

    // Lưu trữ thông tin trận đấu người dùng vừa bấm vào
    let currMatchInfo = {
        mId : "",
        mTeamA : "",
        mTeamB : "",
        mTime : "",
        mDate : "",
        mStadium : "",
        mStandACapacity : ""
    }

    // Lưu trữ id các trận đấu được lọc
    let matchesFilter = []
    
    return (
        // Provider để truyền các value xuống các Element con để chúng nhận những thông tin chung
        <LoginContext.Provider value = {{isLogin , setIsLogin, userInfo, currMatchInfo, matchesFilter}}>
            <div className="App">
                <Routes>
                    <Route path='/' element = {<HomePage />}/>
                    <Route path='/home' element = {<HomePage />}/>
                    <Route path='/order' element = {<OrderPage />}/>
                    <Route path='/login' element = {<LoginPage />}/>
                    <Route path='/register' element = {<RegisterPage />}/>
                    <Route path='/profiles' element = {<ProfilesPage />}/>
                    <Route path='/admin' element = {<AdminPage />}/>
                    <Route path='/payment' element = {<PaymentPage />}/>
                    <Route path='/following' element = {<FollowingPage />}/>
                    <Route path='/filter' element = {<Filter />}/>
                </Routes>
            </div>
        </LoginContext.Provider>

    );
}

export default App;
