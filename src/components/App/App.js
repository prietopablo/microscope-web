import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";
import SignUpPage from "../SignUpPage/SignUpPage";
import '../App/App.css';
import TOU from "../TOU/TOU";
import Contact from "../Contact/Contact";
import ArchivedGames from "../ArchivedGames/ArchivedGames";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/tou" element={<TOU />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/archived" element={<ArchivedGames />} />
      </Routes>
    </div>
  );
}

export default App;
