import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Course from "./page/Course.jsx";
import Event from "./page/Event.jsx";
import Teacher from "./page/Teacher.jsx";
import Footer from "./layout/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/event" element={<Event />} />
          <Route path="/team-teacher" element={<Teacher />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
