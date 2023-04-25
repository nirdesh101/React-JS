import React from "react";
function DisplayTodo({todos}) {

  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul> 
    </>
  );
}

export default DisplayTodo;
