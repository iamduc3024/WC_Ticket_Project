import { Fragment, createContext, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

import { DefaultLayout } from './components/Layouts';
import HomePage from './pages/Home';
import OrderPage from './pages/Order';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProfilesPage from './pages/Profiles';
import PaymentPage from './pages/Payment';
import AdminPage from './pages/Admin'


export const LoginContext = createContext()

function App() {

    const [isLogin, setIsLogin] = useState(false)

    let userInfo = {
        uId : "",
        uName : "",
        uPhone : "",
        uPassword : ""
    }

    let matchInfo = {
        mId : "",
        mTeamA : "",
        mTeamB : "",
        mTime : "",
        mDate : "",
        mStadium : ""
    }
    
    return (
        <LoginContext.Provider value = {{isLogin , setIsLogin, userInfo}}>
            <div className="App">
                <Routes>
                    <Route path='/' element = {<HomePage />}/>
                    <Route path='/order' element = {<OrderPage />}/>
                    <Route path='/login' element = {<LoginPage />}/>
                    <Route path='/register' element = {<RegisterPage />}/>
                    <Route path='/profiles' element = {<ProfilesPage />}/>
                    <Route path='/admin' element = {<AdminPage />}/>
                    <Route path='/payment' element = {<PaymentPage />}/>
                    <Route path='/register' element = {<RegisterPage />}/>
                </Routes>

                
            </div>
        </LoginContext.Provider>

    );
}

export default App;
