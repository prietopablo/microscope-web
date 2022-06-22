// import { useDispatch } from "react-redux";
import { Form, Input, Checkbox } from "semantic-ui-react";

function PaletteField() {
  //   const dispatch = useDispatch();
  return (
    <div className="palette--items">
      <div className="palette--field">
        <Input
          fluid
          placeholder="..."
          //   onChange={(event) => {
          //       dispatch(updatePaletteNewGameForm(0, event.target.value));
          //   }}
        />
        <Form.Field>
          <Checkbox
            radio
            label="Oui"
            name="oui"
            value={1}
            //   checked={tone === 1}
            //   onChange={(e, data) =>
            //     dispatch(updatePaletteNewGameForm(TODO:, data.value))
            //   }
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label="Non"
            name="non"
            value={0}
            //   checked={tone === 0}
            //   onChange={(e, data) =>
            //     dispatch(updatePaletteNewGameForm(TODO:, data.value))
            //   }
          />
        </Form.Field>
      </div>
    </div>
  );
}

// == Export
export default PaletteField;
