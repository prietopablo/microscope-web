// import { useMediaQuery } from 'react-responsive';

import { Form, Button } from "semantic-ui-react";
import BigPicture from "./BigPicture/BigPicture";
import Palette from "./Palette/Palette";
// import PlayersList from "./PlayersList/PlayersList";
import StartEnd from "./StartEnd/StartEnd";

import "./CreateGame.css";

function CreateGame() {
  // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  // const isDesktop = useMediaQuery({ query: '(min-width: 769px)'  });

  return (
    <div className="lobby">
      {/* <PlayersList /> */}
      <Form>
        <BigPicture />
        <StartEnd />
        <Palette />
        <Button inverted size="large" className="lobby--submit" type="submit">
          Lancer la partie
        </Button>
      </Form>
      {/* {isMobile &&
      } */}
    </div>
  );
}

// == Export
export default CreateGame;
