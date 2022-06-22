/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import { Form, TextArea } from "semantic-ui-react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateNewGameForm } from "../../../actions/gameActions";

function BigPicture() {
  const content = useSelector((state) => state.game.BigPicture);
  const dispatch = useDispatch();
  return (
    <div className="players">
      <h2 className="players--title">Vue d'ensemble</h2>
      <Form.Field
        value={content}
        control={TextArea}
        label=""
        placeholder="Le thème général de la partie"
        onChange={(event) => {
          console.log("bigPicture", event.target.value);
          dispatch(updateNewGameForm("bigPicture", event.target.value));
        }}
      />
    </div>
  );
}

BigPicture.propTypes = {
  content: PropTypes.string,
};

// == Export
export default BigPicture;
