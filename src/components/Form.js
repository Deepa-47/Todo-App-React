import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../redux/actions";

export const Form = ({ editFormVisibility, editTodo, cancleUpdate }) => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");

  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  const editSubmit = (e)=>{
      e.preventDefault();
      let editedObj={
        id:editTodo.id,
        todo: editValue
      }
      dispatch(handleEditSubmit(editedObj))
  }

  return (
    <>
      {editFormVisibility === false ? (
        <form className="form-group custom-form" onSubmit={handleSubmit}>
          <h2 className="title">Add your todo-items</h2>
          <div className="input-and-btn container">
            <input
              type="text"
              className="form-control"
              required
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary btn-md">
              ADD
            </button>
          </div>
        </form>
      ) : (
        <form className="form-group custom-form" onSubmit={editSubmit}>
          <h2 className="title">Update your todo-items</h2>
          <div className="input-and-btn container">
            <input
              type="text"
              className="form-control"
              required
              value={editValue || ""}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary btn-md">
              UPDATE
            </button>
          </div>
          <button
            className="btn btn-primary btn-md back-btn"
            onClick={cancleUpdate}
          >
            BACK
          </button>
        </form>
      )}
    </>
  );
};
