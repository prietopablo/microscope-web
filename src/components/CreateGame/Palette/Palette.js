// import { useDispatch } from "react-redux";
// import { Input, TextArea } from "semantic-ui-react";
// import { updatePaletteNewGameForm } from "../../../actions/gameActions";
import "./Palette.css";
import PaletteField from "./PaletteField/PaletteField";

function Palette() {
  // const dispatch = useDispatch();
  return (
    <div className="palette">
      <h2 className="palette--title">Palette</h2>
      <PaletteField />
    </div>
  );
}

// == Export
export default Palette;
