import React from 'react'

const Todolist = ({ todos, setUserinput, setTodos, setToggle, setEdittodo }) => {

    const editEventHandler = (todo) => {

        setUserinput(todo.name);
        setEdittodo(todo);
        setToggle(false);

    }

    const deleteEventHandler = (todo) => {

        const deletetodo = todos.filter((singletodo) => { return (singletodo.id !== todo.id) });
        setTodos(deletetodo);

    }

    return (
        <div>
            {todos.map((todo) => {
                return (

                    <div key={todo.id}>
                        <h5>{todo.id} {todo.name}</h5>
                        <button onClick={() => editEventHandler(todo)}>Edit</button>
                        <button onClick={() => deleteEventHandler(todo)}>Delete</button>
                    </div>

                )


            })}
        </div>
    )
}

export default Todolist