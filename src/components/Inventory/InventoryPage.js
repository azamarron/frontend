import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export default function InventoryPage() {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const result = await axios.get(
      "https://localhost:7013/Inventory/GetAllItems"
    );
    setItems(result.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`https://localhost:7013/Inventory/DeleteItems/${id}`);
    loadItems();
  };

  return (
    <div>
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr key={id}>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">User ID</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {item.id}
                  </th>
                  <td>{item.itemName}</td>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{item.userId}</td>
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
                            to={`/viewitem/${item.id}`}
                          >
                            Item Details
                          </Link>
                        </Dropdown.Menu>
                      </Dropdown>
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
