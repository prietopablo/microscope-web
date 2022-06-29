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
              <div>
                {start} {startTone}
              </div>
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
              <div>
                {end} {endTone}
              </div>
            </Placeholder.Header>
            <Placeholder.Paragraph></Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default StartEnd;
