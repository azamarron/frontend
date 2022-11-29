import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Extra Functionality
export default function ViewItem() {
  const [item, setItem] = useState({
    itemName: "",
    description: "",
    quantity: "",
    userId: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadItem();
  }, []);

  const loadItem = async () => {
    const result = await axios.get(
      `https://localhost:7013/Inventory/GetItems/${id}`
    );
    setItem(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Item Details</h2>

          <div className="card">
            <div className="card-header">
              Details of item id : {item.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name: </b>
                  {item.itemName}
                </li>
                <li className="list-group-item">
                  <b>Description: </b>
                  {item.description}
                </li>
                <li className="list-group-item">
                  <b>Quantity: </b>
                  {item.quantity}
                </li>
                <li className="list-group-item">
                  <b>User ID: </b>
                  {item.userId}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-secondary my-2" to={"/InventoryPage"}>
            Back to Inventories
          </Link>
        </div>
      </div>
    </div>
  );
}
