import React from "react";
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemCount from "./components/ItemCount/ItemCount";


 function App() {
  return <> <NavBar/> 
  <ItemCount initial="0" min="0" max="10" />
  </>
}

export default App;
