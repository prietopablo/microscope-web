// import { useMediaQuery } from 'react-responsive';
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "semantic-ui-react";
import BigPicture from "./BigPicture/BigPicture";
import Palette from "./Palette/Palette";
import PlayersList from "./PlayersList/PlayersList";
import StartEnd from "./StartEnd/StartEnd";

import "./CreateGame.css";
import { createGame } from "../../actions/gameActions";
import { useNavigate } from "react-router-dom";

function CreateGame() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  // const isDesktop = useMediaQuery({ query: '(min-width: 769px)'  });
  // const palettes = useSelector((state) => state.game.palette);
  const gameId = useSelector((state) => state.game.gameId);
  // console.log(palettes);

  return (
    <div className="lobby">
      <Form
        className="lobby--form"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(createGame());
          navigate(`/game/${gameId}`);
        }}
      >
        <div className="lobby--left">
          <PlayersList />
        </div>
        <div className="lobby--right">
          <BigPicture />
          <StartEnd />
          <Palette />
          <Button
            circular
            inverted
            size="large"
            className="lobby--submit"
            type="submit"
          >
            Lancer la partie
          </Button>
        </div>
      </Form>
      {/* {isMobile &&
      } */}
    </div>
  );
}

// == Export
export default CreateGame;
