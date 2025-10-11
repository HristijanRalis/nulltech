import "./App.css";

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
      <section id="home" className="section">
        <Home />
      </section>
      <section id="aboutUs" className="section">
        <AboutUs />
      </section>
      <section id="services" className="section">
        <Services />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
