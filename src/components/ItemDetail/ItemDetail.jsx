import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext";


// Detailed information of the clicked product

const ItemDetail = ({ product }) => {

    const [ add, setAdd ] = useState(false);
    const { addItemtoCart, countCart, category, categoryName } = useContext(CartContext);

    // Hides the ItemCount component if the 'Add to Cart' button is clicked.
    if (add) {
        document.getElementById('itemcount').classList.add('hide');
    }

    // Changes the name of the category depending on the category ID
    useEffect(() => {
        categoryName(product.categoryId);
    }, [categoryName, product.categoryId])

    // Add product to cart
    const addToCart = () => {
        setAdd(true);
        addItemtoCart({ id: product.id, title: product.title, price: product.price, pictureUrl: product.pictureUrl, description: product.description, quantity: countCart, stock: product.stock });
    }

    return (
        <div className="container">
            <div className="item-detail-container">
                <div className="ubication">
                    <Link to={'/'}><span>Home</span></Link>/ 
                    <Link to={`/category/${product.categoryId}`}><span>{category}</span></Link>/ 
                    <span>{product.title}</span>
                </div>
                <div className="item-detail">
                    <div className="item-detail__picture">
                        <img src={product.pictureUrl} alt={product.title} />
                    </div>

                    <div className="item-detail__info">
                        <div className="general">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <p className="stars-cant">(1499)</p>
                            </div>
                        </div>

                        <div className="price">
                            <h4>${new Intl.NumberFormat('de-DE').format(product.price)} or ${new Intl.NumberFormat('de-DE').format(product.price/6)}/month</h4>
                            <p>Suggested payments with 6 months special financing</p>
                        </div>

                        <div className="shop">
                            <div id="itemcount">
                                <ItemCount stock={product.stock} addCart={() => { addToCart() }} />
                            </div>

                            <div className="buy">
                                <Link to={'/cart'}>
                                    <Button type='' nameButton='Buy Now' onclick={() => {}} />
                                </Link>
                            </div>
                        </div>

                        <div className="delivery-container">
                            <div className="delivery d-first">
                                <i className='bx bx-navigation' ></i>
                                <i className='bx bxs-navigation' ></i>
                                <div className="position">
                                    <h5>Free Delivery</h5>
                                    <p className="p-delivery"><u className="underline">Enter your Postal code for Delivery Availability</u></p>
                                </div>
                            </div>
                            <div className="delivery">
                                <i className='bx bx-package' ></i>
                                <i className='bx bxs-package' ></i>
                                <div className="position">
                                    <h5>Return Delivery</h5>
                                    <p className="p-delivery">Free 30 days Delivery Returns. <u className="underline">Details</u></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default ItemDetail;