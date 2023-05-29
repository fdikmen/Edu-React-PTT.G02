import { Link, Routes,Route } from "react-router-dom";
import Address from "./components/Address";
function App() {
  return (
    <div>
      <h1>React Router DOM</h1>
      {/* <a href="/About"> About with html a tag</a> <br/> */}
      <Link to="/About"> About with router Link</Link> <br/>
      <Link to="/Contact"> Contact with router Link</Link> <br/>
      <Link to="/Address"> Address with router Link</Link> <br/>

      <Routes>
        {/* <Route path="/" element={<h1>HOME PAGE</h1>} /> */}
        <Route index element={<h1>HOME PAGE</h1>} />
        <Route path="/About" element={<About/>} />
        {/* <Route path="/About" element={<Contact/>} /> */}
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Address" element={<Address/>} />
        <Route path="*" element={<h1>404 NOT FOUND!</h1>} />
      </Routes>
    </div>
  );
}

export default App;


function About() {
  return (
    <div>About</div>
  )
}

function Contact() {
  return (
    <div>Contact</div>
  )
}

// function Address() {
//   return (
//     <div>Address</div>
//   )
// }

