import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
       
        const[todo,setTodo] = useState({
            task:'',
            id:'',
            completed: false
        })

        

    
       const handleChange = e => {
           setTodo({...todo, task:e.target.value})
       } 

       const handleSubmit = e => {
           e.preventDefault();
            
           if(todo.task) {
                addTodo({...todo, id:Math.floor(Math.random()*10000)})
                setTodo({...todo,task:''})
            } 
           
           { return todo;
           
            }
       }


    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='task' className='input' value={todo.task} onChange={handleChange}></input>
                <button type='submit'>click here</button>
            </form>

            
        </div>
    )
}

export default TodoForm
