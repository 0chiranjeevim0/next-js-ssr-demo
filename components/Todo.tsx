import React from 'react';


const Todo = (props) =>{



    return(
        <div className="todo-container">
            <h1>{props.data}</h1>
        </div>
    )
}

export default Todo;