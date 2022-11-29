import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const userTypeMap = {
    0: "Trainee",
    1: "Consultant",
    2: "Manager",
  };

  const loadUsers = async () => {
    const result = await axios.get("https://localhost:7013/User/GetAllUsers");
    console.log("All users", result);
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://localhost:7013/User/DeleteUser/${id}`);
    loadUsers();
  };

  return (
    <div>
      <Link
        className="mt-3 btn btn-primary col-1 "
        to="/adduser"
        variant="primary"
      >
        Add User
      </Link>

      <div className="container">
        <div className="py-3">
          <table className="table border shadow">
            <thead>
              <tr key={id}>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Position</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {user.id}
                  </th>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{userTypeMap[user.userType]}</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Dropdown>
                        <Dropdown.Toggle
                          className="mx-2"
                          variant="info"
                          id="dropdown-basic"
                        >
                          View
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Link
                            className="dropdown-item"
                            to={`/viewuser/${user.id}`}
                          >
                            User Details
                          </Link>
                          <Link
                            className="dropdown-item"
                            to={`/viewuseritems/${user.id}`}
                          >
                            User Items
                          </Link>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Link
                        className="btn btn-outline-primary mx-2"
                        to={`/edituser/${user.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
