import './ItemList.css'
import Item from '../Item/Item';
import { useParams, Link } from 'react-router-dom';


const ItemList = ({ products }) => {

    const { categoryId } = useParams();


    return (
        <>
            <div className="item-list">
                <h2>{ categoryId ? categoryId[0].toUpperCase() + categoryId.substring(1) : 'All our products' }</h2>
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