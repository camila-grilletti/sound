import './EmptyCart.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const EmptyCart = () => {

    return (
        <>
            <div className="empty-cart">
                <h3>Your Cart is Empty</h3>
                <h5>Looks like you haven't added anything to your cart yet</h5>
                <Link to={'/'}><Button nameButton={'Go Home'} /></Link>                
            </div>
        </>
    )

}


export default EmptyCart;