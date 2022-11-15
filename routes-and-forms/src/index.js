import {React} from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import Ducklings from "./components/Ducklings";
import Puppies from "./components/Puppies";
import Home from "./components/Home";
import Kittens from "./components/Kittens";
import PetForm from "./components/PetForm";
import AboutUs from "./components/AboutUs";

export default function App() {
  const linkStyle = {
    textDecoration: 'none',
    color: "black"
  }
  return (
    <Router>
      <ul className="breadcrumb">
        <li><Link style={linkStyle} to="/aboutus"> About us </Link></li>
        <li><Link style={linkStyle} to="/register"> Register your Pet </Link></li>
        <li><Link style={linkStyle} to="/"> All Pets </Link></li>
        <li><Link style={linkStyle} to="/kittens"> Kittens </Link></li>
        <li><Link style={linkStyle} to="/puppies"> Puppies </Link></li>
        <li><Link style={linkStyle} to="/ducklings"> Ducklings </Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="kittens" element={<Kittens />} />
        <Route path="puppies" element={<Puppies />} />
        <Route path="ducklings" element={<Ducklings />} />
        <Route path="register" element={<PetForm />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
  </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
