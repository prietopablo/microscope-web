import { useSelector } from "react-redux";
import { Button, Card } from "semantic-ui-react";
import "./Periods.css";

function Periods() {
  const periods = useSelector((state) => state.game.periods);
  console.log("state period", periods);

  return (
    <div className="card-container">
      {periods
        ? periods.map((p, i) => (
            <Card key={i} style={{ background: "rgb(196, 207, 217)" }}>
              <Card.Content>
                <Card.Header>Période n°</Card.Header>
                <Card.Description> {p.label} </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button>créer un évenement</Button>
              </Card.Content>
            </Card>
          ))
        : console.log("voici la periode", periods)}
    </div>
  );
}

export default Periods;
