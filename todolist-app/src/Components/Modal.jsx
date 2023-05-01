import React from "react";
import TodoList from "./Todo";

function Modale({ todos, setTodos }) {

  function confirmDelete(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <>
      <div id="modal">
        <h3>Are you sure want ot delete this todo ?</h3>
        <button>No</button>
        <button onClick={confirmDelete}>Yes</button>
      </div>
    </>
  );
}

export default Modale;
