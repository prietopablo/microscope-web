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

  focus: [],
  periods: [],
  events: [],
  scenes: [],
  periodId: [],

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
      console.log(action.payload);
      return {
        ...state,
        periods: [...state.periods, action.payload],
      };

    case "ADD_EVENTS":
      console.log("event", action.payload);

      let foundPeriod = state.periods.find(
        (period) => period.id === action.payload.periodId
      );
      console.log(" found period", foundPeriod);
      foundPeriod = {
        ...foundPeriod,
        events: [...foundPeriod.events, action.payload],
      };

      const filteredPeriod = state.periods.filter(
        (period) => period.id !== action.payload.periodId
      );

      return {
        ...state,
        periods: [...filteredPeriod, foundPeriod],
      };

    case "ADD_SCENES":
      console.log(" scenes", action.payload);

      let foundEventsPeriod = state.periods.find(
        (period) => period.id === action.payload.periodId
      );

      const filteredEventsPeriod = state.periods.filter(
        (period) => period.id !== action.payload.periodId
      );
      let foundEvent = foundEventsPeriod.events.find(
        (event) => event.id === action.payload.eventId
      );
      console.log(foundEvent);
      foundEvent = {
        ...foundEvent,
        scenes: [...foundEvent.scenes, action.payload],
      };

      const filteredEvents = foundEventsPeriod.events.filter(
        (event) => event.id !== action.payload.eventId
      );

      foundEventsPeriod = {
        ...foundEventsPeriod,
        events: [...filteredEvents, foundEvent],
      };

      return {
        ...state,
        periods: [...filteredEventsPeriod, foundEventsPeriod],
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
