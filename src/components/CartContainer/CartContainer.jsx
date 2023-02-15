import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import './CartContainer.css'
import Cart from '../Cart/Cart'
import EmptyCart from '../EmptyCart/EmptyCart';


const CartContainer = () => {

    const { productCart, clearCart } = useContext(CartContext);
    const [ subtotal, setSubtotal ] = useState(0);

    const infoCart = () => {
        return productCart.length === 0 ? <EmptyCart /> : <Cart products={productCart} />
    }

    useEffect(() => {
        let num = 0;
        productCart.map((p) => {
            return (num = num + (p.price * p.quantity ))
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
                            <button className='button-cart'>Checkout</button>
                        </div>
                    </div>             
                </div>
            </div>
    )

}

export default CartContainer;