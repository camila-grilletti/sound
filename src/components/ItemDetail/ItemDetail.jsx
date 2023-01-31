import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { Link } from "react-router-dom";



const ItemDetail = ({ product }) => {

    return (
        <div className="container">
            <div className="item-detail-container">
                <div className="ubication">
                    <Link to={'/'}><span>Home</span></Link>/ 
                    <Link to={`/category/${product.category}`}><span>{product.category}</span></Link>/ 
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
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <p className="stars-cant">(1499)</p>
                            </div>
                        </div>

                        <div className="price">
                            <h4>${new Intl.NumberFormat('de-DE').format(product.price)} or ${new Intl.NumberFormat('de-DE').format(product.price/6)}/month</h4>
                            <p>Suggested payments with 6 months special financing</p>
                        </div>

                        <div className="shop">
                            <ItemCount stock={product.stock} />

                            <div className="buy">
                                <Button type='' value='Buy Now' />
                            </div>
                        </div>

                        <div className="delivery-container">
                            <div className="delivery d-first">
                                <i class='bx bx-navigation' ></i>
                                <i class='bx bxs-navigation' ></i>
                                <div className="position">
                                    <h5>Free Delivery</h5>
                                    <p className="p-delivery"><u className="underline">Enter your Postal code for Delivery Availability</u></p>
                                </div>
                            </div>
                            <div className="delivery">
                                <i class='bx bx-package' ></i>
                                <i class='bx bxs-package' ></i>
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