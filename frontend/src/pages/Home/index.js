//import Header from '.../components/Layouts/component/Header'
import Header from 'src/components/Layouts/component/Header';
import Following from '../Following';
import SlideBar from 'src/components/Layouts/DefaultLayout/SideBar'
import { Fragment } from 'react';

function Home() {
    return(
        <Fragment>
            
            <Header />
            <SlideBar />

        </Fragment>

        
    ) ;
}

export default Home;