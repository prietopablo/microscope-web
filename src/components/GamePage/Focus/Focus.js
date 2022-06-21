import React from "react";
import { Header, Label } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import "./Focus.css";

function Focus() {
  const dispatch = useDispatch();
  const focus = useSelector((state) => state.game.focus);
  console.log("state", focus);
  const handleClick = (id) =>
    dispatch({
      type: "DELETE_FOCUS",
      payload: id,
    });

  return (
    <div className="focus">
      {focus
        ? focus.map((f, i) => (
            <Label key={i} onClick={() => handleClick(f)}>
              <Header as="h5">Username</Header>
              {f.label}
            </Label>
          ))
        : console.log("voici le focus", focus)}
    </div>
  );
}

export default Focus;
