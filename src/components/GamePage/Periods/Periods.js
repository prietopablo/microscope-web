import { useSelector } from "react-redux";
import { Card, Grid } from "semantic-ui-react";
import EventsCreationModal from "../EventsCreationModal/EventsCreationModal";
import ScenesCreationModal from "../ScenesCreationModal/ScenesCreationModal";
import "./Periods.css";

function Periods() {
  const periods = useSelector((state) => state.game.periods);
  // console.log("state period", periods);
  const periode = [Grid.Column.length];
  // const events = useSelector((state) => state.game.events);
  // const scenes = useSelector((state) => state.game.scenes);

  return (
    <Grid columns={periode.length} divided>
      <Grid.Row>
        {periods &&
          periods.map((p, i) => (
            <Grid.Column key={i} style={{ background: "black" }}>
              <Card style={{ background: "rgb(196, 207, 217)" }}>
                <Card.Content>
                  <Card.Header>Période n°</Card.Header>
                  <Card.Description> {p.label} </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <EventsCreationModal periodId={p.id} />
                </Card.Content>
              </Card>

              <Grid columns={2} divided>
                {/* ROW EVENEMENT */}
                {p.events &&
                  p.events.map((e, i) => (
                    <Grid.Row key={i}>
                      {/* COLONNE EVENEMENT */}

                      <Grid.Column verticalAlign="middle">
                        {/* CARTE EVENEMENT */}

                        <Card style={{ background: "rgb(45, 118, 103)" }}>
                          <Card.Content>
                            <Card.Header>EVENEMENT 1</Card.Header>

                            <Card.Description>{e.label}</Card.Description>
                          </Card.Content>
                          <Card.Content extra>
                            <ScenesCreationModal
                              eventId={e.id}
                              periodId={p.id}
                            />
                          </Card.Content>
                        </Card>

                        {/* FIN CARTE EVENEMENT */}
                      </Grid.Column>

                      {/* FIN COLONNE EVENEMENT */}

                      {/* COLONNE SCENE */}
                      <Grid.Column>
                        {/* CARTE SCENE */}
                        {e.scenes &&
                          e.scenes.map((s, i) => (
                            <Card
                              key={i}
                              style={{ background: "rgb(77, 92, 106)" }}
                            >
                              <Card.Content>
                                <Card.Header>SCENE 1</Card.Header>
                                <Card.Meta>
                                  <span className="date">Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>{s.label}</Card.Description>
                              </Card.Content>
                              <Card.Content extra></Card.Content>
                            </Card>
                          ))}
                        {/* FIN CARTE SCENE */}
                      </Grid.Column>
                      {/* FIN COLONNE SCENE */}
                    </Grid.Row>
                  ))}

                {/* FIN ROW EVENEMENT */}
              </Grid>
            </Grid.Column>
          ))}
      </Grid.Row>
    </Grid>
  );
}

export default Periods;

{
  /* <Grid divided>
 
  <Grid.Row></Grid.Row>
</Grid>; */
}
