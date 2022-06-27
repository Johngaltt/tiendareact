import ItemDetail from './itemDetail';
import {useParams} from "react-router-dom";
import React, {useState,useEffect} from 'react';
import productos from './data.json';



const ItemDetailContainer = ({items}) => {



    const[producto,setProducto]=useState([])
const {itemid}=useParams();
    useEffect(()=>{


    if(items)
    {
console.log("item def");

    }

    else{


items=productos;
console.log("no item");
    }



        const call=new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(items)
            },2000)
        })

        call.then(response=>{
            console.log(itemid);
            console.log(response[itemid-1]);
            setProducto(response[itemid-1]);
        })
    },[])


    return (



    <div class="p-3 mb-2">


            <ItemDetail  jsonpack={producto} />
           </div>
            )



}
export default ItemDetailContainer;