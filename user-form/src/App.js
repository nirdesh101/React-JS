import React, { useState } from "react";
import "./App.css";
import "./Assets/scss/index.scss";
import Nav from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import FormFill from "./Components/FormFill";
import UserList from "./Components/UserList";
import jsonData from "../src/data.json";

function App() {
  const [userData, setUserData] = useState(jsonData);

  console.log(jsonData.length);

  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home userData={userData} setUserData={setUserData} />}
          />
          <Route
            path="/userlist"
            element={<UserList userData={userData} setUserData={setUserData} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
