import { Header, Label } from "semantic-ui-react";
import { useSelector } from "react-redux";
import "./Focus.css";

function Focus() {
  const focus = useSelector((state) => state.game.focus);
  const username = useSelector((state) => state.user.username);
  console.log("state", focus);

  return (
    <div className="focus">
      {focus
        ? focus.map((f, i) => (
            <Label key={i}>
              <Header as="h5">{username}</Header>
              {f.label}
            </Label>
          ))
        : console.log("voici le focus", focus)}
    </div>
  );
}

export default Focus;
