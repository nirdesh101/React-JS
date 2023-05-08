import React, { useState } from "react";
import print from "../Assets/Images/print.png";
import jsonData from "../data.json"

function FormFill({ userData, setUserData }) {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    occupation: "",
    dob: "",
    interestedField: "",
  };
  const [data, setData] = useState(initialValues);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addUser = (e) => {
    e.preventDefault();
    setUserData([...userData, { ...data }]);
    clearState();
  };

  const clearState = () => {
    setData(initialValues);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-betwee mt-5">
        <div className="col-md-6">
          <div>
            <h1 className="formHead mb-2">Let's get started !</h1>
            <br /> <br />
            <h3>
              Fill up the form and register yourself as a Computer Science
              Student
            </h3>
            <p className="fs-5 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              aspernatur impedit recusandae saepe aperiam dolore doloremque,
              voluptates sapiente quae ex numquam delectus quaerat, ut neque
              quod veniam sint adipisci? Iure.100
            </p>
            <p className="fs-5 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              ratione iste distinctio laborum nihil, voluptatem, minus esse
              delectus beatae quaerat veritatis dolores expedita quisquam
              consequuntur in? Animi iusto rerum, tempora, unde non quod maiores
              facilis cumque perspiciatis recusandae quidem pariatur doloremque.
            </p>
          </div>
          <div className="d-flex align-items-center mt-5">
            <img className="print" src={print} alt="" />
            <h4 className="mt-2">MIT UNI CORP</h4>
          </div>
        </div>

        <div className="col-md-6 text-center">
          <form onSubmit={addUser}>
            <label className="fw-bolder d-block pb-1" htmlFor="name">
              FIRST NAME*
            </label>
            <input
              name="fname"
              value={data.fname}
              autoComplete="off"
              type="text"
              className="rounded w-50 p-2 border-0"
              onChange={handleChange}
            />
            <label className="fw-bolder d-block pb-1 mt-4" htmlFor="name">
              LAST NAME*
            </label>
            <input
              name="lname"
              value={data.lname}
              autoComplete="off"
              type="text"
              className="rounded w-50 p-2 border-0"
              onChange={handleChange}
            />
            <label className="fw-bolder d-block pb-1 mt-4" htmlFor="email">
              EMAIL*
            </label>
            <input
              name="email"
              value={data.email}
              autoComplete="off"
              type="email"
              className="rounded w-50 p-2 border-0"
              onChange={handleChange}
            />
            <label className="fw-bolder d-block pb-1 mt-4" htmlFor="dob">
              DATE OF BIRTH*
            </label>
            <input
              value={data.dob}
              name="dob"
              autoComplete="off"
              type="date"
              className="rounded w-50 p-2 border-0"
              onChange={handleChange}
            />
            <label className="fw-bolder d-block pb-1 mt-4" htmlFor="occupation">
              OCCUPATION*
            </label>
            <input
              name="occupation"
              value={data.occupation}
              autoComplete="off"
              type="text"
              className="rounded w-50 p-2 border-0"
              onChange={handleChange}
              required
            />

            <label
              className="fw-bolder d-block pb-1 mt-4"
              htmlFor="occupation"
              for="cars"
            >
              INTERESTED FIELD
            </label>

            <select
              name="interestedField"
              id="cars"
              className="rounded w-50 p-2 border-0"
              onChange={handleChange}
              value={data.interestedField}
            >
              <option value="">Select One</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Project Manager">Project Manager</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
            </select>

            <label
              className="fw-bolder d-block pb-1 mt-5"
              htmlFor="occupation"
            ></label>
            <button
              onClick={addUser}
              className="bg-primary rounded w-25 p-2 border-1 border-primary"
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormFill;
