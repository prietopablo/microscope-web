// import { useMediaQuery } from 'react-responsive';

import { Form } from "semantic-ui-react";
import BigPicture from "./BigPicture/BigPicture";
import PlayersList from "./PlayersList/PlayersList";

function CreateGame() {

  // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  // const isDesktop = useMediaQuery({ query: '(min-width: 769px)'  });

  return (
    <div className="lobby">
      <PlayersList />
      <Form>
        <BigPicture />
      </Form>
      {/* {isMobile &&
      } */}
    </div>    
  );
}

// == Export
export default CreateGame;