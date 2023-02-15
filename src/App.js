import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home';
import { CartProvider } from './context/CartContext/CartContext'
import CartContainer from './components/CartContainer/CartContainer';


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/category/:categoryId'} element={<ItemListContainer />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
          <Route path={'/cart'} element={<CartContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}


export default App;