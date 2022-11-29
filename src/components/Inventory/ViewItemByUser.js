import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewItemByUser() {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const result = await axios.get(
      `https://localhost:7013/Inventory/GetItemByUser/${id}`
    );
    console.log(result);
    setItems(result.data);
  };
  const deleteItem = async (id) => {
    await axios.delete(`https://localhost:7013/Inventory/DeleteItems/${id}`);
    loadItems();
  };

  return (
    <div>
      <Link
        className="mt-2 btn btn-primary col-1 "
        to="/additem/{}"
        variant="primary"
      >
        Add Item
      </Link>
      <div>
        <table className="table border shadow mt-2">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">User ID</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.itemName}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.userId}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edititem/${item.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link className="btn btn-secondary my-2" to={"/"}>
        Back to Users
      </Link>
    </div>
  );
}
