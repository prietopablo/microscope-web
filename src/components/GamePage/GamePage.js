import { useEffect } from "react";
import { useSelector } from "react-redux";
import Focus from "./Focus/Focus";
import FocusCreationModal from "./FocusCreationModal/FocusCreationsModal";
import "./GamePage.css";
import Periods from "./Periods/Periods";
import PeriodsCreationModal from "./Periods/PeriodsCreationModal";

import SettingsModal from "./SettingsModal/SettingsModal";
import StartEnd from "./StartEnd/StartEnd";

function GamePage() {
  const focus = useSelector((state) => state.game.focus);
  // const dispatch = useDispatch();
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
