import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar.tsx';
import Todo from '../components/Todo.tsx';
import firestore from '../firebase/firebase.js';
import {collection,onSnapshot} from 'firebase/firestore';

const Home = () =>{

  //state to store data
  const [todos, setTodos] = useState(false)


  //useEffect hook to fetch data

  useEffect(() =>{
    //fetching data from firestore database

   const fetchData = async() =>{
    const collectionRef = await collection(firestore,'todos');
    onSnapshot(collectionRef,(snapshot) =>{
      setTodos(snapshot.docs.map((doc) => doc.data()))
    })
    
  }

  fetchData();
  },[])
  return(
    <div className="">
        <div className="">
          <Navbar />
        </div>
        <div className="todo-master-container">
            {

              (
                todos?
                todos.map((todo) =>(
                  <Todo key={todo.id} data={todo.task}/>
                ))
                :
                <h1>Loading data......</h1>
              )
              
            }
        </div>
    </div>
  )
}


export default Home;
