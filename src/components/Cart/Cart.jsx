import './Cart.css';
import Select from '../Select/Select';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';


// It performs a mapping of the products to show each one with its features. It is contained in CartConteinter

const Cart = () => {

    const { removeItem, productCart } = useContext(CartContext);
    

    return (
        <>
        {
            productCart.map((p) => {
                return(
                    <div className="bag__item" key={p.id}>
                        <div className="bag__item--picture">
                            <img src={p.pictureUrl} alt={p.title} />
                        </div>
                        <div className="bag__item--info">
                            <div className='bag-space'>
                                <div>
                                    <h4>{p.title}</h4>
                                    <p>{p.description}</p>
                                    <div className='bag-quantity'>
                                        <p>Quantity</p>
                                        <Select id={p.id} options={p.quantity} stock={p.stock} />
                                    </div>
                                </div>
                                <u className='item-remove' onClick={() => {removeItem(p.id)}}>Remove</u>
                            </div>
                            <div>
                                <h5>${new Intl.NumberFormat('de-DE').format(p.price)}</h5>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
    )

}


export default Cart;
