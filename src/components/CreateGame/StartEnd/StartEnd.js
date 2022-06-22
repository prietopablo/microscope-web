import { Form, TextArea } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { updateNewGameForm } from "../../../actions/gameActions";
import { useDispatch } from "react-redux";
import ColorTone from "./ColorTone/ColorTone";
import "./StartEnd.css";

function StartEnd() {
  const game = useSelector((state) => state.game);
  const start = useSelector((state) => state.game.start);
  const end = useSelector((state) => state.game.end);
  const dispatch = useDispatch();
  return (
    <div className="bookend">
      <div className="bookend--titles">
        <h2 className="bookend--titles-title">Début</h2>
        <Form.Field
          value={start}
          control={TextArea}
          label=""
          placeholder="Comment l'histoire commence"
          onChange={(event) => {
            console.log("start", event.target.value);
            dispatch(updateNewGameForm("start", event.target.value));
          }}
        />
        <ColorTone tone={game.startTone} isStartOrEnd={"start"} />
      </div>
      <div className="bookend--titles">
        <h2 className="bookend--titles-title">Fin</h2>
        <Form.Field
          value={end}
          control={TextArea}
          label=""
          placeholder="Comment l'histoire se termine"
          onChange={(event) => {
            console.log("end", event.target.value);
            dispatch(updateNewGameForm("end", event.target.value));
          }}
        />
        <ColorTone tone={game.endTone} isStartOrEnd={"end"} />
      </div>
    </div>
  );
}

export default StartEnd;
