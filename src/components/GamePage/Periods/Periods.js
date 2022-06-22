import { useSelector } from "react-redux";
import { Button, Card, Grid } from "semantic-ui-react";
import "./Periods.css";

function Periods() {
  const periods = useSelector((state) => state.game.periods);
  console.log("state period", periods);
  const periode = [Grid.Column.length];

  return (
    <div className="periods-container">
      <Grid columns={periode.length}>
        <Grid.Row>
          {periods
            ? periods.map((p, i) => (
                <Grid.Column key={i} style={{ background: "black" }}>
                  <Card style={{ background: "rgb(196, 207, 217)" }}>
                    <Card.Content>
                      <Card.Header>Période n°</Card.Header>
                      <Card.Description> {p.label} </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button>créer un évenement</Button>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              ))
            : console.log("voici la periode", periods)}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Periods;

{
  /* <Grid divided>
 
  <Grid.Row></Grid.Row>
</Grid>; */
}
