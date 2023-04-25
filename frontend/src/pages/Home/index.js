//import Header from '.../components/Layouts/component/Header'
import Header from 'src/components/Layouts/component/Header';
import Following from '../Following';
import SlideBar from 'src/components/Layouts/DefaultLayout/SideBar'
import { Fragment } from 'react';
import Footer from 'src/components/Layouts/component/Footer';
import Filter from 'src/components/Layouts/component/Filter';

function Home() {
    return(
        <Fragment>
            <Header />
            <div className='space'></div>
            <SlideBar />
            <Filter />
            <Footer />
        </Fragment>

        
    ) ;
}

export default Home;