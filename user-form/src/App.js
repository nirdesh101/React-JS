import React, { useState, useContext } from "react";

import "./App.css";

import "./Assets/scss/index.scss";

import Nav from "./Components/NavBar";

import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home";

import UserList from "./Components/UserList";

import jsonData from "../src/data.json";

import Details from "./Components/Details";

import Context from "./ContextApi/ContextForApp";

import {
  USERLIST,
  USERLIST_ID
} from "./Constant/route"


function App() {
  const [userData, setUserData] = useState(jsonData, "jsonData");

  return (
    <>
      <Context>
        <Nav />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home userData={userData} setUserData={setUserData} />}
            />
            <Route
              path = { USERLIST.INDEX }
              element={
                <UserList userData={userData} setUserData={setUserData} />
              }
            />
            <Route
              path = { USERLIST_ID.INDEX }
              element={
                <Details userData={userData} setUserData={setUserData} />
              }
            />
          </Routes>
        </div>
      </Context>
    </>
  );
}

export default App;
