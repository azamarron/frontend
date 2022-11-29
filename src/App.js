import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/User/Home";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./components/User/AddUser";
import EditUser from "./components/User/EditUser";
import ViewUser from "./components/User/ViewUser";
import InventoryPage from "./components/Inventory/InventoryPage";
import AddItem from "./components/Inventory/AddItem";
import EditItem from "./components/Inventory/EditItem";
import ViewItem from "./components/Inventory/ViewItem";
import ViewItemByUser from "./components/Inventory/ViewItemByUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/InventoryPage" element={<InventoryPage />} />
          <Route exact path="/additem/:userid" element={<AddItem />} />
          <Route exact path="/edititem/:id" element={<EditItem />} />
          <Route exact path="/viewitem/:id" element={<ViewItem />} />
          <Route exact path="/viewuseritems/:id" element={<ViewItemByUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
