/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { addPalette } from "../../../actions/gameActions";
import { Button } from "semantic-ui-react";
// import { updatePaletteNewGameForm } from "../../../actions/gameActions";
import "./Palette.css";
import PaletteField from "./PaletteField/PaletteField";

function Palette() {
  const palettes = useSelector((state) => state.game.palettes);
  console.log(palettes);
  const dispatch = useDispatch();
  return (
    <div className="palette">
      <h2 className="palette--title">Palette</h2>
      {palettes &&
        palettes.map((palette, index) => (
          <PaletteField palette={palette} key={index} index={index} />
        ))}
      <Button
        inverted
        size="small"
        className="palette--add"
        type="button"
        onClick={() => dispatch(addPalette())}
      >
        +
      </Button>
    </div>
  );
}

// == Export
export default Palette;
