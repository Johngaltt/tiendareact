import ItemDetail from './itemDetail';


import React, {useState,useEffect} from 'react';

const ItemDetailContainer = () => {
    const[productos,setProductos]=useState()
    useEffect(()=>{

    setTimeout(()=>{fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055")
    .then(response=>response.json())
    .then(data=>setProductos(data.results)); },2000)},[]);

    return (
    <div class="p-3 mb-2 bg-dark text-white">

        {productos &&  productos.map(item=>
        <ItemDetail key={item.id} jsonpack={item} />)}
    </div>
   )
    }

export default ItemDetailContainer;