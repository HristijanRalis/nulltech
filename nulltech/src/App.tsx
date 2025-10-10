import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Services } from "./pages/Services/Services";
import { Contact } from "./pages/Contact/Contact";
import { Navbar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
