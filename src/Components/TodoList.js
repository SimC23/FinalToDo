import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { Todo } from './Todo'

export const TodoList = () => {

    const[todos,setTodos] = useState([])




    const addTodo = (todo) => {
        setTodos([todo,...todos])
    }


    const handleComplete = (id) => {
        setTodos(
        todos.map(todo => {
            if(todo.id === id) {
                return{...todo, completed:!todo.completed}
            }
            return todo;
        })
        )
    }

        const handleRemove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
        }
        
        const resetAll = () => {
            setTodos([]);
        }


    return (
        <div>
        <div>
        <TodoForm addTodo={addTodo}/>
        </div>
        <ul>
        {todos.map(todo => (
        <Todo todo={todo} handleRemove={handleRemove} handleComplete={handleComplete} setTodos={setTodos} todos={todos}/>
        ))
        }
        </ul>
        <button onClick={resetAll}>Delete ALLLLL!!!!</button>
        </div>
    )
}
