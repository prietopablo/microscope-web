/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { Form, Input, Checkbox, Grid } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { updatePaletteNewGameForm } from "../../../../actions/gameActions";

function PaletteField({ palette, index }) {
  const [localPalette, setLocalPalette] = useState(palette);
  const dispatch = useDispatch();
  //   console.log("palette : ", palette);
  // console.log("localPalette : ", localPalette);

  useEffect(() => {
    setLocalPalette({ ...localPalette, text: "" });
  }, []);

  useEffect(() => {
    dispatch(
      updatePaletteNewGameForm(localPalette.status, localPalette.text, index)
    );
  }, [localPalette]);
  return (
    <div className="palette--field">
      <Grid stretched>
        <Grid.Column width={14}>
          <Input
            fluid
            value={localPalette.text}
            placeholder={`Couleur ${index + 1}`}
            onChange={(event) => {
              setLocalPalette({ ...localPalette, text: event.target.value });
            }}
          />
        </Grid.Column>
        <Grid.Column>
          <Form.Field>
            <Checkbox
              radio
              label="Oui"
              name="oui"
              value={1}
              checked={localPalette.status === 1}
              onChange={(_, data) =>
                setLocalPalette({ ...localPalette, status: data.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label="Non"
              name="non"
              value={0}
              checked={localPalette.status === 0}
              onChange={(_, data) =>
                setLocalPalette({ ...localPalette, status: data.value })
              }
            />
          </Form.Field>
        </Grid.Column>
      </Grid>
    </div>
  );
}

PaletteField.propTypes = {};

// == Export
export default PaletteField;
