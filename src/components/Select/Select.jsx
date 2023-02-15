import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import './Select.css';


const Select = ( {id, options, stock} ) => {

    const { productCart, setProductCart } = useContext(CartContext);

    let quantityNum = [];
    for (let i = 1; i <= stock; i++) {
        quantityNum.push(i);
    }

    const handleInput = (e) => {
        let found = productCart.find( p => p.id === id );
        found.quantity = parseInt(e.target.options[e.target.selectedIndex].text);
        setProductCart(productCart.map((p) => {
            if (p.id === id) {
                p = found;
            }
            return p;
        }));
    }

    return (
        <select name="quantity" id="" defaultValue={options} onChange={handleInput}>
            {
                quantityNum.map((num, index) => {
                    if (num === options) {
                        return (
                            <option value={options} key={index}>{num}</option>
                        )
                    } else {
                        return (
                            <option value={num} key={index}>{num}</option>
                        )
                    }
                })
            }
        </select>
    )

}


export default Select;