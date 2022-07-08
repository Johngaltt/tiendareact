import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPthM1KCLiPAAShj5USMN6IE_7hakuPUA",
    authDomain: "tiendahard-fc56f.firebaseapp.com",
    projectId: "tiendahard-fc56f",
    storageBucket: "tiendahard-fc56f.appspot.com",
    messagingSenderId: "960681972700",
    appId: "1:960681972700:web:75846c0f447d56a4107519"
  };


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)