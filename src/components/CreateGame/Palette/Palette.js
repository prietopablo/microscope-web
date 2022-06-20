import { Form, TextArea } from "semantic-ui-react";
import "./Palette.css";

function Palette() {
  return (
    <div className="palette">
      <h2 className="palette--title">Palette</h2>
      <div className="palette--items">
        <div className="palette--field">
          <Form.Field control={TextArea} label="Oui" placeholder="..." />
        </div>
        <div className="palette--field">
          <Form.Field control={TextArea} label="Non" placeholder="..." />
        </div>
      </div>
    </div>
  );
}

// == Export
export default Palette;
