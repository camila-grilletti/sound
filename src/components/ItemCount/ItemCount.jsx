import './ItemCount.css';
import '../Button/Button.css'
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';


const ItemCount = ({stock, addCart}) => {

    const { addQuantity } = useContext(CartContext);
    const [ count, setCount ] = useState(1);

    const onAdd = (plus) => {
        if (plus) {
            count === 1 ? setCount(count) : setCount(count - 1);
        } else {
            setCount(count + 1)
        };
    }

    useEffect(() => {
        addQuantity(count);
    })

    return (
        <>
            <div className="item-count-container">
                <div className="item-count">
                    <div className="button__holder">
                        <button className="plusminus minus" onClick={() => {if (stock > 0 && stock >= count && count > 0 ) {onAdd(true)} }}>
                            <i className="fa-solid fa-minus"></i>
                        </button>
                    </div>

                    <input className='num' type="number" placeholder='0' min='1' max="10" value={count} onChange={e => setCount(e.target.value)}/>

                    <div className="button__holder">
                        <button className="plusminus plus" onClick={() => {if (stock > 0 && stock > count ) {onAdd(false)} }}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button className='button' onClick={addCart}>Add to cart</button>
            </div>
        </>
    )

}


export default ItemCount;