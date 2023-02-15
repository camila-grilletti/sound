import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { productsService } from '../../services/products';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();


    useEffect(() => {
        productsService.getAll(categoryId).then(response => setProducts(response));
    }, [categoryId]);
    

    return (
        <>
            <div className="container">
                <ItemList products={products} />
            </div>
        </>
    )

};

export default ItemListContainer;