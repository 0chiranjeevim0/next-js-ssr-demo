import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar.tsx';
import Todo from '../components/Todo.tsx';



export async function getServerSideProps(){
  const todos = await fetch("http://localhost:3000/api/fetchTodos")
  const todosJson = await todos.json();

  return{
    props:{
      data:{
        todosJson
      }
    }
  }
}

const Home = ({data}) =>{

  console.log(data.todosJson.todo);



  //useEffect hook to fetch data

  return(
    <div className="">
        <div className="">
          <Navbar />
        </div>
        <div className="todo-master-container">
            {
              data.todosJson.todo.map((data) =>(
                <Todo key={data.id} data={data.task}/>
              ))
            }
        </div>
    </div>
  )
}


export default Home;
