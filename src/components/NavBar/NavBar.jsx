import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {

    return (
        <header>
            <nav>
                <div className="decoration">
                    <h1 className='brand'>Sound</h1>
                    <div></div>
                </div>
                <ul className='categories'>
                    <li><a href="#speakers">Speakers</a></li>
                    <li><a href="#headphones">Headphones</a></li>
                    <li><a href="#soundbars">Soundbars</a></li>
                </ul>
                <CartWidget/>
            </nav>
        </header>
    )
    
};


export default Navbar;