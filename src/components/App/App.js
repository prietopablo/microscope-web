import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";
import SignUpPage from "../SignUpPage/SignUpPage";
import "../App/App.css";
import TOU from "../TOU/TOU";
import Contact from "../Contact/Contact";
import "../App/App.css";
import ArchivedGames from "../ArchivedGames/ArchivedGames";
import { saveAuthorization, axiosInstance } from "../../requests";
import GamePage from "../GamePage/GamePage";
import CreateGame from "../CreateGame/CreateGame";
import Profile from "../Profile/Profile";
import { actionLoginSuccess } from "../../actions/loginActions";
import { useDispatch } from "react-redux";
// import { actionSaveUser } from "../../actions/loginActions";
// import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("token : ", token);

    if (!token) {
      return;
    }

    async function fetchData() {
      saveAuthorization(token);

      const response = await axiosInstance.post("/verifsignin");
      console.log(response.data);

      if (response.data.error || response.data.errorMessage) {
        return localStorage.clear();
      }

      dispatch(
        actionLoginSuccess(response.data.userName, response.data.userId)
      );
      // if (response.data.userId) {
      //   const user = await axiosInstance.get(
      //     `/profile/${response.data.userId}`
      //   );
      //   console.log(user.data);
      // }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/tou" element={<TOU />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/archived" element={<ArchivedGames />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/lobby" element={<CreateGame />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
