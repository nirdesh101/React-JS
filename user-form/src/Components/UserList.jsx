import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function UserList({ userData, setUserData }) {
  const [search, setSearch] = useState("");

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

  function handleDelete(index) {
    const updatedData = [...userData];
    updatedData.splice(index, 1);
    setUserData(updatedData);
    localStorage.setItem(key, JSON.stringify(updatedData));
  }

  const tableRows = userData
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.fname.toLowerCase().includes(search);
    })
    .map((info, index) => (
      <tr key={index} className="data-row clickable-row" id={index}>
        <td className="py-3">
          <Link className="text-white fw-bolder" to={"/userlist/" + index}>
            {index + 1}
          </Link>
        </td>
        <td className="py-3">
          <Link className="text-white fw-bolder" to={"/userlist/" + index}>
            {info.fname}
          </Link>
        </td>
        <td className="py-3">
          <Link
            className="text-danger fw-bolder"
            onClick={() => handleDelete(index)}
          >
            {" "}
            DELETE{" "}
          </Link>
        </td>
      </tr>
    ));

  return (
    <>
      <div className="text-center">
        <div className=" d-flex justify-content-between my-5 align-items-center">
          <h2 className="text-decoration-underline fw-bolder ">
            LIST OF STUDENTS
          </h2>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="search students"
            className="w-25 h-25 p-2 border-0 rounded"
          />
        </div>
        <table className="table table-stripped">
          <thead>
            <tr className="mb-5 head-row">
              <td className="text-white text-decoration-underline fs-5 fw-bold">
                S.N
              </td>
              <td className="text-white text-decoration-underline fs-5 fw-bold">
                First name
              </td>
              <td className="text-white text-decoration-underline fs-5 fw-bold">
                Action
              </td>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </>
  );
}

export default UserList;
