// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import InventoryPage from "../Inventory/InventoryPage";
// import UserPage from "../User/ViewUser";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand col-1" to="/">
            Users
          </Link>

          <Link className="navbar-brand me-auto" to="/InventoryPage">
            Inventories
          </Link>
        </div>
      </nav>
    </div>
  );
}
// export default class NavBarComp extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Navbar bg="light" expand="lg">
//             <Container>
//               <Navbar.Brand href="#home">UI</Navbar.Brand>
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="me-auto">
//                   <Nav.Link as={Link} to={"/users"}>
//                     Users
//                   </Nav.Link>
//                   <Nav.Link as={Link} to={"/inv"}>
//                     Inventories
//                   </Nav.Link>
//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </div>
//         <div>
//           <Switch>
//             <Route path="/inv">
//               <InventoryPage />
//             </Route>
//             <Route path="/users">
//               <UserPage />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }
