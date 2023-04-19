import Header from '../component/Header';

function HeaderLayoutOnly({children}) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="context">{children}</div>
            </div>
        </div>
    );
}

export default HeaderLayoutOnly;
