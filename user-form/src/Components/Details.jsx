import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

function Details({ userData, setUserData }) {
  const { id } = useParams();

  const data = userData.filter((userId, index) => {
    return id == index;
  });

  const key = "details";

  useEffect(() => {
    if (!userData.length) return;
    localStorage.setItem(key, JSON.stringify(userData));
  }, [userData]);

  function init() {
    const value = localStorage.getItem(key);

    if (value) {
      setUserData(JSON.parse(value));
    }
  }
  useEffect(() => init(), []);

  return (
    <div className="text-center">
      {data.map((userData, index) => (
        <div className=" d-inline-block text-start">
          <h1 className="mt-4 mb-5 text-decoration-underline"> STUDENT'S DETAIL </h1>

          <hr className="mt-5"/>
          <div className="mb-3 mt-0">
            <span className="fs-5" htmlFor="">FIRST NAME :</span> 
            <span className="details mt-2 fs-4"> {userData.fname}</span>
          </div>
          <hr className="d-block text-center"/>
          <div className="mb-3">
            <span className="fs-5" htmlFor="">LAST NAME :</span>
            <span className="details mt-2 fs-4"> {userData.lname}</span>
          </div>
          <hr/>
          <div className="mb-3">
            <span className="fs-5" htmlFor=""> EMAIL :</span>
            <span className="details mt-2 fs-4"> {userData.email}</span>
          </div>
          <hr />
          <div className="mb-3">
            <span className="fs-5" htmlFor="">DATE OF BIRTH :</span>
            <span className="details mt-2 fs-4"> {userData.dob}</span>
          </div>
          <hr />
          <div className="mb-3">
            <span className="fs-5" htmlFor="">OCCUPATION :</span>
            <span className="details mt-2 fs-4"> {userData.occupation}</span>
          </div>
          <hr />
          <div className="mb-3">
            <span className="fs-5" htmlFor="">MAJOR INTEREST :</span>
            <span className="details mt-2 fs-4"> {userData.interestedField}</span>
          </div>
          <hr />
          
        </div>
      ))}
    </div>
  );
}

export default Details;