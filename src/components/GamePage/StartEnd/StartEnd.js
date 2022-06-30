/* eslint-disable react/prop-types */
import { Grid, Placeholder, Segment } from "semantic-ui-react";
import "./StartEnd.css";

function StartEnd({ start, startTone, end, endTone }) {
  return (
    <Grid columns={2} className="bookends">
      <Grid.Column className="bookends--column">
        <Segment className="bookends--card">
          <Placeholder className="bookends--content">
            <Placeholder.Header>
              <h2 className="bookends--title">Début:</h2>
              <div>
                {start} {startTone}
              </div>
            </Placeholder.Header>
          </Placeholder>
        </Segment>
      </Grid.Column>

      <Grid.Column className="bookends--column">
        <Segment className="bookends--card">
          <Placeholder className="bookends--content">
            <Placeholder.Header>
              <h2 className="bookends--title">Fin:</h2>
              <div>
                {end} {endTone}
              </div>
            </Placeholder.Header>
          </Placeholder>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default StartEnd;
