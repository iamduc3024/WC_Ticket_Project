import Header from '../component/Header';
import SideBar from './SlideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="context">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
