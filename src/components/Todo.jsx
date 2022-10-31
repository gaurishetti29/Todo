import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.scss";
import TodoRows from "./TodoRows";
import EditTodo from "./EditTodo";

const Todo = () => {
  const mainEditBtn = document.getElementById("mainEditBtn");
  const addBtn = document.getElementById("addBtn"); 
  let inpBtn = document.getElementById("inpBtn");
  const [addBtnState,setAddBtnState] = useState(addBtn);
  const [Todo, setTodo] = useState("");
  const [editTodoTask, setEditTodoTask] = useState("");
  const [todoId, setTodoId] = useState(null);
  const [todoList, setTodoList] = useState([
    // {
    //   id: 1,
    //   name: "Eat",
    // },
    // {
    //   id: 2,
    //   name: "Work",
    // },
  ]);
  const todoHandler = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (Todo.trim() === "") {
      alert("Cannot insert blank task!");
    } else {
      const newTodo = {
        id: uuidv4(),
        name: Todo,
      };
      setTodoList([...todoList, newTodo]);
      setTodo("");
    }
  };

  // const onUpdate = () => {
  //   updateBtn.disabled = true;
  //   if (Todo.trim() === "") {
  //     alert("Cannot insert blank task!");
  //   } else {
  //     const newTodo = {
  //       id: uuidv4(),
  //       name: Todo,
  //     };
  //     setTodoList([...todoList, newTodo]);
  //     setTodo("");
  //   }
  // };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((r) => r.id !== id));
  };

  const editTodo = (e, todo) => {
    e.preventDefault();
    
    // updateBtn.disabled=false;
    // addBtn.disabled=true;
    // updateBtn.click=onSubmit();
    setTodo(todo.name);
    deleteTodo(todo.id); 
  };

  const handleEditCancel = () => {
    setTodoId(null);
  };

  return (
    <>
      <header>ToDo-List</header>
      <div className="main">
        <center>
          <input
            type="text"
            className="inpTask"
            onChange={todoHandler}
            placeholder="Add task"
            id="inpBtn"
            value={Todo}
          />{" "}
          <button  className="addBtn" id='addBtn' onClick={onSubmit}>
            Add
          </button>
          <button className="addBtn" id="mainEditBtn" onClick={onSubmit}>
            Edit
          </button> 
          {/* <button className="addBtn" id="updateBtn" onClick={onSubmit} disabled>
            Update
          </button> */}
        </center>
        <table>
          <thead>
            {/* <th>Check</th> */}
            <th>Todo</th>
            <th className="actions">Delete/Edit</th>
          </thead>
          <tbody className="tableBody">
            {todoList.map((todo) => {
              return todoId === todo.id && todoId !== null ? (
                <EditTodo
                  key={todo.id}
                  todo={todo}
                  onSubmit={onSubmit}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  setEditTodoTask={setEditTodoTask}
                  editTodoTask={editTodoTask}
                  handleEditCancel={handleEditCancel}
                />
              ) : (
                <TodoRows
                  key={todo.id}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todo;
