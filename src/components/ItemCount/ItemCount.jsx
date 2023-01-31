import './ItemCount.css';
import Button from '../Button/Button';
import { useState } from 'react';


const ItemCount = ({stock}) => {
    
    const [count, setCount] = useState(0);

    const onAdd = (plus) => {
        plus ? setCount(count - 1) : setCount(count + 1)
    }


    return (
        <>
            <div className="item-count-container">
                <div className="item-count">
                    <div class="button__holder">
                        <button class="plusminus minus" onClick={() => {if (stock > 0 && stock >= count && count > 0 ) {onAdd(true)} }}>
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>

                    <input className='num' type="number" placeholder='0' min='1' max="10" value={count}/>

                    <div class="button__holder">
                        <button class="plusminus plus" onClick={() => {if (stock > 0 && stock > count ) {onAdd(false)} }}>
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
                <Button type='' value='Add to cart'/>
            </div>
        </>
    )

}


export default ItemCount;