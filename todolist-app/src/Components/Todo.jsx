import React, { useState } from "react";
import Delete from "../Assets/Images/delete.svg";
import Edit from "../Assets/Images/edit.svg";
import Modal from "react-modal";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState();

  const handleEdit = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editing: true };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const handleSave = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText, editing: false };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const handleDelete = () => {
    const updatedTodos = todos.filter((todo) => todo.id !== isDeleted);
    setTodos(updatedTodos);
  };

  const toggleModal = (id) => {
    setIsOpen(!isOpen);
    setIsDeleted(id);
  };

  const handleAdd = () => {
    const newTodo = { id: todos.length + 1, text: newTodoText, editing: false };
    setTodos([...todos, newTodo]);
    setNewTodoText("");
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="Modal"
      >
        <div className="Modal__Content">
          <h2 className="Modal__Heading mb-5">
            Are you sure you want to delete this todo?
          </h2>
          <button
            className="Modal__Button Modal__Button--Yes"
            onClick={() => {
              handleDelete();
              toggleModal();
            }}
          >
            Yes
          </button>
          <button
            className="Modal__Button Modal__Button--No"
            onClick={toggleModal}
          >
            No
          </button>
          <button className="Modal__Button" onClick={toggleModal}>
            Close
          </button>
        </div>
      </Modal>
      <div className="container">
        <div className="mb-4">
          <input
            className="px-3 py-2 w-50"
            type="text"
            placeholder="Add a new todo..."
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAdd();
              }
            }}
          />
          <button
            className="add-btn text-bg-primary py-2 px-3 border-0 ms-4"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>

        <div className="row">
          <div className="col-md-8 offset-md-2">
            <table className="table table-striped mt-4">
              <thead className="col-md-8">
                <tr className="align-items-center text-center">
                  <th scope="col" className="col-md-1">
                    S.N
                  </th>
                  <th scope="col" className="col-md-5">
                    TODO
                  </th>
                  <th scope="col" className="col-md-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => (
                  <tr key={todo.id}>
                    <td scope="row" className="text-white">
                      {todo.id}
                    </td>
                    {todo.editing ? (
                      <input
                        type="text"
                        className="form-control bg-light"
                        defaultValue={todo.text}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleSave(todo.id, e.target.value);
                          }
                        }}
                      />
                    ) : (
                      <>
                        <td>
                          <div className="todo-text fw-bolder">
                            <span>{todo.text}</span>
                          </div>
                        </td>

                        <td>
                          <button
                            className="btn btn-sm text-bg-info"
                            onClick={() => handleEdit(todo.id)}
                          >
                            <img src={Edit} alt="" />
                          </button>
                          <button
                            className="btn btn-sm text-bg-danger ms-3"
                            onClick={() => toggleModal(todo.id)}
                          >
                            <img src={Delete} alt="" />
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
