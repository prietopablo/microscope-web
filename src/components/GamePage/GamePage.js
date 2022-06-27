import { useEffect } from "react";
import { useSelector } from "react-redux";
import { axiosInstance } from "requests";
// import { useDispatch, useSelector } from "react-redux";
import Focus from "./Focus/Focus";
import FocusCreationModal from "./FocusCreationModal/FocusCreationsModal";
import "./GamePage.css";
import Periods from "./Periods/Periods";
import PeriodsCreationModal from "./Periods/PeriodsCreationModal";

import SettingsModal from "./SettingsModal/SettingsModal";
import StartEnd from "./StartEnd/StartEnd";

function GamePage() {
  const gameId = useSelector((state) => state.game.gameId);
  // const dispatch = useDispatch();
  // const focus = useSelector((state) => state.game.focus);
  // console.log("state", focus);
  // const handleClick = (id) =>
  //   dispatch({
  //     type: "DELETE_FOCUS",
  //     payload: id,
  //   });

  useEffect(() => {
    async function fetchGameInfo() {
      const response = await axiosInstance.get(`/game/${gameId}/ongoing`);
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", response);
    }
    fetchGameInfo();
  }, []);

  useEffect(() => {
    console.log("verif focus", focus);
  }, [focus]);

  return (
    <div className="">
      <div className="players-usernames">
        <div className="player-username">Adlen</div>
        <div className="player-username">Jeremy</div>
        <div className="player-username">Victor</div>
        <div className="player-username">Pablo</div>
      </div>
      <div className="focus">
        <SettingsModal />
        <Focus />
        <FocusCreationModal />
      </div>
      <StartEnd />

      <PeriodsCreationModal />

      <Periods />
    </div>
  );
}

export default GamePage;
