import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


// Main Navbar

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="decoration">
                        <Link to={'/'}>
                            <h1 className='brand'>Sound</h1>
                        </Link>
                        <div></div>
                    </div>
                    <ul className='categories'>
                        <Link to={'/category/1'}><li>Speakers</li></Link>
                        <Link to={'/category/2'}><li>Headphones</li></Link>
                        <Link to={'/category/3'}><li>Soundbars</li></Link>
                    </ul>
                    <Link to={'/cart'}><CartWidget/></Link>
                </nav>
            </div>
        </header>
    )
    
};


export default Navbar;