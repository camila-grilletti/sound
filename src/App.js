import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/category/:categoryId'} element={<ItemListContainer />} />
        <Route path={'/item/:id'} element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;