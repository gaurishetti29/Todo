import React from 'react'
import "./Todo.scss";

const TodoRows = (
    {
        todo,
        deleteTodo,
        editTodo,
        todoId
    }
) => {

     
  return (
    <>
        <tr key={todo.id}>
                {/* <td>
                <input type="checkbox" className="checkbx"></input>
              </td> */}
                <td className="taskInp">{todo.name}</td>
                <td className="iconss">
                  <i
                    className="fa-solid fa-trash-can"
                    onClick={() => deleteTodo(todo.id)}
                    id="deleteBtn"
                  ></i>
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={(e) => editTodo(e,todo)}
                    id="editBtn"
                  ></i>
                </td>
              </tr>
    </>
  )
}

export default TodoRows