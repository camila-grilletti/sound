import ItemList from '../ItemList/ItemList';
import { productsService } from '../../services/products';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';


// Contains the ItemList component, and if the information doesn't load, displays a loader.

const ItemListContainer = () => {

    const [ products, setProducts ] = useState([]);
    const { categoryId } = useParams();

    // Depending on the url parameters, it shows all products or only those of a certain category
    useEffect(() => {

        categoryId 
            ? productsService.getCategory(categoryId).then(data => setProducts(data))
            : productsService.getAll().then(data => setProducts(data));

    }, [categoryId]);
    

    return (
        <>
            <div className="container">
                {
                    products.length !== 0 ? <ItemList products={products} /> : <Loader />
                }
            </div>
        </>
    )

};

export default ItemListContainer;