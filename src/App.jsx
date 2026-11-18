
import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import About from "./pages/about";
import "./App.css";
function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>GameVault 🎮</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
