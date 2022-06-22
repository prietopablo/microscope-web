// import { useMediaQuery } from 'react-responsive';
// import { useSelector } from "react-redux";
import { Form, Button } from "semantic-ui-react";
import BigPicture from "./BigPicture/BigPicture";
import Palette from "./Palette/Palette";
import PlayersList from "./PlayersList/PlayersList";
import StartEnd from "./StartEnd/StartEnd";

import "./CreateGame.css";

function CreateGame() {
  // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  // const isDesktop = useMediaQuery({ query: '(min-width: 769px)'  });
  // const palettes = useSelector((state) => state.game.palette);
  // console.log(palettes);
  return (
    <div className="lobby">
      <div className="lobby--left">
        <PlayersList />
      </div>
      <div className="lobby--right">
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            // console.log(event);
          }}
        >
          <BigPicture />
          <StartEnd />
          <Palette />
          <Button inverted size="large" className="lobby--submit" type="submit">
            Lancer la partie
          </Button>
        </Form>
      </div>
      {/* {isMobile &&
      } */}
    </div>
  );
}

// == Export
export default CreateGame;
