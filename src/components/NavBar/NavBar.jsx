import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


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
                        <Link to={'/category/speakers'}><li>Speakers</li></Link>
                        <Link to={'/category/headphones'}><li>Headphones</li></Link>
                        <Link to={'/category/soundbars'}><li>Soundbars</li></Link>
                    </ul>
                    <CartWidget/>
                </nav>
            </div>
        </header>
    )
    
};


export default Navbar;