import { createContext, useState } from "react";


const CartContext = createContext({})

const CartProvider = ({children}) => {
    
    const [ countCart, setCountCart ] = useState(1);
    const [ category, setCategory ] = useState();
    const [ productCart, setProductCart ] = useState(sessionStorage.getItem('productsCart') || []);

    // Add the product to the shopping cart
    const addItemtoCart = ( item ) => {
        if (isInCart(item.id) === false) {
            setProductCart((prevState) => [...prevState, item]);
        }
    }

    // Remove product from cart
    const removeItem = (id) => {
        const newCart = productCart.filter(e => e['id'] !== id);
        setProductCart(newCart);
    }

    // Remove all products from cart
    const clearCart = () => {
        setProductCart([]);
    }

    // Returns true or false depending on whether or not the product is in the cart.
    const isInCart = ( id ) => {
        return productCart.find(e => e['id'] === id) ? true : false;
    }

    // Update the quantity you want to add of a product to your cart
    const addQuantity = ( q ) => {
        setCountCart(q);
    }

    // Depending on the ID, it displays the name of one category or another.
    const categoryName = ( categoryId ) => {
        if (categoryId === 1) {
            setCategory('Speakers');
        } else if (categoryId === 2) {
            setCategory('Headphones');
        } else if (categoryId === 3) {
            setCategory('Soundbars');
        } else {
            setCategory('Category unknown')
        }
    }

    return (
        <CartContext.Provider value={{ productCart, addItemtoCart, countCart, addQuantity, removeItem, clearCart, setProductCart, category, categoryName }}>
            {children}
        </CartContext.Provider>
    )

}


export { CartProvider, CartContext }