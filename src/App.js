import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience.js";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
