import ItemList from './ItemList';
//import jsonpack from './data.json';
import React, {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import {db} from '../firebase';



const ItemListContainer = ({name}) => {
    const {categoryid}=useParams();
    const[cat]=useState(categoryid);
        const[item,setItems]=useState([])
        useEffect(()=>{
            db();
            const itemCollection=db.collection("items");
    console.log("categoryid en ItemListContainer"+categoryid)
            itemCollection.get().then((querySnapshot)=>{
          if(querySnapshot.sise===0)
                {
    console.log("No results!");
                }
                setItems(querySnapshot.docs.map(doc=>doc.data()));
            }).catch((error)=>{
                console.log("Error searching items",error);
            }).finally(()=>{
            });
        },[]);
    
    
    
    
    
    
                 console.log(cat);
    
        return (
    
           <div name="test">
        <div class="p-3 mb-2 bg-light text-dark">
            {name}
    
    
    
            <ItemList items={item}/>
    
    
    
           </div>
    
    
    
               </div>
       )
    }
    
    
    export default ItemListContainer;
