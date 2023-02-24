import './ItemList.css';
import Item from '../Item/Item';
import { useParams, Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from "../../context/CartContext/CartContext";


// Displays a list of products (grid)

const ItemList = ({ products }) => {

    const { categoryId } = useParams();
    const { category, categoryName } = useContext(CartContext);

    // Depending on the ID, set the category name
    useEffect(() => {
        categoryName(parseInt(categoryId));
    }, [categoryName, categoryId])

    return (
        <>
            <div className="item-list">
                <h2>{ categoryId ? category : 'All our products' }</h2>
                <div className="items">
                    {
                        products.map((product, index) => {
                            return (
                                <Link key={index} to={`/item/${product.id}`}>
                                    <Item title={product.title} description={product.description} price={product.price} pictureUrl={product.pictureUrl} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )

}

export default ItemList;