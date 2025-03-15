
import NavTabs from './NavTabs';

export function Header(){

return (
    <header className="bg-dark border-bottom border-body">
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid bg-dark">
        <a className="navbar-brand" style={{color: 'white'}} href="#">Brett McBryde</a>
  <div className="collapse navbar-collapse" id="navbarNav">
        <NavTabs/>
        </div>
     </div>
    </nav>
    </header>
)
}

export default Header;