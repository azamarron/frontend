import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
  });

  const { Name, Email, Phone, userType } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let newUser = {
      email: user.email,
      id: 0,
      name: user.name,
      phone: parseInt(user.phone),
      userType: parseInt(user.userType),
    };
    await axios.post("https://localhost:7013/User/addUser", newUser);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter name"
                name="name"
                value={Name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Phone" className="form-label">
                Phone Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Phone Number"
                name="phone"
                value={Phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter e-mail address"
                name="email"
                value={Email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Job" className="form-label">
                Position
              </label>
              {/* <input
                type={"text"}
                className="form-control"
                placeholder="Enter position"
                name="userType"
                value={userType}
                onChange={(e) => onInputChange(e)}
              /> */}
              <select
                class="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                name="userType"
                value={userType}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>Open this select menu</option>
                <option value="0">Trainee</option>
                <option value="1">Consultant</option>
                <option value="2">Manager</option>
              </select>
              <header placeholder="0 for Trainee, 1 for Consultant, 2 for Manager." />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
