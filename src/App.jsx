import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./components/Locomotive.css"
import Experience from "./pages/Experience";
const App = () => {
  return (
    <>
    <Navbar/>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/project" element={<Project />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       
    </>
  );
};

export default App;
