import React from "react";
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import  ListaProps  from './components/ItemListContainer';


 function App() {
  return <> <NavBar/> 
  <ListaProps text="Listado de Productos"/>
  </>
}

export default App;
