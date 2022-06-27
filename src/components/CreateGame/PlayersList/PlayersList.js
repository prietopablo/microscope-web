import { addPlayer } from "actions/gameActions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import PlayerField from "./PlayerField/PlayerField";
import "./PlayersList.css";

function PlayersList() {
  const players = useSelector((state) => state.game.players);
  const dispatch = useDispatch();
  return (
    <div className="players">
      <h2 className="players--title">Joueurs</h2>
      {players &&
        players.map((player, index) => (
          <PlayerField player={player} key={index} index={index} />
        ))}
      <Button
        inverted
        size="small"
        className="player--add"
        type="button"
        onClick={() => dispatch(addPlayer())}
      >
        +
      </Button>
    </div>
  );
}

// == Export
export default PlayersList;
