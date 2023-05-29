import { Link, Routes, Route, NavLink } from "react-router-dom";
import Address from "./components/Address";
import Footer from "./components/Footer";
import User from "./components/User";
import UserClass from "./components/UserClass";
import RootRooter from "./config/RootRooter";
function App() {
  return (
    <div>
      <h1>React Router DOM</h1>
      {/* <a href="/About"> About with html a tag</a> <br/> */}
      <Link to="/About"> About with router Link</Link> <br />
      <Link target="_blank" to="/Contact"> Contact with router Link</Link> <br />
      <Link style={{ color: 'red' }} to="/Address"> Address with router Link</Link> <br />
      <Link to="/User"> USER</Link> <br />
      <Link to="/UserClass"> USER with Class Component</Link> <br />

      <NavLink
        to="/messages"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "yellow" : "",
            // color: isPending ? "red" : "black",
          };
        }}
      >
        Messages
      </NavLink>
      <hr />
      <RootRooter />
      <Footer />
    </div>
  );
}

export default App;

// function Address() {
//   return (
//     <div>Address</div>
//   )
// }

