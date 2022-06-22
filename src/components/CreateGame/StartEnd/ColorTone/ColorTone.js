import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateNewGameForm } from "../../../../actions/gameActions";
import { Checkbox, Form } from "semantic-ui-react";
import "../ColorTone/ColorTone.css";

function ColorSlider({ tone, isStartOrEnd }) {
  const dispatch = useDispatch();

  const getStartOrEnd = () => {
    if (isStartOrEnd === "start") return "startTone";
    if (isStartOrEnd === "end") return "endTone";
  };

  return (
    <div className="slider">
      <Form.Field>
        <Checkbox
          radio
          label="Clair"
          name="toneLight"
          value={1}
          checked={tone === 1}
          onChange={(e, data) =>
            dispatch(updateNewGameForm(getStartOrEnd(), data.value))
          }
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label="Sombre"
          name="toneDark"
          value={0}
          checked={tone === 0}
          onChange={(e, data) =>
            dispatch(updateNewGameForm(getStartOrEnd(), data.value))
          }
        />
      </Form.Field>
    </div>
  );
}

ColorSlider.propTypes = {
  tone: PropTypes.number,
  isStartOrEnd: PropTypes.string,
};

export default ColorSlider;
