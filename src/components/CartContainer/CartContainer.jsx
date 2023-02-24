import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import { productsService } from '../../services/products';
import './CartContainer.css'
import Cart from '../Cart/Cart'
import EmptyCart from '../EmptyCart/EmptyCart';
import Swal from 'sweetalert2';


// Contains everything related to the shopping cart: product list (cart), total, checkout, etc.

const CartContainer = () => {

    const { productCart, clearCart } = useContext(CartContext);
    const [ subtotal, setSubtotal ] = useState(0);
    const [ checkout, setCheckout ] = useState('Checkout');

    // A message will be displayed if the cart has no products in it
    const infoCart = () => {
        return productCart.length === 0 ? <EmptyCart /> : <Cart products={productCart} />
    }

    // Generates the SweetAlert to display the order ID
    const orderComplete = (orderId) => {
        Swal.fire({
            title: 'Order successfully completed!',
            text: `Your order ID is ${orderId}`,
            icon: 'success',
            confirmButtonColor: '#000',
            confirmButtonAriaLabel: '#fff',
            iconColor: '#00cd00',
        }).then(response => {
            if (response.isConfirmed) {
                setCheckout('Checkout');
                clearCart();
            }
        });
    }

    // Displays 'Loading...' until the order is uploaded to the collection.
    const handleOrder = () => {
        if (productCart.length !== 0) {
            setCheckout('Loading...');
            productsService.sendOrder(productCart, subtotal).then(({id}) => orderComplete(id));
        }
    }

    // Updates the cart total taking into account product prices and quantities
    useEffect(() => {
        let num = 0;
        productCart.map((p) => {
            return (num = num + (p.price * p.quantity ));
        })
        setSubtotal(num);
    }, [productCart])


    return (
        <div className="container">
            <div className="mycart">
                <h2>My Cart</h2>   
                <div className="mycart__columns">
                    <div className="bag">
                        <div className='title-bag'>
                            <h2>Bag</h2> 
                            <h5 onClick={clearCart}>Clean cart</h5>
                        </div>
                        {
                            infoCart()
                        }
                    </div>
                    <div className="summary">
                        <h2>Summary</h2>   
                        <div className="summary__info">
                            <div className="summary-prices">
                                <div className='summary-row'>
                                    <h5>Subtotal</h5>
                                    <h5>${
                                        productCart.length === 0 ? '----' : new Intl.NumberFormat('de-DE').format(subtotal)
                                    }</h5>
                                </div>
                                <div className='summary-row'>
                                    <h5>Estimated Shipping & Handling</h5>
                                    <h5>${
                                        productCart.length === 0 ? '----' : '2.500'
                                    }</h5>
                                </div>
                            </div>
                            <div className='summary-row borderb'>
                                <h5 className='summary-row-special'>Total</h5>
                                <h5 className='summary-row-special'>${
                                    productCart.length === 0 ? '----' : new Intl.NumberFormat('de-DE').format(subtotal + 2500)
                                }</h5>
                            </div>
                        </div>
                        <button className='button-cart' onClick={handleOrder}>{ checkout }</button>
                    </div>
                </div>             
            </div>
        </div>
    )

}

export default CartContainer;