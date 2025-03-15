
import NavTabs from './NavTabs';

export function Header(){

return (
    <header className="bg-dark border-bottom border-body">
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid bg-dark">
        <a className="navbar-brand" style={{color: 'white'}} href="#"> <h1>Brett McBryde</h1> <span><em>an aspiring Full-Stack Engineer</em></span> </a>
  <div className="collapse navbar-collapse" id="navbarNav">
        <NavTabs/>
        </div>
     </div>
    </nav>
    </header>
)
}

export default Header;