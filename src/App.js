import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import {CartProvider} from './components/CartContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
<CartProvider>
<BrowserRouter>
<NavBar/>
    <Routes>
        <Route exact path="/" element={<ItemListContainer name="Escoger Producto a Comprar"/>}></Route>
                    <Route path="/categories/:categoryid" element={<ItemListContainer />}></Route>
                    <Route path="/categories" element={<ItemListContainer />}></Route>
                    <Route path="/item/:itemid" element={<ItemDetailContainer />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
    </Routes>
</BrowserRouter>
</CartProvider>
          );
}



export default App;
