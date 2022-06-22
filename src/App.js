import React from "react";
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer'

import ItemListContainer from './components/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";


 function App() {
  return <> <NavBar/> 
  <ItemDetailContainer/>

  </>
}

export default App;
