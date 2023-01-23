import firestore from '../../firebase/firebase.js';
import {collection,getDocs} from 'firebase/firestore';



export default async function handler(req,res){
    let todos = [];
    const collectionRef = collection(firestore,"todos");
    const snapshot = await getDocs(collectionRef);
    snapshot.forEach((doc) =>{
        todos.push(doc.data());
    })

    res.json({todo:todos});
}