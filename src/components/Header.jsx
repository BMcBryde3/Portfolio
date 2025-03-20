
import NavTabs from './NavTabs';

export function Header(){

return (
    <header className="">
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
            <div className="container-fluid bg-dark">
                <a className="navbar-brand" style={{color: 'white'}} href="#"> <h1>Brett McBryde</h1></a>
                <div className="collapse navbar-collapse justify-content-center" data-bs-theme="dark" id="navbarNav">
                    <NavTabs/>
                </div>
            </div>
        </nav>
    </header>
)
}

export default Header;