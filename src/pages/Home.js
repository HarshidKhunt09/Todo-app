import React from 'react'
import { useState } from 'react'
import Todolist from '../components/Todolist';

const Home = () => {

  const [todos,setTodos] = useState([{id:"1", name:"Harshid"}]);
  const [userInput,setUserinput] = useState("");
  const [toggle, setToggle] = useState(true);
  let [edittodo, setEdittodo] = useState({id:"", name:""});

  const addTodo = () => {

    setTodos([...todos, {id: Date.now(), name: userInput }]);
    setUserinput("");

  }

  const editedtodo = () => {
      
    const edittodoin = todos?.findIndex((singletodo) => { return (singletodo.id == edittodo.id) });
    todos[edittodoin] = {id:edittodo.id ,name:userInput};
    setTodos(todos);
    console.log(todos);
    setUserinput("");
    setToggle(true);

  }

  return (

    <div style={{textAlign:"center"}}>
    <h1>Todo App</h1><br/>
    <label>
      Enter Todo :- 
      <input type="text" onChange={(e) => setUserinput(e.target.value) } value={userInput}/>
    </label>
    {
      toggle ? <button onClick={addTodo}>Add Todo</button> : <button onClick={editedtodo}>Edit Todo</button> 
    }
    <Todolist todos={todos} setUserinput={setUserinput} setTodos={setTodos} setToggle={setToggle} setEdittodo={setEdittodo} />
    </div>
  )
}

export default Home