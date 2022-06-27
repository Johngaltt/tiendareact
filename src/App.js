import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (

<BrowserRouter>
<NavBar/>
    <Routes>
        <Route exact path="/" element={<ItemListContainer name="Escoger Producto a Comprar"/>}></Route>
                    <Route path="/categories/:categoryid" element={<ItemListContainer />}></Route>
                    <Route path="/categories" element={<ItemListContainer />}></Route>
                    <Route path="/item/:itemid" element={<ItemDetailContainer />}></Route>
    </Routes>
</BrowserRouter>
          );
}



export default App;
