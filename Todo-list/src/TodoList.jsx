import { useState } from "react"; 
import { v4 as uuidv4 } from 'uuid';
import "./todo.css";


export default function() {
  let [todos,settodo] = useState([{task: "simple-task",id : uuidv4(),completed :false}]);
  let [inpval,setinp] = useState('');

  let changetodo = (e)=> {
      setinp(e.target.value);
  }

  let addtask = ()=> {
    if(inpval.trim()!='') {
      settodo((prevtodo)=> {
        return [...prevtodo,{task:inpval,id:uuidv4(),completed :false}];
});
setinp('');
    }

    else {
      alert("please enter a task to add");
    }
       
  }

  let handleit= (e)=> {
    if(e.key==="Enter") {
       addtask();
    }
  }

  let deltask = (id) => {
    settodo(todos.filter((task) => task.id !== id));
  }
  
  let Done = (id) => {
    settodo((prevtodo) => 
       prevtodo.map((todo) => {
        if(id===todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        else {
          return todo;
        }
        
      })
    );
  }
  

  return (
      <>
      <input placeholder="enter your task" value={inpval} onChange={changetodo} onKeyDown={handleit}></input>
      <button onClick={addtask}>Add!</button>

      <hr></hr>
      <h1>Todo List :-</h1>
      <ol>
        {todos.map((item) => (  
                 <li key={item.id} style={{textDecoration : item.completed ? "line-through" : "none"}}>{item.task}  
                   <button onClick={()=>deltask(item.id)}>Delete</button> &nbsp; &nbsp; &nbsp; &nbsp; 
                   <button onClick={()=>Done(item.id)} >Done</button>
                   </li>
                 
        )
      )}
      </ol>

      
      </>
  );
}