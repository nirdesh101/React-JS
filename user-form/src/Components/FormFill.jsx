import React, { useId, useState, useContext } from "react";
import print from "../Assets/Images/print.png";
import { useEffect } from "react";
import { DetailsContext } from "../ContextApi/context";

function FormFill({ userData, setUserData }) {
  const { data, setData, initialState } = useContext(DetailsContext);
  console.log(data);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (localStorage.getItem("key")) {
      setData(JSON.parse(localStorage.getItem("key")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(data));
  }, [data]);

  console.log(data, "data");

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!data.fname) {
      isValid = false;
      errors["fname"] = "Please enter your first name.";
    }

    if (!data.lname) {
      isValid = false;
      errors["lname"] = "Please enter your last name.";
    }

    if (!data.email) {
      isValid = false;
      errors["email"] = "Please enter your email address.";
    }

    if (typeof data.email !== "undefined") {
      let pattern = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      );
      if (!pattern.test(data.email)) {
        isValid = false;
        errors["email"] = "Please enter a valid email address.";
      }
    }

    if (!data.occupation) {
      isValid = false;
      errors["occupation"] = "Please enter your occupation.";
    }

    if (!data.dob) {
      isValid = false;
      errors["dob"] = "Please enter your date of birth.";
    }

    setErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "",
    }));

    setData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));
  };

  const addUser = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setUserData([...userData, { ...data }]);
      clearState();
    }
  };

  const clearState = () => {
    setData(initialState);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-betwee mt-5 ">
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
            {errors.fname && <div className="text-danger">{errors.fname}</div>}
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
            {errors.lname && <div className="text-danger">{errors.lname}</div>}
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
            {errors.email && <div className="text-danger">{errors.email}</div>}
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
            {errors.dob && <div className="text-danger">{errors.dob}</div>}
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
            />
            {errors.occupation && (
              <div className="text-danger">{errors.occupation}</div>
            )}

            <label
              className="fw-bolder d-block pb-1 mt-4"
              htmlFor="occupation"
              for="cars"
            >
              MAJOR INTEREST
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
              className="fw-bolder d-block pb-1 mt-2"
              htmlFor="occupation"
            ></label>
            <button
              type="submit"
              className="btn btn-primary rounded px-4 py-2 mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormFill;
