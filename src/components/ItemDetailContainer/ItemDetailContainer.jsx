import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { productsService } from "../../services/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";


// Contains the ItemDetail component and if it doesn't load the information, it displays a loader.

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const { id } = useParams();

    // Sets the product information depending on the ID
    useEffect(() => {
        productsService.getOne(id).then(data => setProduct(data));
    }, [id]);

    return (
        <>
            { product.length !== 0 ? <ItemDetail product={product} /> : <Loader /> }
        </>
    )

}


export default ItemDetailContainer;