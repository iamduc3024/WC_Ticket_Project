import { Fragment } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

import { DefaultLayout } from './components/Layouts';
import HomePage from './pages/Home';
import OrderPage from './pages/Order';
import LoginPage from './pages/Login';
import ProfilesPage from './pages/Profiles';
import RegisterPage from './pages/Register';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element = {<HomePage />}/>
                <Route path='/order' element = {<OrderPage />}/>
                <Route path='/login' element = {<LoginPage />}/>
                <Route path='/profiles' element = {<ProfilesPage />}/>
                <Route path='/login' element = {<LoginPage />}/>
                <Route path='/register' element = {<RegisterPage />}/>
            </Routes>
        </div>
    );
}

export default App;
