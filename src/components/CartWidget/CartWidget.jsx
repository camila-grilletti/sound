import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import './CartWidget.css';


// Displays a cart icon with the number of products in it

const CartWidget = () => {

    const { productCart } = useContext(CartContext);
    const [ showCart, setShowCart ] = useState(false);

    // Depending on whether or not there are products in the cart, it shows the icon
    useEffect(() => {
        if (productCart.length !== 0) {
            setShowCart(true);
        } else {
            setShowCart(false);
        }
    }, [productCart])

    return (
        <div className={`cart${ showCart ? '' : '-invisible' }`}>
            <div className="notification">{ productCart.length }</div>
            <i className='bx bx-cart-alt' ></i>
            <i className='bx bxs-cart-alt' ></i>
        </div>
    )

};


export default CartWidget;