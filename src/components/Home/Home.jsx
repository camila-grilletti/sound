import Button from '../Button/Button';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './Home.css';



const Home = () => {

    return (
        <>
            <div className="img-start">
                <div className="container">
                    <div className="container-info">
                        <h3>The world’s best noise cancellation.</h3>
                        <h3>For your ears only.</h3>
                        <Button type='button' value='Shop' />
                    </div>
                </div>
                <img src="https://assets.bose.com/content/dam/Bose_DAM/Web/target/homepage/panels/qc_earbuds_ii/1920x640/general/black_RIGHT_v1.jpg/jcr:content/renditions/cq5dam.web.1920.1920.jpeg" alt="" className='img-big' />
            </div>
            <ItemListContainer />
        </>
    )

}


export default Home;