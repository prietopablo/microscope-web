import {
  PALETTE,
  PLAYER,
  UPDATE_NEW_GAME_FORM,
  UPDATE_PALETTE_NEW_GAME_FORM,
  UPDATE_PLAYERS_NEW_GAME_FORM,
} from "../../actions/gameActions";

const initialState = {
  bigPicture: "",
  gameState: "",
  start: "",
  startTone: 0,
  end: "",
  endTone: 0,

  players: [{ playerName: "" }, { playerName: "" }],

  palettes: [
    { text: "", status: 0 },
    { text: "", status: 0 },
    { text: "", status: 0 },
  ],

  gameId: null,

  focus: [],
  periods: [],
  events: [],
  scenes: [],
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

    case "GAME_ID":
      return {
        ...state,
        gameId: action.payload.id,
      };

    case UPDATE_NEW_GAME_FORM:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };

    case UPDATE_PALETTE_NEW_GAME_FORM:
      console.log("actionpayload", action.payload);
      const newPalette = [...state.palettes];
      newPalette[action.payload.index].status = action.payload.status;
      newPalette[action.payload.index].text = action.payload.text;
      return {
        ...state,
        palettes: newPalette,
      };
    case UPDATE_PLAYERS_NEW_GAME_FORM:
      const newPlayer = [...state.players];
      newPlayer[action.payload.index].playerName = action.payload.playerName;
      return {
        ...state,
        players: newPlayer,
      };
    case PLAYER:
      return {
        ...state,
        players: [...state.players, { playerName: "" }],
      };
    case PALETTE:
      return {
        ...state,
        palettes: [...state.palettes, { text: "", status: 0 }],
      };

    default:
      return state;
  }
}

export default gameReducer;
