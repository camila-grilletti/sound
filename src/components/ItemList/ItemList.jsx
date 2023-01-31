import './ItemList.css'
import Item from '../Item/Item';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';


const ItemList = ({ products }) => {

    const { categoryId } = useParams();


    return (
        <>
            <div className="item-list">
                <h2>{ categoryId ? categoryId[0].toUpperCase() + categoryId.substring(1) : 'All our products' }</h2>
                <div className="items">
                    {
                        products.map(product => {
                            return (
                                <Link to={`/item/${product.id}`}>
                                    <Item key={product.id} title={product.title} description={product.description} price={product.price} pictureUrl={product.pictureUrl} />
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