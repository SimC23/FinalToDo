import React, {useState} from 'react'

export const Todo = ({todo, handleComplete, handleRemove, setTodos, todos}) => {

    const [todoEditing, setTodoEditing] = useState(null)
    const [editingText, setEditingText] = useState("")

  


    const completed = () => {
        handleComplete(todo.id)
    }

    const remove = () => {
        handleRemove(todo.id)
    }

    function submitEdits(id) {
        const updatedTodos = [...todos].map((todo) => {
          if (todo.id === id) {
            todo.task = editingText;
          }
          return todo;
        });
        setTodos(updatedTodos);
        setTodoEditing(null);
      }
    



    // const submitEdits = (id) => {
    //     setTodos( 
    //         todos.map(todo => {
    //       if (todo.id === id) {
    //         todo.task= editingText
    //       }
    //       return todo;
    //     }));
    //   }


    return (
        <div style={{display: 'flex'}}>
        <input type='checkbox'onClick={completed}></input>
        {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)
                }
              />
            ) : (
              <div>{todo.task}</div>
            )}
        <button onClick={remove}>X</button>
        <div>
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}
            </div>
        </div>
    )
}
