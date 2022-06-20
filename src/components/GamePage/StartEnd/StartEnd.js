import { Grid, Placeholder, Segment } from "semantic-ui-react"
import './StartEnd.css'

function StartEnd() {
    return(
        
        <Grid  columns={2}>
    <Grid.Column>
      <Segment id="start-end">
        <Placeholder id="debut">
          <Placeholder.Header >
            Début:
          </Placeholder.Header>
          <Placeholder.Paragraph>
            
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>
  
    <Grid.Column>
      <Segment id="start-end">
        <Placeholder id="debut">
          <Placeholder.Header >
            Fin:
          </Placeholder.Header>
          <Placeholder.Paragraph>
            
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>
    </Grid>
    
    );
}

export default StartEnd;
