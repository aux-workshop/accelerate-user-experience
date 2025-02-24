import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Event from "./components/Event";
import Contact from "./components/Contact";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
