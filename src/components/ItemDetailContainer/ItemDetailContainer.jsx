import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { productsService } from "../../services/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        productsService.getOne(id).then(response => setProduct(response))
    }, [id]);

    return (
        <>
            { product.length !== 0 ? <ItemDetail product={product} /> : <Loader /> }
        </>
    )

}


export default ItemDetailContainer;