import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.scss";
import TodoRows from "./TodoRows";
import EditTodo from "./EditTodo";
import { Dropdown } from "bootstrap";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Todo = () => {
  const mainEditBtn = document.getElementById("mainEditBtn");
  const addBtn = document.getElementById("addBtn");
  let inpBtn = document.getElementById("inpBtn");
  const [addBtnState, setAddBtnState] = useState(addBtn);
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
  let Open = [];
  let Working = [];
  let Done = [];
  let Overdue = [];

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const [deadline, setDeadline] = useState(null);
  const [status, setStatus] = useState("");


  todoList.map((data) => {
    if (data.cat === 'Open') {
      Open.push(data);
    }
    else if (data.cat === 'Working') {
      Working.push(data);
    }
    else if (data.cat === 'Done'){
      Done.push(data);
    }
    else {
      Overdue.push(data);
    }
  });

  console.log(Open);
  console.log(Working);
  console.log(Done);
  console.log(Overdue);

  // let initTodo;
  // if (localStorage.getItem("todo") === null || localStorage.getItem("todo") === undefined) {
  //   initTodo = [];
  // }
  // else {
  //   initTodo = JSON.parse(localStorage.getItem("todo"));
  // }


  // useEffect(() => {
  //   localStorage.setItem("todo", JSON.stringify(todoList));
  // }, [todoList]);


  const todoHandler = (event) => {
    setTodo(event.target.value);
  };
  const descHandler = (event) => {
    setDesc(event.target.value);
  };




  const onSubmit = (event) => {
    event.preventDefault();


    // if (Todo.trim() === "") {
    //   alert("Cannot insert blank task!");
    if (!Todo || !desc || !cat || !deadline) {
      alert("Fill all the fields");
    }
    else {
      const newTodo = {
        id: uuidv4(),
        name: Todo,
        desc: desc,
        cat: cat,
        deadline: deadline,
      };
      setTodoList([...todoList, newTodo]);
      setTodo("");
      setDesc("");
      setCat("");
      setDeadline("");

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
    setDesc(todo.desc);
    setCat(todo.cat);
    setDeadline(todo.deadline);
    deleteTodo(todo.id);
  };



  const handleEditCancel = () => {
    setTodoId(null);
  };



  return (
    <>
      <header>ToDo-List</header>
      <div className="container my-5 py-4">
        <center>
          <div className="mb-3">
            <input
              type="text"
              className="inpTask"
              onChange={todoHandler}
              placeholder="Add task Title"
              id="inpBtn"
              value={Todo}
            />{" "}
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="inpDesc"
              onChange={descHandler}
              placeholder="Add task Description"
              id="inpBtn"
              value={desc}
            />{" "}
          </div>

          <div className="mb-3">
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
              placeholderText="Set deadline"

            />
          </div>

          <div className="mb-3">
            <select className="Dropdown" value={cat} onChange={(e) => { setCat(e.target.value) }} id="cat">
              <option>Select status</option>
              <option id="open">Open</option>
              <option id="working">Working</option>
              <option id="done">Done</option>
              <option id="overdue">Overdue</option>
            </select>{" "}
          </div>
          




          <button className="addBtn" id='addBtn' onClick={onSubmit}>
            Add Task
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
            <th>Todo   <i className="fa-solid fa-list-check"></i></th>
            <th className="actions">Delete/Edit</th>
          </thead>
          <tbody className="tableBody">

            <h3 className="catHead">Open</h3>
            {Open.map((todo) => {
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

            <h3 className="catHead2">Working</h3>
            {Working.map((todo) => {
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

            <h3 className="catHead3">Done</h3>
            {Done.map((todo) => {
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

            <h3 className="catHead4">Overdue</h3>
            {Overdue.map((todo) => {
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
      <div className='container py-0 px-0'>
        <footer className='bg-dark text-light py-2'>
          <p className="text-center">
            Copyright &copy; MyTodoList.com
          </p>

        </footer>
      </div>
    </>
  );
}

export default Todo;
