import React, { useState } from 'react';
import "./Assets/CSS/todoList.css";
import Header from './Components/Header';
import TodoForm from './Components/TodoForm';

function App() {

  return (
    <>
      < Header />
      < TodoForm />
    </>
  );
}

export default App;