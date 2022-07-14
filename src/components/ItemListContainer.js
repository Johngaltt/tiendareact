import ItemList from './ItemList';
//import jsonpack from './data.json';
import React, {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import {db} from '../firebase';
import {collection, getDocs, query, where} from "firebase/firestore"


const ItemListContainer = () => {
    const [productsList,setProductList] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryid } = useParams()
    useEffect(()=> {
        setLoading(true)

        const productsRef = collection(db, "items")
        const q = categoryid ? query (productsRef,where("category","==", categoryid)): productsRef

        getDocs(q)
            .then(resp=> {
                const items = resp.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
                setProductList(items)
            })
            .finally(()=>{
                setLoading(false)
            })
        
    },[categoryid]);
    
        return (
            
           <div name="test" >
        <div class="p-3 mb-2 bg-light text-dark">
            {loading}
            <ItemList items={productsList}/>
           </div>
               </div>
          
       )
    }
    
    
    export default ItemListContainer;
