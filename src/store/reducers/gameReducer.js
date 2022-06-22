import {
  UPDATE_NEW_GAME_FORM,
  UPDATE_PALETTE_NEW_GAME_FORM,
} from "../../actions/gameActions";

const initialState = {
  bigPicture: "",
  state: "",
  start: "",
  startTone: 0,
  end: "",
  endTone: 0,
  userId: null,
  currentUser: null,

  focus: [],
  periods: [],
  events: [],
  scenes: [],

  palette: [
    { text: "", status: 0 },
    { text: "", status: 0 },
    { text: "", status: 0 },
  ],
};

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FOCUS":
      return {
        ...state,
        focus: [...state.focus, action.payload],
      };

    case "ADD_PERIODS":
      return {
        ...state,
        periods: [...state.periods, action.payload],
      };

    case "ADD_EVENTS":
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case "ADD_SCENES":
      return {
        ...state,
        scenes: [...state.scenes, action.payload],
      };

    case UPDATE_NEW_GAME_FORM:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case UPDATE_PALETTE_NEW_GAME_FORM:
      const newPalette = state.palette.map((pal, index) => {
        if (index === action.index) {
          (pal.text = action.text), (pal.status = action.status);
        }
      });
      return {
        ...state,
        palette: newPalette,
      };

    default:
      return state;
  }
}

export default gameReducer;
