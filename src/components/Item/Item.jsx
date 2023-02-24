import './Item.css'


// Displays basic product information when viewed on a grid

const Item = ({ title, description, price, pictureUrl }) => {
    
    return (
        <div className="item">
            <img src={`${ pictureUrl }`} alt={ title } title={ title }/>
            <div className="item__details">
                <h4 className='dots'>{ title }</h4>
                <p className='dots'>{ description }</p>
                <span>${ new Intl.NumberFormat('de-DE').format(price) }</span>
            </div>
        </div>
    )

}


export default Item;