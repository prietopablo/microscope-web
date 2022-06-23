import {
  PALETTE,
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
  periodId: [],

  palettes: [
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

    case PALETTE:
      console.log("on y est mdr");
      return {
        ...state,
        palettes: [...state.palettes, { text: "", status: 0 }],
      };

    default:
      return state;
  }
}

export default gameReducer;
