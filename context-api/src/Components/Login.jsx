import React, { useState, useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

function Login() {

    const {setUsername, setShowProfile} = useContext(LoginContext)

  return (
    <>
    <div className="login">
        <input 
        type="text"
        placeholder="Username"
        onChange={(event) => {
            setUsername(event.target.value) 
        }}
        />

        <input 
        type= "password" 
        placeholder="password"   
        />

        <button
        onClick={()=> {setShowProfile(true)}}
        >Login</button>
    </div>
    </>
  )
}

export default Login;