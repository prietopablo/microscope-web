/* eslint-disable react/prop-types */
import { Grid, Input } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePlayersNewGameForm } from "actions/gameActions";

function PlayerField({ player, index }) {
  const [localPlayer, setLocalPlayer] = useState(player);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePlayersNewGameForm(localPlayer.playerName, index));
  }, [localPlayer]);
  return (
    <div className="player--field">
      <Grid>
        <Grid.Column width={14}>
          <Input
            fluid
            placeholder={`Joueur ${index + 1}`}
            onChange={(event) => {
              setLocalPlayer({
                ...localPlayer,
                playerName: event.target.value,
              });
            }}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}

// == Export
export default PlayerField;
