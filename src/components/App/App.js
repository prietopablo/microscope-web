import React from "react";
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";
import SignUpPage from "../SignUpPage/SignUpPage";
import TOU from "../TOU/TOU";
import Contact from "../Contact/Contact";
import ArchivedGames from "../ArchivedGames/ArchivedGames";
import CreateGame from "../CreateGame/CreateGame";
import '../App/App.css';
import { saveAuthorization, axiosInstance } from "../../requests";

function App() {

     useEffect( () => {
  
    const token = localStorage.getItem('token');
    console.log(token);
      if (!token) { return; }
     
      async function fetchData() {
      
        saveAuthorization(token);
        console.log(axiosInstance);
          const response = await axiosInstance.post('/tokenValidity');
          console.log(response.data);
       
          if (response.data.error || response.data.errorMessage) {
            return;
          }
      
          if (response.data.userId) {
            const user = await axiosInstance.get(`/profile/${response.data.userId}`);
            console.log(user);
          }
          
      }
      fetchData();

      
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/tou" element={<TOU />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/archived" element={<ArchivedGames />} />
        <Route path="/lobby" element={<CreateGame />} />
      </Routes>
    </div>
  );
}

export default App;
