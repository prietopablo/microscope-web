import { Header, Label } from "semantic-ui-react";
import { useSelector } from "react-redux";
import "./Focus.css";

function Focus() {
  const focus = useSelector((state) => state.game.focus);
  console.log("state", focus);

  return (
    <div className="focus">
      {focus
        ? focus.map((f, i) => (
            <Label key={i}>
              <Header as="h5">Username</Header>
              {f.label}
            </Label>
          ))
        : console.log("voici le focus", focus)}
    </div>
  );
}

export default Focus;
