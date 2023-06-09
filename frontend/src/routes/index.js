import Home from '../pages/Home';
import Following from '../pages/Following';
import Profiles from '../pages/Profiles';

// Layout

import Register from '../pages/Register'

import Order from '../pages/Order';
import Login from '../pages/Login';
import Payment from 'src/pages/Payment';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profiles', component: Profiles },
    { path: '/register', component: Register},
    { path: '/order', component: Order },
    { path: '/payment', component: Payment },
    { path: '/login', component: Login },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
