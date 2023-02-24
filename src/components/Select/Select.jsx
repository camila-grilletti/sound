import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';


// It is displayed on each of the products in the shopping cart. Allows you to choose the desired quantity of a product

const Select = ( {id, options, stock} ) => {

    const { productCart, setProductCart } = useContext(CartContext);

    // Generates an array of the stock numbers, used later to display a list of options (numbers).
    let quantityNum = [];
    for (let i = 1; i <= stock; i++) {
        quantityNum.push(i);
    }

    // In short, it changes the set amount of a product in storage
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