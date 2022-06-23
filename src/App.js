import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer';
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
<NavBar/>
<ItemListContainer/>
<ItemDetailContainer/>

      <header className="App-header">
      </header>
      </>
          );
}

export default App;
