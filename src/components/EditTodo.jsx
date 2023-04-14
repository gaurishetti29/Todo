import React from "react";
import "./Todo.scss";

const EditTodo = ({ editTodoTask, setEditTodoTask, handleEditCancel }) => {
  const editChangeHandler = (e) => {
    setEditTodoTask(e.target.value);
  };
  return (
    <>
      <tr className="todo">
        <td>
          <input
            type="text"
            value={editTodoTask}
            onChange={editChangeHandler}
          />
        </td>
        
        <td className="iconss">
          <i className="fa-sharp fa-solid fa-check" id="deleteBtn"></i>
          <i
            className="fa-sharp fa-solid fa-xmark"
            id="editBtn"
            onClick={handleEditCancel}
          ></i>
        </td>
      </tr>
    </>
  );
};

export default EditTodo;
