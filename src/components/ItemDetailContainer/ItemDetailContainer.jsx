import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { productsService } from "../../services/products";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        productsService.getOne(id).then(response => setProduct(response))
    }, []);

    return (
        <>
            <ItemDetail product={product} />
        </>
    )

}


export default ItemDetailContainer;