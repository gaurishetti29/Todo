import React, { useState } from 'react'
import "./Todo.scss";

const TodoRows = (
  {
    todo,
    deleteTodo,
    editTodo,
    todoId
  }
) => {

  let myStyle = {
    fontFamily: 'sans-serif',
    padding: '10px'
  }
  

  const [deadline, setDeadline] = useState(null);
  const getColor = () => {
    if (!deadline) {
      return "green";
    }

    const diff = Math.ceil((deadline.getTime() - Date.now()) / (1000 * 3600 * 24));
    if (diff === 0) {
      return "red";
    }
    else if (diff === 1) {
      return "yellow";
    } else {
      return "green";
    }
    
  };
  useState(() => {
    if (todo.deadline) {
      setDeadline(new Date(todo.deadline));
    }
  }, [todo.deadline]);
  
  return (
    <>
      <tr key={todo.id}>
        {/* <td>
                <input type="checkbox" className="checkbx"></input>
              </td> */}
        <th className='cat' style={myStyle}>
          {/* <td className="taskInp">Title : {todo.name}</td>
          <td className='descInp'>Description : {todo.desc}</td> */}
          
          <h5><ol>{todo.name}</ol></h5>
          <h6><ul>{todo.desc} <br></br>
          
          </ul>
          </h6>
          
          
        </th>
        
        <td className="iconss">
          <i
            className="fa-solid fa-trash-can"
            onClick={() => deleteTodo(todo.id)}
            id="deleteBtn"
          ></i>
          <i
            className="fa-solid fa-pen-to-square"
            onClick={(e) => editTodo(e, todo)}
            id="editBtn"
          ></i>
          <td style={{ color: getColor()}} className='deadline'>
          <ul>{todo.deadline ? todo.deadline.toLocaleDateString() : ""}</ul></td>
          
        </td>
      </tr>
    </>
  )
}

export default TodoRows