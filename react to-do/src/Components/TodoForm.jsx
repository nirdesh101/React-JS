import React, {useState} from "react";

function TodoForm() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo }]);
      setNewTodo("");
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleEnterKey}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoForm;