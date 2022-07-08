
import {ItemDetail} from './ItemDetail';
import {useParams} from "react-router-dom";
import React, {useState,useEffect} from 'react';
import {db} from '../firebase';

const ItemDetailContainer = ({items}) => {
    const[item,setItem]=useState([])
    const[producto,setProducto]=useState([])
const {itemid}=useParams();


    useEffect(()=>{
        db();
        const itemCollection=db.collection("items");
        itemCollection.get().then((querySnapshot)=>{
      if(querySnapshot.sise===0)
            {
console.log("No results!");
            }
            setItem(querySnapshot.docs.map(doc=>doc.data()));
        }).catch((error)=>{
            console.log("Error searching items",error);
        }).finally(()=>{
        });
    },[]);






    console.log("items en item container:"+items);


useEffect(() => {
    setProducto(item[itemid-1]);
  },[item]);





    return (



    <div class="p-3 mb-2 bg-light text-dark">


            <ItemDetail  jsonpack={producto} />
           </div>
            )



}
export default ItemDetailContainer;