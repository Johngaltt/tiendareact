
import {ItemDetail} from './ItemDetail';
import {useParams} from "react-router-dom";
import React, {useState,useEffect} from 'react';
import {db} from '../firebase';
import {doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [item,setItem] = useState("")
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(()=> {
        setLoading(true)
        
        const docRef = doc(db, "items",itemId)
        getDoc(docRef)
            .then(doc => {
                setItem ({id: doc.id, ...doc.data()})
            })
            .finally(()=>{
                setLoading(false)
            })

    },[itemId]);

if(item.length)
console.log("items en item container:"+item[0].title);



    if(loading)
    {

    return (
    <div class="p-3 mb-2 bg-light text-dark">
            <ItemDetail  jsonpack={item[0]} />
           </div>
            )

    }

    else {
        return (
        <>
    <div class="p-3 mb-2 bg-light text-dark">
        <h1>        El itemid ingresado no existe por favor ingresar un itemid que exista</h1>
            </div>

            </>
        )
    }



}
export default ItemDetailContainer;