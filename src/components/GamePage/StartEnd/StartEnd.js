/* eslint-disable react/prop-types */
import { Grid, Placeholder, Segment } from "semantic-ui-react";
import "./StartEnd.css";

function StartEnd({ start, startTone, end, endTone }) {
  return (
    <Grid columns={2}>
      <Grid.Column>
        <Segment id="start-end">
          <Placeholder id="debut">
            <Placeholder.Header>
              <h2>Début:</h2>
              {start} {startTone}
            </Placeholder.Header>
            <Placeholder.Paragraph></Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment id="start-end">
          <Placeholder id="debut">
            <Placeholder.Header>
              <h2>Fin:</h2>
              {end} {endTone}
            </Placeholder.Header>
            <Placeholder.Paragraph></Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default StartEnd;
