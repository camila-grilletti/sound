import './ItemListContainer.css';


const ItemListContainer = ({ greeting }) => {

    greeting = 'Hello you!';

    return (
        <p>{ greeting }</p>
    )

};

export default ItemListContainer;