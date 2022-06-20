import React from "react";
import { Checkbox, Form } from "semantic-ui-react";
import "../ColorTone/ColorTone.css";

function ColorSlider() {
  const [value, setValue] = React.useState("clair");

  return (
    <div className="slider">
      <Form.Field>
        <Checkbox
          radio
          label="Clair"
          name="checkboxRadioGroup"
          value="clair"
          checked={value === "clair"}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label="Sombre"
          name="checkboxRadioGroup"
          value="sombre"
          checked={value === "sombre"}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
    </div>
  );
}

export default ColorSlider;
