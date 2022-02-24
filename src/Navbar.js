import {Link} from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Coordinarts</h1>
            <div className="links">
                <Link to="/">Home </Link>
                <Link to="/create">Shop</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;