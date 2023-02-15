import { createContext, useState } from "react";


const CartContext = createContext({})

const CartProvider = ({children}) => {
    
    const [ countCart, setCountCart ] = useState(1);
    const [ productCart, setProductCart ] = useState(sessionStorage.getItem('productsCart') || []);

    const addItemtoCart = ( item ) => {
        if (isInCart(item.id) === false) {
            setProductCart((prevState) => [...prevState, item]);
        }
    }

    const removeItem = (id) => {
        const newCart = productCart.filter(e => e['id'] !== id);
        setProductCart(newCart);
    }

    const clearCart = () => {
        setProductCart([]);
    }

    const isInCart = ( id ) => {
        return productCart.find(e => e['id'] === id) ? true : false;
    }

    const addQuantity = ( q ) => {
        setCountCart(q)
    }

    return (
        <CartContext.Provider value={{ productCart, addItemtoCart, countCart, addQuantity, removeItem, clearCart, setProductCart }}>
            {children}
        </CartContext.Provider>
    )

}


export { CartProvider, CartContext }