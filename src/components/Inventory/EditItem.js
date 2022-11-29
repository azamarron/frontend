import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditItem() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [item, setItem] = useState({
    itemName: "",
    description: "",
    quantity: "",
    userId: "",
  });

  const { itemName, description, quantity, userId } = item;

  const onInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadItem();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    let updatedItem = {
      itemName: item.itemName,
      id: 0,
      description: item.description,
      quantity: parseInt(item.quantity),
      userId: parseInt(item.userId),
    };
    await axios.put(
      `https://localhost:7013/Inventory/UpdateItems`,
      updatedItem
    );
    navigate("/InventoryPage");
  };

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
          <h2 className="text-center m-4">Edit Item</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter name"
                name="itemName"
                value={itemName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Description" className="form-label">
                Description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Quantity" className="form-label">
                Quantity
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter e-mail address"
                name="quantity"
                value={quantity}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="UserId" className="form-label">
                User ID
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter User ID"
                name="userId"
                value={userId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/InventoryPage">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
