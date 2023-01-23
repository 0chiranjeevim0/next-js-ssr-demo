import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCmdehZPSgGuKyOf31Ue-uA-h0AQGJ0eYg",
    authDomain: "next-js-backend-7c02d.firebaseapp.com",
    projectId: "next-js-backend-7c02d",
    storageBucket: "next-js-backend-7c02d.appspot.com",
    messagingSenderId: "223849103371",
    appId: "1:223849103371:web:9a98e4a4fe1fb2136b470e"
})


const firestore = getFirestore(firebaseApp);

export default firestore;
