import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/Web-Escolavision/home" element={<Home />} />
            <Route path="/Web-Escolavision/about" element={<About />} />
            <Route path="/Web-Escolavision/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
