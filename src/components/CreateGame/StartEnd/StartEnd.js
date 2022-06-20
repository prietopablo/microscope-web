import { Form, TextArea } from "semantic-ui-react";
import ColorTone from "./ColorTone/ColorTone";
import "./StartEnd.css";

function StartEnd() {
  return (
    <div className="bookend">
      <div className="bookend--titles">
        <h2 className="bookend--titles-title">Début</h2>
        <Form.Field control={TextArea} label="" placeholder="..." />
        <ColorTone />
      </div>
      <div className="bookend--titles">
        <h2 className="bookend--titles-title">Fin</h2>
        <Form.Field control={TextArea} label="" placeholder="..." />
        <ColorTone />
      </div>
    </div>
  );
}

export default StartEnd;
