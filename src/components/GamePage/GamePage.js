import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { axiosInstance } from "requests";
import { updateGameInfo } from "../../actions/gameActions";
// import { useDispatch, useSelector } from "react-redux";

import Focus from "./Focus/Focus";
import FocusCreationModal from "./FocusCreationModal/FocusCreationsModal";
import "./GamePage.css";
import Periods from "./Periods/Periods";
import PeriodsCreationModal from "./Periods/PeriodsCreationModal";

import SettingsModal from "./SettingsModal/SettingsModal";
import StartEnd from "./StartEnd/StartEnd";

function GamePage() {
  const focus = useSelector((state) => state.game.focus);
  const gameId = useSelector((state) => state.game.gameId);
  const bigPicture = useSelector((state) => state.game.bigPicture);
  const start = useSelector((state) => state.game.start);
  const startTone = useSelector((state) => state.game.startTone);
  const end = useSelector((state) => state.game.end);
  const endTone = useSelector((state) => state.game.endTone);
  const dispatch = useDispatch();

  // console.log("state", focus);
  // const handleClick = (id) =>
  //   dispatch({
  //     type: "DELETE_FOCUS",
  //     payload: id,
  //   });

  // TODO:
  // useEffect(() => {
  //   getGameinfos(gameId);
  // }, [])

  useEffect(() => {
    async function fetchGameInfo() {
      const response = await axiosInstance.get(`/game/${gameId}/ongoing`);
      dispatch(updateGameInfo(response.data));
      console.log(
        "response >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
        response.data
      );
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
        <SettingsModal bigPicture={bigPicture} />
        <Focus />
        <FocusCreationModal />
      </div>
      <StartEnd
        start={start}
        startTone={startTone}
        end={end}
        endTone={endTone}
      />
      <PeriodsCreationModal />
      <Periods />
    </div>
  );
}

export default GamePage;
